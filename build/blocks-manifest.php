<?php
// This file is generated. Do not modify it manually.
return array(
	'copyright' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/copyright',
		'version' => '0.1.0',
		'title' => 'Copyright',
		'category' => 'widgets',
		'description' => 'Display your site\\’s copyright date.',
		'example' => array(
			
		),
		'supports' => array(
			'color' => array(
				'background' => false,
				'text' => true
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true,
				'textAlign' => true
			)
		),
		'textdomain' => 'copyright',
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php'
	)
);
