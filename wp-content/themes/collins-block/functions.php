<?php

function bma_custom_blocks_init()
{
    register_block_type(__DIR__ . "/build/main-nav");
    register_block_type(__DIR__ . "/build/instructors-list");
    register_block_type(__DIR__ . "/build/lessons-list");
}

function wp_enqueue_styles() {
    wp_enqueue_style('collins-block-style', get_stylesheet_uri());
}

add_action("init", "bma_custom_blocks_init");
add_action("wp_enqueue_scripts", "wp_enqueue_styles");