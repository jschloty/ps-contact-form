<?php 

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


	$is_admin = is_admin();

	$slider_locations = ($is_admin) ? get_terms( array( 'taxonomy' => 'slider-locations') ) : array('All' => 'all');
	$locations = array();

	if($is_admin) {
		foreach ($slider_locations as $location) {
			$locations[$location->name] = $location->name;
		}
	} else {
		$locations['All'] = 'all';
	}

	if (empty($locations)) {
		$location_desc = 
	      '<div class="alert">' .
		 esc_html__('You currently don\'t have any Slider Locations setup. Please create some and add assign slides to them before using this!','salient-nectar-slider'). 
		'<br/><br/>
		<a href="' . esc_url(admin_url('edit.php?post_type=nectar_slider')) . '">'. esc_html__('Link to Nectar Slider', 'salient-nectar-slider') . '</a>
		</div>';
	} else { $location_desc = ''; }

	return array(
	  "name" => esc_html__("Nectar Slider", "salient-nectar-slider"),
	  "base" => "nectar_slider",
	  "icon" => "icon-wpb-nectar-slider",
	  "category" => esc_html__('Media', 'js_composer'),
	  "description" => esc_html__('The jaw-dropping slider by ThemeNectar', 'js_composer'),
	  "params" => array(
	    array(
	      "type" => "dropdown",
	      "heading" => esc_html__("Select Slider", "salient-nectar-slider"),
	      "admin_label" => true,
	      "param_name" => "location",
	      "value" => $locations,
	      "description" => $location_desc,
	      'save_always' => true
	    ),
		array(
	      "type" => "textfield",
	      "heading" => esc_html__("Slider Height", "salient-nectar-slider"),
	      "param_name" => "slider_height",
	      "admin_label" => true,
	      "description" => esc_html__("Don't include \"px\" in your string. e.g. 650", "salient-nectar-slider")
	    ),
	    array(
	      "type" => 'checkbox',
	      "heading" => esc_html__("Flexible Slider Height", "salient-nectar-slider"),
	      "param_name" => "flexible_slider_height",
				'edit_field_class' => 'vc_col-xs-12 salient-fancy-checkbox',
	      "description" => esc_html__("Would you like the height of your slider to constantly scale in proportion to the screen size?", "salient-nectar-slider"),
	      "value" => Array(esc_html__("Yes, please", "salient-nectar-slider") => 'true')
	    ),
	    array(
	      "type" => "textfield",
	      "heading" => esc_html__("Minimum Slider Height", "salient-nectar-slider"),
	      "param_name" => "min_slider_height",
	      "dependency" => Array('element' => "flexible_slider_height", 'not_empty' => true),
	      "description" => esc_html__("When using the flexible height option the slider can become very short on mobile devices - use this to ensure it stays tall enough for your content Don't include \"px\" in your string. e.g. 250", "salient-nectar-slider")
	    ),
	    array(
	      "type" => 'checkbox',
	      "heading" => esc_html__("Display Full Width?", "salient-nectar-slider"),
	      "param_name" => "full_width",
				'edit_field_class' => 'vc_col-xs-12 salient-fancy-checkbox',
	      "description" => esc_html__("Would you like this slider to display the full width of the page?", "salient-nectar-slider"),
	      "value" => Array(esc_html__("Yes, please", "salient-nectar-slider") => 'true')
	    ),
	    array(
	      "type" => 'checkbox',
	      "heading" => esc_html__("Fullscreen Slider?", "salient-nectar-slider"),
	      "param_name" => "fullscreen",
				'edit_field_class' => 'vc_col-xs-12 salient-fancy-checkbox',
	      "description" => esc_html__("This will cause your slider to resize to always fill the users screen size", "salient-nectar-slider"),
	      "value" => Array(esc_html__("Yes, please", "salient-nectar-slider") => 'true'),
	      "dependency" => Array('element' => "full_width", 'not_empty' => true)
	    ),
	    array(
	      "type" => 'checkbox',
	      "heading" => esc_html__("Display Arrow Navigation?", "salient-nectar-slider"),
	      "param_name" => "arrow_navigation",
				'edit_field_class' => 'vc_col-xs-12 salient-fancy-checkbox',
	      "description" => esc_html__("Would you like this slider to display arrows on the right and left sides?", "salient-nectar-slider"),
	      "value" => Array(esc_html__("Yes, please", "salient-nectar-slider") => 'true'),
	      "dependency" => Array('element' => "overall_style", 'value' => 'classic')
	    ),
	     array(
	      "type" => "dropdown",
	      "heading" => esc_html__("Slider Next/Prev Button Styling", "salient-nectar-slider"),
	      "param_name" => "slider_button_styling",
	      "dependency" => Array('element' => "arrow_navigation", 'not_empty' => true),
	      "value" => array(
				'Standard With Slide Count On Hover' => 'btn_with_count',
				'Next/Prev Slide Preview On Hover' => 'btn_with_preview'
	      ),
	      "description" => 'Please select your slider button styling here',
	    ),
	     array(
	      "type" => "dropdown",
	      "heading" => esc_html__("Overall Style", "salient-nectar-slider"),
	      "param_name" => "overall_style",
	      "value" => array(
				'Classic' => 'classic',
				'Directional Based Content Movement' => 'directional'
	      ),
	      'save_always' => true,
	      "description" => 'Please select your overall style here - note that some styles will remove the possibility to control certain options.'
	    ),
	    array(
	      "type" => 'checkbox',
	      "heading" => esc_html__("Display Bullet Navigation?", "salient-nectar-slider"),
	      "param_name" => "bullet_navigation",
				'edit_field_class' => 'vc_col-xs-12 salient-fancy-checkbox',
	      "description" => esc_html__("Would you like this slider to display bullets on the bottom?", "salient-nectar-slider"),
	      "value" => Array(esc_html__("Yes, please", "salient-nectar-slider") => 'true'),
	      "dependency" => Array('element' => "overall_style", 'value' => 'classic')
	    ),
	     array(
	      "type" => "dropdown",
	      "heading" => esc_html__("Bullet Navigation Style", "salient-nectar-slider"),
	      "param_name" => "bullet_navigation_style",
	      "value" => array(
				'See Through & Solid On Active' => 'see_through',
				'Solid & Scale On Active' => 'scale',
				'See Through - Autorotate Visualized' => 'see_through_ar_visualized'
	      ),
	      "description" => 'Please select your overall bullet navigation style here.',
	      "dependency" => Array('element' => "bullet_navigation", 'not_empty' => true)
	    ),
			array(
			 "type" => "dropdown",
			 "heading" => esc_html__("Bullet Navigation Position", "salient-nectar-slider"),
			 "param_name" => "bullet_navigation_position",
			 "value" => array(
			 'Bottom' => 'bottom',
			 'Left' => 'left',
			 'Right' => 'right'
			 ),
			 "description" => 'Please select your bullet navigation position here.',
			 "dependency" => Array('element' => "bullet_navigation", 'not_empty' => true)
		 ),
	    array(
	      "type" => 'checkbox',
	      "heading" => esc_html__("Enable Swipe on Desktop?", "salient-nectar-slider"),
	      "param_name" => "desktop_swipe",
				'edit_field_class' => 'vc_col-xs-12 salient-fancy-checkbox',
	      "description" => esc_html__("Would you like this slider to have swipe interaction on desktop?", "salient-nectar-slider"),
	      "value" => Array(esc_html__("Yes, please", "salient-nectar-slider") => 'true'),
	      "dependency" => Array('element' => "overall_style", 'value' => 'classic')
	    ),
	    array(
	      "type" => 'checkbox',
	      "heading" => esc_html__("Parallax Slider?", "salient-nectar-slider"),
	      "param_name" => "parallax",
				'edit_field_class' => 'vc_col-xs-12 salient-fancy-checkbox',
	      "value" => Array(esc_html__("Yes, please", "salient-nectar-slider") => 'true')
	    ),
			array(
	      "type" => 'checkbox',
				"dependency" => Array('element' => "parallax", 'value' => 'true'),
	      "heading" => esc_html__("Disable Parallax On Mobile", "salient-nectar-slider"),
	      "param_name" => "disable_parallax_mobile",
				'edit_field_class' => 'vc_col-xs-12 salient-fancy-checkbox',
	      "value" => Array(esc_html__("Yes, please", "salient-nectar-slider") => 'true')
	    ),
		 array(
				"type" => "dropdown",
				"heading" => esc_html__("Slide BG Animation", "salient-nectar-slider"),
				"param_name" => "bg_animation",
				"value" => array(
				 'None' => 'none',
				 'Ken Burns' => 'ken_burns'
				),
				'save_always' => true
			),
	    array(
	      "type" => 'checkbox',
	      "heading" => esc_html__("Loop Slider?", "salient-nectar-slider"),
	      "param_name" => "loop",
				'edit_field_class' => 'vc_col-xs-12 salient-fancy-checkbox',
	      "description" => esc_html__("Would you like your slider to loop infinitely? <br/> Note - keep this option off if you are using slides with video backgrounds and would like them to play on mobile devices", "salient-nectar-slider"),
	      "value" => Array(esc_html__("Yes, please", "salient-nectar-slider") => 'true'),
	      "dependency" => Array('element' => "overall_style", 'value' => 'classic')
	    ),
	    array(
	      "type" => "dropdown",
	      "heading" => esc_html__("Slider Transition", "salient-nectar-slider"),
	      "param_name" => "slider_transition",
	      "value" => array(
				'Slide' => 'slide',
				'Fade' => 'fade'
	      ),
	      "description" => 'Please select your slider transition here',
	      "dependency" => Array('element' => "overall_style", 'value' => 'classic'),
	      'save_always' => true
	    ),
			array(
	      "type" => "dropdown",
	      "heading" => esc_html__("Caption Transition", "salient-nectar-slider"),
	      "param_name" => "caption_transition",
	      "value" => array(
				'Fade In From Bottom' => 'fade_in_from_bottom',
				'Title Reveal' => 'reveal_title',
				'None' => 'none'
	      ),
	      "description" => 'Please select your slider caption transition here',
	      "dependency" => Array('element' => "overall_style", 'value' => 'classic'),
	      'save_always' => true
	    ),
			array(
	      "type" => "dropdown",
	      "class" => "",
	      'save_always' => true,
	      "heading" => esc_html__("Image Loading", "salient-core"),
	      "param_name" => "image_loading",
	      "value" => array(
	        "Default" => "default",
					"Lazy Load" => "lazy-load",
	      ),
				"description" => esc_html__("Determine whether to load all images on page load or to use a lazy load method for higher performance.", "salient-core"),
	      'std' => 'default',
	    ),
	    
	    array(
	      "type" => "textfield",
	      "heading" => esc_html__("Autorotate?", "salient-nectar-slider"),
	      "param_name" => "autorotate",
	      "description" => esc_html__("If you would like this slider to autorotate, enter the rotation speed in milliseconds here. i.e 5000", "salient-nectar-slider")
	    ),
			array(
	      "type" => "dropdown",
	      "class" => "",
	      'save_always' => true,
	      "heading" => esc_html__("Slide Heading Tag", "salient-core"),
	      "param_name" => "heading_tag",
	      "value" => array(
	        "Default" => "default",
					"H1" => "h1",
					"H2" => "h2",
					"H3" => "h3",
					"H4" => "h4",
					"H5" => "h5",
					"Div" => "div"
	      ),
	      'std' => 'default',
	    ),
	    array(
			"type" => "dropdown",
			"class" => "",
			"heading" => "Button Sizing",
			"param_name" => "button_sizing",
			"value" => array(
				"Regular" => "regular",
				"Large" => "large",
				"Jumbo" => "jumbo"
			),
			'save_always' => true,
			"description" => ""
		),
		array(
	  	  "type" => "textfield",
	      "heading" => esc_html__("Tablet Header Font Size", "salient-nectar-slider"),
	      "param_name" => "tablet_header_font_size",
	      "admin_label" => false,
	      "description" => esc_html__("Don't include \"px\" in your string. e.g. 32", "salient-nectar-slider"),
	  	  "group" => "Mobile Text Sizing Override"
	  	),
	  	array(
	  	  "type" => "textfield",
	      "heading" => esc_html__("Tablet Caption Font Size", "salient-nectar-slider"),
	      "param_name" => "tablet_caption_font_size",
	      "admin_label" => false,
	      "description" => esc_html__("Don't include \"px\" in your string. e.g. 20", "salient-nectar-slider"),
	  	  "group" => "Mobile Text Sizing Override"
	  	),
	  	array(
	  	  "type" => "textfield",
	      "heading" => esc_html__("Phone Header Font Size", "salient-nectar-slider"),
	      "param_name" => "phone_header_font_size",
	      "admin_label" => false,
	      "description" => esc_html__("Don't include \"px\" in your string. e.g. 24", "salient-nectar-slider"),
	  	  "group" => "Mobile Text Sizing Override"
	  	),
	  	array(
	  	  "type" => "textfield",
	      "heading" => esc_html__("Phone Caption Font Size", "salient-nectar-slider"),
	      "param_name" => "phone_caption_font_size",
	      "admin_label" => false,
	      "description" => esc_html__("Don't include \"px\" in your string. e.g. 14", "salient-nectar-slider"),
	  	  "group" => "Mobile Text Sizing Override"
	  	)
	  )
	);
