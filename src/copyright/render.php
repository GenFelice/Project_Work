<?php
$current_year = date("Y");
$prefix = isset($attributes['prefix']) ? wp_kses_post($attributes['prefix']) : '';
$suffix = isset($attributes['suffix']) ? wp_kses_post($attributes['suffix']) : '';

$parts = array_filter([
    $prefix,
    '© ' . $current_year,
    $suffix
], fn($v) => $v !== '');

$output = implode(' ', $parts);
?>

<p <?php echo get_block_wrapper_attributes(); ?>>
    <?php echo $output; ?>
</p>