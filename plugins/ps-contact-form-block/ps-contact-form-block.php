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

function ps_handle_form_submit() {
	// global $attributes;
	// include './build/render.php';

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
		$name = sanitize_text_field($_POST['name']);
		$email = sanitize_text_field($_POST['email']);
		$phone = sanitize_text_field($_POST['phone']);
		$message = sanitize_text_field($_POST['message']);
		$location = sanitize_text_field($_POST['location']);

		global $wpdb;
		$table_name = $wpdb->prefix . 'contact_form_submissions';
		$data = array(
			'name' => $name,
			'email' => $email,
			'phone' => $phone,
			'message' => $message,
			'location' => $location,
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

		header('Content-Type: application/json');
		echo json_encode($response);
		exit;
	}
}

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


add_action( 'admin_post_nopriv_contact_form', 'ps_handle_form_submit' );
add_action( 'admin_post_contact_form', 'ps_handle_form_submit' );

add_action( 'admin_post_nopriv_zip_request', 'ps_handle_zip_request' );
add_action( 'admin_post_zip_request', 'ps_handle_zip_request' );

add_action( 'init', 'create_block_ps_contact_form_block_init' );
add_action( 'admin_menu', 'ps_register_contact_form_submissions_page' );