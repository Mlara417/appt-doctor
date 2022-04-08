<?php
/**
 * Plugin Name: ApptDoctor
 * Description: Schedule appointments.
 * Version: 0.1
 * Text Domain: scheduler
 * Author: Moses Lara
 */

function reactshort() { 
    return '<div id="react-calendar-wrapper"></div>';
} 
// register shortcode
add_shortcode('appointments', 'reactshort'); 

add_action('wp_enqueue_scripts', 'enq_react');
function enq_react()
{
	wp_enqueue_script(
		'plugin-react',
		plugin_dir_url( __FILE__ ) . '/build/index.js',
		['wp-element'],
		rand(), // Change this to null for production
		true
	);
	wp_enqueue_style(
		'custom-css-time',
		plugin_dir_url( __FILE__ ) . '/index.css'
	);
}