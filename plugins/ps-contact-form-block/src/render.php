<?php 
/**
 * Script responsible for displaying the block on the front-end. Displays a
 * dummy block to be replaced in view.js.
 */

$obj = (object) array_merge((array) $attributes, ['nonce' => wp_create_nonce( 'ps-form-submit' )])
?>

<div class="ps-form-unloaded">
    <pre style="display:none"><?php echo(wp_json_encode($obj)) ?></pre>
</div>