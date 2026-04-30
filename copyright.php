<?php

/**
 * Plugin Name:       Copyright
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            RejoiceG
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       copyright
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_copyright_block_init()
{
	register_block_type(__DIR__ . '/build/copyright');
}
add_action('init', 'create_block_copyright_block_init');

function my_block_editor_assets()
{
	wp_enqueue_script(
		'my-block-remove-formats',
		plugins_url('build/remove-formats.js', __FILE__),
		['wp-rich-text', 'wp-dom-ready', 'wp-edit-post'],
		filemtime(plugin_dir_path(__FILE__) . 'build/remove-formats.js'),
		true
	);
}
add_action('enqueue_block_editor_assets', 'my_block_editor_assets');
