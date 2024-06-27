<?php
/**
 * Plugin Name:       Pet Stop Contact Form Block
 * Description:       Custom contact form created for Pet Stop of Virginia/Central Florida.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Jesse Schlothauer
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ps-contact-form-block
 *
 * @package CreateBlock
 */

 if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
 function create_block_ps_contact_form_block_init() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'create_block_ps_contact_form_block_init' );

function ps_handle_ghl_auth() {
	
	if ( !$_GET['code'] ) {
		return;
	}

	$str = file_get_contents( plugins_url( '/api-config.json', __FILE__ ) );
	$api_config = json_decode($str);

	$ghl_authcode = $_GET['code'];

	$curl = curl_init();

	curl_setopt_array($curl, [
		CURLOPT_URL => "https://services.leadconnectorhq.com/oauth/token",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "POST",
		CURLOPT_POSTFIELDS => "client_id=$api_config->clientId&client_secret=$api_config->clientSecret" . 
			"&grant_type=authorization_code&code=$ghl_authcode&refresh_token=&user_type=Company&redirect_uri=$api_config->redirectUrl",
		CURLOPT_HTTPHEADER => [
			"Accept: application/json",
			"Content-Type: application/x-www-form-urlencoded"
		]
	]);

	$response_json = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ( $err ) {
		var_dump($err);
	}

	var_dump($response_json);
	$response = json_decode($response_json);
	$fresh_config = (object) [
		'baseUrl' => $api_config->baseUrl,
		'clientId' => $api_config-> clientId,
		'clientSecret' => $api_config->clientSecret,
		'redirectUrl' => $api_config->redirectUrl
	];

	if ( (isset( $response->error ) && isset( $api_config->access_token ))
		|| (isset( $api_config->error ) && isset( $response->access_token )) ) {
		$api_config = $fresh_config;
	}

	$merged = (object) array_merge( (array) $api_config, (array) $response );
	$new_config = json_encode($merged, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
	file_put_contents( ABSPATH . 'wp-content/plugins/ps-contact-form-block/api-config.json', $new_config );

	if ( isset( $response->error ) ) {
		echo '<p>An error has occurred. ' . $response->error_description . '</p>';
		return;
	}	else {
		// header( 'refresh:5; url=' . admin_url('/admin.php?page=ps_contact_form_options') );
		echo '<p>Connection successful. Redirecting...</p>';
	}

}

add_action('admin_post_nopriv_api_auth', 'ps_handle_ghl_auth');
add_action('admin_post_api_auth', 'ps_handle_ghl_auth');

function ps_refresh_access_token( $user_type, $location_id = "" ) {
	$str = file_get_contents( plugins_url( '/api-config.json', __FILE__ ) );
	$api_config = json_decode($str);

	$curl = curl_init();

	if ( $user_type === "Company" ) {
		$refresh_token = $api_config->refresh_token;
	} else {
		foreach($api_config->location as $known_location) {
			if ( $location_id === $known_location->_id && isset( $known_location->refresh_token )) {
				$refresh_token = $known_location->refresh_token;
			} else if ( !isset($known_location->refresh_token) ) {
				ps_ghl_get_location_tokens( $known_location->name );
				ps_refresh_access_token( $user_type, $known_location->_id );
				return;
			} else {
				echo 'Error: invalid location ID';
			}

		}
	}

	curl_setopt_array($curl, [
		CURLOPT_URL => "https://services.leadconnectorhq.com/oauth/token",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "POST",
		CURLOPT_POSTFIELDS => "client_id=$api_config->clientId&client_secret=$api_config->clientSecret" . 
			"&grant_type=refresh_token&code=&refresh_token=$refresh_token&user_type=$user_type&redirect_uri=",
		CURLOPT_HTTPHEADER => [
			"Accept: application/json",
			"Content-Type: application/x-www-form-urlencoded"
		]
	]);

	$response_str = curl_exec($curl);
	$err = curl_error($curl);
	
	curl_close($curl);

	if ($err) {
		echo "cURL Error: " . $err;
	}

	$response = json_decode($response_str);

	if ( isset($response->statusCode) ) {
		echo '<p>An error has occurred. ' . $response->message . '</p>';
	}

	unset($api_config->access_token);
	unset($api_config->refresh_token);

	$merged = (object) array_merge( (array) $api_config, (array) $response );
	$new_config = json_encode($merged, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
	file_put_contents( ABSPATH . 'wp-content/plugins/ps-contact-form-block/api-config.json', $new_config );
}

function ps_ghl_api_call( $curl_opts, $user_type, $tries = 0 ) {

	$curl = curl_init();

	curl_setopt_array($curl, $curl_opts);

	$response_json = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ( $err ) {
		echo "cURL Error: " . $err;
		return;
	}

	$response = json_decode($response_json);

	if (!isset($response->statusCode)) {
		return $response;
	}

	switch ($response->statusCode) {
		case 200:
			return $response;
		case 400:
			echo 'Error: ' . $response->message;
			break;
		case 401:
			return ['success' => false, 'message' => $response->message];
			if ( $tries > 2 ) {
				echo 'Error: Too many failed API attempts.';
				break;
			}
			ps_refresh_access_token( $user_type );
			$tries++;
			ps_ghl_api_call( $curl_opts, $user_type, $tries );
			break;
		case 422:
			echo 'Error: ' . $response->message;
			break;
		default:
			return $response;
	}
}

function ps_ghl_get_locations() {
	$str = file_get_contents( plugins_url( '/api-config.json', __FILE__ ) );
	$api_config = json_decode($str);
	$appId = "6679dffae548834c93b053ca";

	$opts = [
		CURLOPT_URL => "https://services.leadconnectorhq.com/oauth/installedLocations?companyId=$api_config->companyId&appId=$appId",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "GET",
		CURLOPT_HTTPHEADER => [
			"Accept: application/json",
			"Authorization: Bearer $api_config->access_token",
			"Version: 2021-07-28"
		]
	];

	$response = ps_ghl_api_call( $opts, 'Company' );

	if ( isset($response->success) && (!$response->success)) {
		return $response;
	}

	if ( isset($response->locations) ) {
		$merged = (object) array_merge((array) $api_config, (array) $response);
		$new_config = json_encode($merged, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
		file_put_contents( ABSPATH . 'wp-content/plugins/ps-contact-form-block/api-config.json', $new_config );
		return $new_config;
	}
}

/**
 * Retrieves location access tokens for a given input array of locations.
 * 
 * @param locations Array of location names. Must exactly match location name in LeadSmart.
 * @return new_config Returns a new object representing the current state of api-config.json.
 * 										Returns void on error.
 */
function ps_ghl_get_location_tokens( $locations ) {
	$str = file_get_contents( plugins_url( '/api-config.json', __FILE__ ) );
	$api_config = json_decode($str);
	
	if ( !$api_config->locations ) {
		$api_config = ps_ghl_get_locations();
	}

	$ids = [];

	foreach($locations as $location) {
		foreach($api_config->locations as $known_location ) {
			if ($location === $known_location->name) {
				array_push($ids, $known_location->_id);
			}
		}
	}

	if (!$ids) {
		echo 'Error - no valid location given.';
		return;
	}

	$opts = [
		CURLOPT_URL => "https://services.leadconnectorhq.com/oauth/locationToken",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "POST",
		CURLOPT_POSTFIELDS => "",
		CURLOPT_HTTPHEADER => [
			"Accept: application/json",
			"Authorization: Bearer $api_config->access_token",
			"Content-Type: application/x-www-form-urlencoded",
			"Version: 2021-07-28"
		]
	];

	$responses = array_map(function ($location_id) use ($api_config, $opts) {	
		$opts[CURLOPT_POSTFIELDS] = "companyId=$api_config->companyId&locationId=$location_id";
		return ps_ghl_api_call($opts, 'Company');
	}, $ids);

	if (!$responses) {
		echo 'Error: API call(s) failed.';
		return;
	}

	$updated_locations = [];

	foreach( $api_config->locations as $location ) {
		foreach( $responses as $response ) {
			if ( $response->locationId === $location->_id ) {
				$updated_location = (object) array_merge((array) $location,(array) $response);
				array_push($updated_locations, $updated_location);
			}
		}
	}

	$new_locations = array_merge($api_config->locations, $updated_locations);
	$api_config->locations = $new_locations;
	$new_config = json_encode($api_config, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
	file_put_contents( ABSPATH . 'wp-content/plugins/ps-contact-form-block/api-config.json', $new_config );
	return $new_config;
}

/**
 * Create a contact in LeadSmart.
 * 
 * @param contact_info Object with keys 'name', 'email', 'phone', 'customFields'->'message'
 * @param location String with value "RVA", "VAB", or "FL"
 * @return response->contact->id The created contact's id number.
 */
function ps_ghl_create_contact( $contact_info, $location ) {
	$str = file_get_contents( plugins_url( '/api-config.json', __FILE__ ) );
	$api_config = json_decode($str);
	
	if ( !isset($api_config->locations ) ) {
		$api_config = ps_ghl_get_locations();
	}

	switch ( $location ) {
		case "RVA":
			$target_locationId = "2wiA3de3qyq01bO1uRJh";
			break;
		case "VAB":
			$target_locationId = "zudnQMgArw2gVaoLhvg8";
			break;
		case "FL":
			$target_locationId = "DOF73AiKjSuiKbrMVdjJ";
			break;
	}

	$getLocation = function () use ($api_config, $target_locationId) {
		foreach($api_config->locations as $known_location) {
			if ($target_locationId === $known_location->_id) {
				return $known_location;
			}
		}
	};

	$target_location = $getLocation();

	if ( !isset($target_location->access_token) ) {
		$api_config = ps_ghl_get_location_tokens([$target_location->name]);
		$target_location = $getLocation();
	}

	var_dump($contact_info);

	$contact_schema = [
		'name' => $contact_info['name'],
		'email' => $contact_info['email'],
		'locationId' => $target_location->_id,
		'phone' => $contact_info['phone'],
		'customFields' => [
			(object) [
				'key' => 'message',
				'field_value' => $contact_info['message']
			]
		]
	];

	$opts = [
		CURLOPT_URL => "https://services.leadconnectorhq.com/contacts/",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "POST",
		CURLOPT_POSTFIELDS => json_encode($contact_schema),
		CURLOPT_HTTPHEADER => [
			"Accept: application/json",
			"Authorization: Bearer $target_location->access_token",
	    "Content-Type: application/json",
			"Version: 2021-07-28"
		]
	];

	$response = ps_ghl_api_call( $opts, 'Location' );

	if ( !isset($response->contact) ) {
		var_dump($response);
		return [
			'success' => false,
			'message' => 'Error: Contact could not be created.'
		];
	}

	return [
		'contact_id' => $response->contact->id,
		'success' => true
	];
}

// function ps_ghl_get_calendar_info( $calendar, $location ) {

// }

function ps_handle_form_submit() {

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		if ( !$_COOKIE['session_id'] ) {
			setcookie('session_id', wp_generate_uuid4(), array(
				'samesite' => 'Lax',
				'httponly' => true,
				'secure' => true
			));
		}

		$name = sanitize_text_field($_POST['name']);
		$email = sanitize_text_field($_POST['email']);
		$phone = sanitize_text_field($_POST['phone']);
		$message = sanitize_text_field($_POST['message']);
		$location = sanitize_text_field($_POST['location']);
		$session_id = $_COOKIE['session_id'];
		$contact_id = ps_ghl_create_contact([
			'name' => $name,
			'email' => $email,
			'phone' => $phone,
			'message' => $message
		], $location);

		if ($contact_id['success'] == false) {
			$response = $contact_id;
		} else {
			global $wpdb;

			$table_name = $wpdb->prefix . 'contact_form_submissions';
			$data = array(
				'name' => $name,
				'email' => $email,
				'phone' => $phone,
				'message' => $message,
				'location' => $location,
				'session_id' => $session_id,
				'contact_id' => $contact_id,
				'submission_time' => current_time('mysql')
			);
			$insert_result = $wpdb->insert($table_name, $data);

			if ($insert_result === false) {
				$response = array(
					'success' => false,
					'message' => 'Error saving the form data.'
				);
			} else {
				$response = array(
					'success' => true,
					'message' => 'Form data saved successfully.'
				);
			}
		}

		header('Content-Type: application/json');
		echo json_encode($response);
		return;
	}
}

add_action( 'admin_post_nopriv_contact_form', 'ps_handle_form_submit' );
add_action( 'admin_post_contact_form', 'ps_handle_form_submit' );

function ps_display_contact_form_submissions_page() {

	class Contact_Form_Table extends WP_List_Table {

		public $table_name;
		
		public function __construct() {
			parent::__contruct(array(
				'singular' => 'singular_form',
				'plural' => 'plural_form'
			));
		}
		
		public function get_columns() {
			return array(
				'cb' => array('<input type="checkbox"/>', true),
				'name' => array('Name', true),
				'email' => array('Email', true),
				'phone' => array('Phone', true),
				'message' => array('Message', true),
				'location' => array('Location', true),
				'submission_time' => array('Submission Time', true),
				'id' => array('ID', true)
			);
		}
		
		public function process_bulk_action() {
			$action = $this->current_action();
			if ($action === 'delete') {
				$delete_ids = esc_sql( $_POST['post'] );
				foreach ($delete_ids as $did) {
					global $wpdb;
					$wpdb->query($wpdb->prepare( "DELETE FROM $this->table_name WHERE id=%d", $did ));
				}
			}
		}
		
		public function prepare_items() {
			global $wpdb;
			$headers = [];
			$hidden = [];

			$this->screen = get_current_screen();
			$this->table_name = $wpdb->prefix . 'contact_form_submissions';
			
			$this->process_bulk_action();
			$this->items = $wpdb->get_results("SELECT * FROM $this->table_name WHERE name <> '' AND email <> '' AND phone <> ''
			AND location <> '' ORDER BY submission_time DESC", ARRAY_A);
		
			
			foreach($this->get_columns() as $key => $value) {
				if (!$value[1]) {
					$hidden[] = $key;
				}
				$headers[$key] = $value[0];
			}

			$this->_column_headers = array(
				$headers, $hidden, array(), 'submission_time'
			);
		}
		
		protected function column_default( $item, $column_name ) {
			echo esc_html($item[$column_name]);
		}
		
		protected function column_cb( $item ) {
			echo '<input type="checkbox" name="post[]" value="' . $item['id'] . '"/>';
		}
		
		protected function get_bulk_actions()
		{
			return array(
				'delete' => 'Delete'
			);
		}
		
	}

	echo '<form id="ps-contact-list-table" method="post" action="' . $_SERVER['PHP_SELF'] . '?page=contact_form_submissions">';
	$contact_form_table = new Contact_Form_Table();
	$contact_form_table->prepare_items();
	$contact_form_table->display();
	echo '</form>';
}

function ps_register_contact_form_submissions_page() {
	add_menu_page(
		'Contact Form Submissions',
		'Form Submissions',
		'manage_options',
		'contact_form_submissions',
		'ps_display_contact_form_submissions_page',
		'dashicons-feedback'
	);
}

add_action( 'admin_menu', 'ps_register_contact_form_submissions_page' );

function ps_display_options_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	$str = file_get_contents( plugins_url('/api-config.json', __FILE__ ) );
	$api_config = json_decode($str);
	$scope_list = ['calendars.readonly','calendars/events.write','contacts.write'];
	$scope = implode("%20", $scope_list);
	$auth_link = "$api_config->baseUrl/oauth/chooselocation?response_type=code&redirect_uri=$api_config->redirectUrl&client_id=$api_config->clientId&scope=$scope";

	?>
	<div class="wrap">
		<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
		<label for="ghl-auth">Click here to connect to LeadSmart:</label>
		<a href=<?php echo esc_html( $auth_link )?> class="button button-primary">Connect</a>
	</div>
	<?php
}

function ps_register_options_page() {
	add_submenu_page(
		'contact_form_submissions',
		'PS Contact Form Options',
		'Form Options',
		'manage_options',
		'ps_contact_form_options',
		'ps_display_options_page'
	);
}

add_action( 'admin_menu', 'ps_register_options_page' );

function ps_handle_zip_request() {
	class response {
		public $rva = [];
		public $vab = [];
		public $fl = [];
		
		function __construct($rva, $vab, $fl) {
			$this->rva = $rva;
			$this->vab = $vab;
			$this->fl = $fl;
		}
	}

	$zips = array();

	if (($handle = fopen(ABSPATH . 'wp-content/uploads/zip-codes.csv', 'r')) !== FALSE) {
		while (($data = fgetcsv($handle, 100, ',')) !== FALSE) {
			$row = array(
				'rva' => (int) $data[0],
				'vab' => (int) $data[1],
				'fl' => (int) $data[2]
			);
			array_push($zips, $row);
		}
		

		if ($_SERVER['REQUEST_METHOD'] === 'GET') {
			$rva = array_column($zips, 'rva');
			$vab = array_column($zips, 'vab');
			$fl = array_column($zips, 'fl');
		
			$response = new response($rva, $vab, $fl);
			header('Content-Type: application/json');
			echo json_encode($response);
			exit;
		}

	}
}

add_action( 'admin_post_nopriv_zip_request', 'ps_handle_zip_request' );
add_action( 'admin_post_zip_request', 'ps_handle_zip_request' );


function ps_handle_appointment_request() {

}