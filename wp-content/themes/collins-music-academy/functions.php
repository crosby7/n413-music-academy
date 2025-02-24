<?php

function bma_custom_blocks_init()
{
    register_block_type(__DIR__ . "/build/main-nav");
}

add_action("init", "bma_custom_blocks_init");


function my_theme_assets()
{
    wp_enqueue_style("style", get_stylesheet_uri());
}

add_action("wp_enqueue_scripts", "my_theme_assets");