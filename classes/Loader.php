<?php

namespace ApptDoctor;

class Loader
{
	function __construct($path)
	{
		$this->pluginPath = $path;
		add_action('wp_enqueue_scripts', [$this, 'enqueueScripts']);
		add_action('wp_enqueue_styles', [$this, 'enqueueStyles']);
		add_shortcode('appointments', [$this, 'initShortcode']);
	}

	public function initShortcode()
	{
		return '<div id="react-calendar-wrapper"></div>';
	}

	public function enqueueScripts()
	{
		wp_enqueue_script(
			'plugin-react',
			$this->pluginPath . '/build/index.js',
			['wp-element'],
			rand(), // Change this to null for production
			true
		);
	}

	public function enqueueStyles()
	{
		wp_enqueue_style(
			'custom-css-time',
			plugin_dir_url(__FILE__) . '/index.css'
		);
	}
}
