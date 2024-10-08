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

define( 'PS_CONTACT_FORM_DIR', plugin_dir_path(__FILE__) );
define( 'PS_NAMETABLE', [
	'2wiA3de3qyq01bO1uRJh' => 'RVA',
	'zudnQMgArw2gVaoLhvg8' => 'VAB',
	'DOF73AiKjSuiKbrMVdjJ' => 'FL'
]);
require_once ABSPATH . 'wp-admin/includes/upgrade.php';

/**
 * Class used to represent configuration properties of GHL API. Meant to replace the deprecated
 * api-config.json file. Interacts with wpdb for persistence.
 */
class GHL_Config {
	private object $config;
	private string $table_name;

	function __construct() {
		global $wpdb;
		$this->table_name = $wpdb->prefix . 'ps_api_info';

		maybe_create_table( $this->table_name, 'CREATE TABLE ' . $this->table_name . ' (
			id MEDIUMINT NOT NULL AUTO_INCREMENT,
			name TINYTEXT,
			props JSON,
			PRIMARY KEY (id)
		);' );

		if ( !$wpdb->get_results("SELECT * FROM $this->table_name WHERE name LIKE '%config%' LIMIT 1") ) {
			$this->config = (object) [
				"baseUrl" => "https://marketplace.leadconnectorhq.com",
				"clientId" => "6679dffae548834c93b053ca-lxup3ovw",
				"clientSecret" => "a4abc9e8-d49e-4e16-80ee-a743f58a3278",
				"redirectUrl" => "http://localhost:10005/wp-admin/admin-post.php?action=api_auth",
				"token_type" => "Bearer",
				"expires_in" => 86399,
				"scope" => "calendars.readonly calendars/events.write calendars/events.readonly calendars/groups.readonly calendars/resources.readonly contacts.write oauth.write oauth.readonly"
			];

			$wpdb->insert($this->table_name, [
				'id' => 1,
				'name' => 'config',
				'props' => json_encode($this->config)
			]);
		} else {
			$results = $wpdb->get_results("SELECT props FROM $this->table_name WHERE name LIKE '%config%'");
			$this->config = json_decode($results[0]->props);
		}
	}

	public function getConfig() {
		global $wpdb;
		$results = $wpdb->get_results("SELECT props FROM $this->table_name WHERE name LIKE '%config%'");
		$this->config = json_decode($results[0]->props);
		return $this->config;
	}

	public function setConfig( object $new_config ) {
		global $wpdb;
		$this->config = $new_config;
		$wpdb->replace($this->table_name, [
			'id' => 1,
			'name' => 'config',
			'props' => json_encode($this->config)
		]);
	}

}

$ghl_config = new GHL_Config();

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

/**
 * Handles the inital OAuth 2.0 process for authorizing the app through LeadSmart.
 * 
 * @see https://highlevel.stoplight.io/docs/integrations/a04191c0fabf9-authorization
 * @return void Displays a page communicating successful connection or an error. If successful,
 * 							redirects back to the settings page after 5s.
 */
function ps_handle_ghl_auth() {
	
	if ( !$_GET['code'] ) {
		return;
	}
	
	// $str = file_get_contents( plugins_url( '/api-config.json', __FILE__ ) );
	// $api_config = json_decode($str);
	global $ghl_config;

	$api_config = $ghl_config->getConfig();

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
	$ghl_config->setConfig($merged);

	// $new_config = json_encode($merged, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
	// file_put_contents( ABSPATH . 'wp-content/plugins/ps-contact-form-block/api-config.json', $new_config );

	if ( isset( $response->error ) ) {
		echo '<p>An error has occurred. ' . $response->error_description . '</p>';
		return;
	}	else {
		header( 'refresh:5; url=' . admin_url('/admin.php?page=ps_contact_form_options') );
		echo 'Connection successful. Redirecting...';
		return;
	}

}

add_action('admin_post_nopriv_api_auth', 'ps_handle_ghl_auth');
add_action('admin_post_api_auth', 'ps_handle_ghl_auth');

/**
 * Refreshes an access token for a given user type and, if user_type='Location', a location id.
 * 
 * @param string $user_type Should either be 'Company' or 'Location'
 * @param string $location_id Only needs to be provided if type is Location.
 */
function ps_refresh_access_token( $user_type, $location_id = "" ) {
	// $str = file_get_contents( plugins_url( '/api-config.json', __FILE__ ) );
	// $api_config = json_decode($str);
	global $ghl_config;
	$api_config = $ghl_config->getConfig();

	$curl = curl_init();

	if ( !isset($api_config->refresh_token) ) {
		throw new Exception('Error: Unauthenticated API access.');
	}

	if ( $user_type === "Company" ) {
		$refresh_token = $api_config->refresh_token;
	} else if ( $user_type === "Location" ) {
		// Check if any locations exist or that the count matches
		if ( !isset($api_config->locations) || count($api_config->locations) !== $api_config->count ) {
			ps_ghl_get_locations();
		}
		// Match $location_id param with a location in api-config.json
		foreach($api_config->locations as $known_location) {
			if ( $location_id === $known_location->_id && isset( $known_location->refresh_token )) {
				$refresh_token = $known_location->refresh_token;
				break;
			}
			else if ( $location_id === $known_location->_id && !isset($known_location->refresh_token) ) {
				ps_ghl_get_location_tokens( $known_location->name );
				return;
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
		throw new Exception("cURL Error: " . $err);
	}

	$response = json_decode($response_str);

	if ( isset($response->statusCode) ) {
		throw new Error('Authentication error: '.$response->message);
		return;
	}

	if ( $user_type === 'Company' ) {

		$merged = (object) array_merge( (array) $api_config, (array) $response );
		$ghl_config->setConfig($merged);
		// $new_config = json_encode($merged, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
		// file_put_contents( ABSPATH . 'wp-content/plugins/ps-contact-form-block/api-config.json', $new_config );
	}

	else if ( $user_type === 'Location' ) {
		
		foreach($api_config->locations as &$known_location) {
			if ( $known_location->_id === $response->locationId ) {
				$known_location = (object) array_merge( (array) $known_location, (array) $response );
				break;
			}
		}

		$ghl_config->setConfig($api_config);
		// $new_config = json_encode($api_config, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
		// file_put_contents( ABSPATH . 'wp-content/plugins/ps-contact-form-block/api-config.json', $new_config );
	}
}


/**
 * Wrapper function for all GHL API calls. Checks if provided access_token is valid, and if not,
 * attempts to refresh the token.
 * 
 * @param array $curl_opts Should contain a valid cURL options array. Contains majority of the API query.
 * @param string $user_type Must be either 'Location' or 'Company'. Used for refresh tokens.
 * @param string | null $location_id Optional - must be provided if $user_type === 'Location'
 * @param string | null $version Optional - version to be included in the HTTP header.
 * @param int $tries Used internally by the function for recursion. Do not supply unless you know what you're doing.
 * @return object | void Returns the response object if API call is successful, otherwise outputs an error and returns void.
 */
function ps_ghl_api_call( $curl_opts, $user_type, $location_id = '', $version = '2021-07-28', $tries = 0 ) {
	// $str = file_get_contents( plugins_url( '/api-config.json', __FILE__ ) );
	// $api_config = json_decode($str);
	global $ghl_config;
	$api_config = $ghl_config->getConfig();

	if ($user_type != 'Company' && $user_type != 'Location') {
		throw new Exception('Invalid user type.');
		return;
	}

	if ($user_type === 'Location') {
		$location_token = '';
		foreach($api_config->locations as $known_location) {
			if ($known_location->_id === $location_id && isset($known_location->access_token)) {
				$location_token = $known_location->access_token;
				break;
			}
		}
	}

	// echo "locationId: $location_id\n";
	// echo "location->access_token: $location_token\n";

	$curl_opts[CURLOPT_HTTPHEADER] = [
		'Accept: application/json',
		'Authorization: Bearer ' . ($user_type === 'Company' ? $api_config->access_token : $location_token),
		"Version: $version"
	];

	//setting Content-Type header
	if ( $curl_opts[CURLOPT_URL] === "https://services.leadconnectorhq.com/oauth/locationToken" ) {
		array_push($curl_opts[CURLOPT_HTTPHEADER], 'Content-Type: application/x-www-form-urlencoded');
	} else if ( $curl_opts[CURLOPT_CUSTOMREQUEST] === 'POST' || $curl_opts[CURLOPT_CUSTOMREQUEST] === 'PUT' ) {
		array_push($curl_opts[CURLOPT_HTTPHEADER], 'Content-Type: application/json');
	}

	$curl = curl_init();

	curl_setopt_array($curl, $curl_opts);

	$response_json = curl_exec($curl);
	$err = curl_error($curl);

	curl_close($curl);

	if ( $err ) {
		throw new Exception("cURL Error: " . $err);
	}

	$response = json_decode($response_json);

	if (!isset($response->statusCode)) {
		return $response;
	}

	switch ($response->statusCode) {
		case 200:
			return $response;
		case 400:
			throw new Exception('400 Error: ' . $response->message);
		case 401:
			if (str_contains($response->message, "scope")) {
				throw new Exception('401 Error: ' . $response->message);
			}
			
			if ( $tries > 2 ) {
				throw new Exception('Error: Too many failed API attempts.');
				break;
			}
			ps_refresh_access_token( $user_type, $location_id );
			$tries++;
			return ps_ghl_api_call( $curl_opts, $user_type, $location_id, $version, $tries );
		case 422:
			throw new Exception('422 Error: ' . $response->message);
		default:
			return $response;
	}
}

/**
 * Gets all locations from the connected GHL agency, and stores the array in a prop in api-config.json.
 * 
 * @return object Returns the new api-config object to prevent needing to access the .json file after function is called.
 * 								Returns GHL's error response on error.
 */
function ps_ghl_get_locations() {
	global $ghl_config;
	$api_config = $ghl_config->getConfig();
	// $str = file_get_contents( plugins_url( '/api-config.json', __FILE__ ) );
	// $api_config = json_decode($str);
	$appId = "6679dffae548834c93b053ca";

	if ( !isset($api_config->access_token) ) {
		throw new Exception('Unauthorized API call. Please authorize LeadSmart first.');
		return;
	}

	$opts = [
		CURLOPT_URL => "https://services.leadconnectorhq.com/oauth/installedLocations?companyId=$api_config->companyId&appId=$appId",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "GET"
	];

	$response = ps_ghl_api_call( $opts, 'Company' );

	if ( isset($response->locations) ) {
		$merged = (object) array_merge((array) $api_config, (array) $response);
		$ghl_config->setConfig($merged);
		// $new_config = json_encode($merged, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
		// file_put_contents( ABSPATH . 'wp-content/plugins/ps-contact-form-block/api-config.json', $new_config );
		return $merged;
	}
}

/**
 * Retrieves location access tokens for a given input array of locations.
 * 
 * @param string | array $locations Location ID or array of location IDs.
 * @return object | void Returns a new object representing the current state of api-config.json.
 * 											 Returns void on error.
 */
function ps_ghl_get_location_tokens( $locations ) {
	global $ghl_config;
	$api_config = $ghl_config->getConfig();
	// $str = file_get_contents( plugins_url( '/api-config.json', __FILE__ ) );
	// $api_config = json_decode($str);

	if ( !$api_config->locations ) {
		$api_config = ps_ghl_get_locations();
	}

	if ( !is_array($locations) ) {
		$locations = [ $locations ];
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
	];

	$responses = array_map(function ($location_id) use ($api_config, $opts) {	
		$opts[CURLOPT_POSTFIELDS] = "companyId=$api_config->companyId&locationId=$location_id";
		return ps_ghl_api_call($opts, 'Company');
	}, $ids);

	if (!isset($responses)) {
		echo 'Error: API call(s) failed.';
		return;
	}

	foreach( $api_config->locations as &$location ) {
		foreach( $responses as $response ) {
			

			if ( $response->locationId === $location->_id ) {
				
				$new_location = (object) array_merge((array) $location,(array) $response);

				$location = $new_location;
			}
		}
	}
	
	$ghl_config->setConfig($api_config);
	// $new_config = json_encode($api_config, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
	// file_put_contents( ABSPATH . 'wp-content/plugins/ps-contact-form-block/api-config.json', $new_config );
	return $api_config;
}

/**
 * Create a contact in LeadSmart.
 * 
 * @param object $contact_info Object with keys 'name', 'email', 'phone', 'customFields'->'message'
 * @param string $location String with value "RVA", "VAB", or "FL"
 * @return string The created contact's id attribute.
 */
function ps_ghl_create_contact( $contact_info, $location ) {
	global $ghl_config;
	$api_config = $ghl_config->getConfig();
	// $str = file_get_contents( plugins_url( '/api-config.json', __FILE__ ) );
	// $api_config = json_decode($str);
	
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

	$contact_schema = [
		'name' => $contact_info['name'],
		'email' => $contact_info['email'],
		'locationId' => $target_location->_id,
		'phone' => $contact_info['phone'],
		'postalCode' => $contact_info['postalCode'],
		'tags' => ['wordpress', 'ps-contact-form'],
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
		CURLOPT_POSTFIELDS => json_encode($contact_schema)
	];

	$response = ps_ghl_api_call( $opts, 'Location', $target_location->_id );

	if ( !isset($response->contact) ) {
		throw new Exception("Error: contact could not be created.");
	}

	return $response->contact->id;
}

/**
 * Updates an existing contact in GHL.
 * 
 * @param object $contact A contact object from wpdb.
 * @param string $location_id The locationId where the contact exists.
 */
function ps_ghl_update_contact( $contact, $location_id ) {
	$contact_schema = [
		'address1' => $contact->address1,
		'city' => $contact->city,
		'state' => $contact->state,
		'postalCode' => $contact->zip
	];

	$opts = [
		CURLOPT_URL => "https://services.leadconnectorhq.com/contacts/$contact->contact_id",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "PUT",
		CURLOPT_POSTFIELDS => json_encode($contact_schema)
	];

	$response = ps_ghl_api_call( $opts, 'Location', $location_id );
	if (!$response->succeded) {
		throw new Exception('Error: Contact could not be updated.');
	}
	return true;
}

/**
 * Main handler function for form submission. Attempts to create a contact in GHL, then inserts
 * form data (w/ GHL contact id) into the database. Returns a simple response array.
 * 
 * @return array ['success' => bool, 'message' => string]
 */
function ps_handle_form_submit() {

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

		if ( !check_admin_referer('ps-form-submit') ) {
			wp_nonce_ays('ps-form-submit');
			exit;
		}

		global $wpdb;
		$table_name = $wpdb->prefix . 'contact_form_submissions';

		if ( !isset($_COOKIE['session_id']) ) {
			$session_id = wp_generate_uuid4();
			setcookie('session_id', $session_id, array(
				'samesite' => 'Lax',
				'httponly' => true,
				'secure' => true
			));
		} else {
			$session_id = $_COOKIE['session_id'];
			$init_result = $wpdb->get_row("SELECT * FROM $table_name WHERE session_id = $session_id");
		}
		
		$name = sanitize_text_field($_POST['name']);
		$email = sanitize_text_field($_POST['email']);
		$phone = sanitize_text_field($_POST['phone']);
		$message = sanitize_text_field($_POST['message']);
		$location = sanitize_text_field($_POST['location']);
		$zip = (int) $_POST['zip'];
		
		try {
			$api_result = ps_ghl_create_contact([
				'name' => $name,
				'email' => $email,
				'phone' => $phone,
				'message' => $message,
				'postalCode' => $zip
			], $location);
			$api_message = '';
		} catch (Exception $e) {
			$api_result = false;
			$api_message = "\n".$e->getMessage();
			mail('personal.jts@gmail.com', 'Error saving contact', "There was an error on line ".$e->getLine()." of ".$e->getFile().".\r\n
			The contact could not be created in GHL.\r\nContact name: $name\r\nContact email: $email\r\nContact session ID: $session_id\r\nError message: ".$e->getMessage()."\r\n");
		}

		maybe_create_table($table_name, "CREATE TABLE " . $table_name . " (
			name TEXT,
			email TEXT,
			phone TEXT,
			message TEXT,
			location TEXT,
			zip INT(15),
			session_id TEXT,
			contact_id TEXT,
			submission_time DATETIME,
			id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
			PRIMARY KEY (id)
		);");
		
		$data = array(
			'name' => $name,
			'email' => $email,
			'phone' => $phone,
			'message' => $message,
			'location' => $location,
			'zip' => $zip,
			'session_id' => $session_id,
			'submission_time' => current_time('mysql')
		);

		if (!$init_result) {
			$data['contact_id'] = $api_result ? $api_result : 'failed';
			$insert_result = $wpdb->insert($table_name, $data);
		} else if ($init_result) {
			$data['contact_id'] = $api_result ? $api_result : 'failed - duplicate contact';
			$data['id'] = $init_result->id;
			$insert_result = $wpdb->replace($table_name, $data);
		}
		
		if (!isset($insert_result) || $insert_result === false) {
			$response = array(
				'success' => false,
				'message' => 'Error saving the form data.'
			);
		} else {
			$response = array(
				'success' => true,
				'message' => 'Form data saved successfully.'.$api_message
			);
		}

		header('Content-Type: application/json');
		echo json_encode($response);
		exit;
	}
}

add_action( 'admin_post_nopriv_contact_form', 'ps_handle_form_submit' );
add_action( 'admin_post_contact_form', 'ps_handle_form_submit' );

/**
 * GHL's calendar response made more useful for the contact form.
 * 
 * @property array $openHours An array containing hours objects: {closeHour, openHour, closeMinute, openMinute} 
 * @property int $slotBuffer The buffer time between slots in minutes.
 * @property int $slotDuration The duration of a timeslot in minutes.
 * @property int $slotInterval The interval of timeslots in minutes.
 * @property int $allowBookingAfter A buffer between now and the first available appt. in minutes.
 * @property int $allowBookingFor How far in advance an appointment can be booked in days.
 * @property int $startTime The start of the calendar range in milliseconds.
 * @property int $endTime The end of the calendar range in milliseconds.
 * @property string $id The calendarId of the UsefulCalendar.
 * @property string $locationId The locationId of the UsefulCalendar.
 * @property string $locationName The name of the UsefulCalendar. 'RVA', 'VAB', or 'FL'
 */
class UsefulCalendar {
	public array $openHours = [];
	public array $blockedSlots;
	public int $slotBuffer, $slotDuration, $slotInterval, $startTime, $endTime;
	private int $allowBookingAfter, $allowBookingFor;
	public string $id, $locationId, $locationName;

	/**
	 * UsefulCalendar constructor
	 * 
	 * @param object $calendar The object returned from GHL Get Calendars endpoint. Must at least contain id and locationId.
	 */
	function __construct($calendar) {
		foreach($calendar->openHours as $openHours) {
			array_push($this->openHours, $openHours->hours[0]);
		}
		$this->slotBuffer = $calendar?->slotBuffer;
		$this->slotDuration = $calendar?->slotDuration;
		$this->slotInterval = $calendar?->slotInterval;

		if (!isset($calendar->id) || !isset($calendar->locationId)) {
			throw new Error("UsefulCalendar must be given a calendarId and a locationId.");
		}

		$this->id = $calendar->id;
		$this->locationId = $calendar->locationId;
		$this->locationName = PS_NAMETABLE[$calendar->locationId];

		//convert allowBooking... units, ...After is to minutes and ...For is to days
		switch ($calendar?->allowBookingAfterUnit) {
			case 'hours':
				$this->allowBookingAfter = $calendar->allowBookingAfter*60;
				break;
			case 'days':
				$this->allowBookingAfter = $calendar->allowBookingAfter*60*24;
				break;
			case 'weeks':
				$this->allowBookingAfter = $calendar->allowBookingAfter*60*24*7;
				break;
			case 'months':
				$this->allowBookingAfter = $calendar->allowBookingAfter*60*24*30;
				break;
			default:
				$this->allowBookingAfter = 60;
		}
		switch ($calendar?->allowBookingForUnit) {
			case 'days':
				$this->allowBookingFor = $calendar->allowBookingFor;
				break;
			case 'weeks':
				$this->allowBookingFor = $calendar->allowBookingFor*7;
				break;
			case 'months':
				$this->allowBookingFor = $calendar->allowBookingFor*30;
				break;
			default:
				$this->allowBookingFor = 60;
		}

		$afterInterval = new DateInterval('PT' . $this->allowBookingAfter . 'M');
		$forInterval = new DateInterval('P' . $this->allowBookingFor . 'D');
		$this->startTime = intval(date_create()->add($afterInterval)->format('Uv'));
    	$this->endTime = intval(date_create()->add($forInterval)->format('Uv'));

		// $this->blockedSlots = $calendar->blockedSlots;
	}
} 

/**
 * GETs the main booking calendar from a given location. Can retrieve other calendars if specified.
 * 
 * @param string $location The location id where the calendar is located.
 * @param string | null $calendar The calendar ID to be retrieved. Optional.
 */
function ps_ghl_get_calendar_info( $location_id, $calendar_id = '' ) {
	WP_Filesystem();
	global $wp_filesystem;
	$plugin_dir = $wp_filesystem->wp_plugins_dir() . 'ps-contact-form-block/';

	$manual_calendar_fix = json_decode($wp_filesystem->get_contents( $plugin_dir . 'manual-calendar-fix.json' ));

	$calendar_defaults = [
		'2wiA3de3qyq01bO1uRJh' => '0r3nJT0sPzeo3uYamNl4', //RVA PS Booking
		'zudnQMgArw2gVaoLhvg8' => 'kIedmMwzIF0issLHebDR', //VAB PS Booking
		'DOF73AiKjSuiKbrMVdjJ' => 'bX0EAYnr7jHGpHd6kfvk' //FL PS Booking
	];
	
	if ($calendar_id === '') {
		$calendar_id = $calendar_defaults[$location_id];
	}

	$opts = [
		CURLOPT_URL => "https://services.leadconnectorhq.com/calendars/?locationId=$location_id",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "GET"
	];

	try {
		$api_response = ps_ghl_api_call($opts, 'Location', $location_id, '2021-04-15');
		$calendar_list = $api_response->calendars;

		// converts API-created calendar list to an associative array with calendar ID as keys
		foreach ($calendar_list as $calendar) {
			$calendars[$calendar->id] = $calendar;
		}
		$calendar_fixed = (object) array_merge((array) $calendars[$calendar_id], (array) $manual_calendar_fix);
		$useful_calendar = new UsefulCalendar($calendar_fixed);

		$opts[CURLOPT_URL] = "https://services.leadconnectorhq.com/calendars/events?locationId=$location_id&calendarId=$calendar_id&startTime=$useful_calendar->startTime&endTime=$useful_calendar->endTime";
		$api_response2 = ps_ghl_api_call($opts, 'Location', $location_id, '2021-04-15');
		
		$event_times = array_map(function($event) {
			return (object) [
				'startTime' => intval(DateTime::createFromFormat(DateTimeInterface::ATOM, $event->startTime)->format('Uv')),
				'endTime' => intval(DateTime::createFromFormat(DateTimeInterface::ATOM, $event->endTime)->format('Uv'))
			];
		}, $api_response2->events);

		$useful_array = (array) $useful_calendar;
		$useful_array['blockedSlots'] = $event_times;
		$useful_calendar = (object) $useful_array;

		return $useful_calendar;
	} catch (Exception $e) {
		return (object) [
			'success' => false,
			'message' => "Calendar error: ".$e->getMessage()
		];
	}
}


/**
 * Handler function for calendar info request.
 * 
 * @param string location_name URL query parameter representing the location. Can be 'RVA', 'VAB', or 'FL'.
 * 
 * @return UsefulCalendar Responds to the GET request with a UsefulCalendar object
 */
function ps_handle_calendar_request() {
	
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
		
		if ( !isset($_COOKIE['session_id']) ) {
			$session_id = wp_generate_uuid4();
			setcookie('session_id', $session_id, array(
				'samesite' => 'Lax',
				'httponly' => true,
				'secure' => true
			));
		} else {
			$session_id = $_COOKIE['session_id'];
		}

		global $wpdb;
		$table_name = $wpdb->prefix . 'contact_form_submissions';

		maybe_create_table($table_name, "CREATE TABLE " . $table_name . " (
			name TEXT,
			email TEXT,
			phone TEXT,
			message TEXT,
			location TEXT,
			zip INT(15),
			session_id TEXT,
			contact_id TEXT,
			submission_time DATETIME,
			id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
			PRIMARY KEY (id)
		);");
		
		$db_result = $wpdb->get_results( "SELECT * FROM $table_name WHERE session_id = '" . $session_id . "'" );
		if (count($db_result) === 0) {
			if (!isset($_GET['location_name'])) {
				header('Content-Type: application/json');
				echo json_encode((object) [
					'success' => false,
					'message' => "Please supply location in parameter 'location_name'."
				]);
				exit;
			}
		
			$location_name = $_GET['location_name'];
		} else {
			$location_name = $db_result[0]->location;
		}

		$location_id = array_flip(PS_NAMETABLE)[$location_name];
		
		$calendar = ps_ghl_get_calendar_info( $location_id );
		$response = (object) array_merge( (array) $calendar, [ 'success' => true ] );

		header('Content-Type: application/json');
		echo json_encode($response);
		exit;
	}
}

add_action( 'admin_post_nopriv_calendar_info', 'ps_handle_calendar_request' );
add_action( 'admin_post_calendar_info', 'ps_handle_calendar_request' );

/**
 * Creates an appointment in GHL.
 * 
 * @param string $calendar_id The calendar's id.
 * @param string $location_id The location id of the calendar.
 * @param object $contact The contact object as returned by GHL's API.
 * @param int $start_time The start time of the appointment in milliseconds.
 * @param int $end_time The end time of the appointment in milliseconds.
 * @return array Associative array containing success status, error message on failure, contact ID on success.
 */
function ps_ghl_create_appointment( $calendar_id, $location_id, $contact, $start_time, $end_time ) {	
	$opts = [
		CURLOPT_URL => "https://services.leadconnectorhq.com/calendars/events/appointments",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "POST",
		CURLOPT_POSTFIELDS => json_encode([
			'calendarId' => $calendar_id,
			'locationId' => $location_id,
			'contactId' => $contact->contact_id,
			'startTime' => date(DateTimeInterface::ATOM, intval($start_time)),
			'endTime' => date(DateTimeInterface::ATOM, intval($end_time)),
			'title' => $contact->name,
			'appointmentStatus' => 'new'
		])
	];


	$response = ps_ghl_api_call($opts, 'Location', $location_id, '2021-04-15');
	
	return [
		'success' => true,
		'contact_id' => $response->contactId
	];
}

/**
 * Handles appointment submission POST request from front end.
 */
function ps_handle_appointment_submit() {
	global $wpdb;
	global $ghl_config;

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$table_name = $wpdb->prefix . "contact_form_submissions";

		try {	
			if ( !isset($_COOKIE['session_id']) ) {
				if ( !isset($_POST['email']) ) {
					throw new Exception("Existing session not detected. Contact email must be supplied.");
				} else {
					$result = $wpdb->get_results("SELECT * FROM $table_name WHERE email = '".$_POST['email']."'");
					$contact = $result[0];
				}
			} else {
				$results = $wpdb->get_results("SELECT * FROM $table_name WHERE session_id = '" . $_COOKIE['session_id'] . "'");
				$contact = $results[0];
			}

			$location_id = array_flip(PS_NAMETABLE)[$contact->location];

			$address = [
				'address1' => $_POST['address1'],
				'city' => $_POST['city'],
				'state' => $_POST['state'],
				'postalCode' => $_POST['zip']
			];
			
			$updated_contact = (object) array_merge((array) $contact, $address);
			ps_ghl_update_contact($updated_contact, $location_id);
			ps_ghl_create_appointment(
				$_POST['calendarId'],
				$location_id,
				$updated_contact,
				substr($_POST['startTime'], 0, -3),
				substr($_POST['endTime'], 0, -3));

			$response = (object) [
				"success" => true,
				"message" => "Appointment created successfully."
			];
		} catch (Exception $e) {
			$response = (object) [
				"success" => false,
				"message" => "Appointment error on line ".$e->getLine()." of ".$e->getFile().": ".$e->getMessage()
			];
		}

		header("Content-Type: application/json");
		echo json_encode($response, JSON_UNESCAPED_SLASHES);
		exit;
	}
}

add_action( 'admin_post_nopriv_appointment', 'ps_handle_appointment_submit' );
add_action( 'admin_post_appointment', 'ps_handle_appointment_submit' );

/**
 * Displays the form submissions admin page. Displays a WP_List_Table with select contact info
 * and bulk actions. Currently only supports 'delete'.
 * 
 * @todo add support for more bulk actions, potentially display a popover listing more contact details.
 */
function ps_display_contact_form_submissions_page() {

	/**
	 * An extension of WP_List_Table with required prop overrides.
	 * 
	 * @see https://developer.wordpress.org/reference/classes/wp_list_table/
	 */
	class Contact_Form_Table extends WP_List_Table {

		public $table_name;
		
		public function __construct() {
			parent::__construct(array(
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
					$wpdb->delete($this->table_name, ['id' => $did], '%d');
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

/**
 * Registers the form submissions page when the admin menu is loaded.
 */
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

/**
 * Displays the options page for the plugin. Currently only contains a button that is used for
 * GHL API authorization.
 * 
 * @todo add more settings!
 */
function ps_display_options_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	global $ghl_config;
	$api_config = $ghl_config->getConfig();
	$scope_list = ['calendars.readonly','calendars/events.readonly','calendars/events.write','calendars/groups.readonly','calendars/resources.readonly','contacts.write'];
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

/**
 * Registers the plugin options menu as a submenu of the contact form menu.
 */
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

/**
 * Handler for ZIP request. Contact form will request a list of ZIP codes correlated with service areas.
 * Response is a JSON string representing an object with service area props. Each prop is an array of ZIP codes.
 * 
 * @todo Might want to move ZIP validation to the backend. ZIP list is several kB long.
 */
function ps_handle_zip_request() {
	class ZipResponse {
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

	if (($handle = fopen(plugins_url( '/zip-codes.csv', __FILE__ ), 'r')) !== FALSE) {
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
		
			$response = new ZipResponse($rva, $vab, $fl);
			header('Content-Type: application/json');
			echo json_encode($response);
			exit;
		}

	}
}

add_action( 'admin_post_nopriv_zip_request', 'ps_handle_zip_request' );
add_action( 'admin_post_zip_request', 'ps_handle_zip_request' );