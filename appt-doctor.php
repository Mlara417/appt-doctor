<?php
/**
 * Plugin Name: ApptDoctor
 * Description: Schedule appointments.
 * Version: 0.0.2
 * Text Domain: scheduler
 * Author: Moses Lara
 */
require 'vendor/autoload.php';

use ApptDoctor\Plugin;

$plugin = new Plugin(plugin_dir_url(__FILE__));
$plugin->run();