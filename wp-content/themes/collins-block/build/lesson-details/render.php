<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<div>
		<h4>Introduction to Strings</h4>
		<p>
			Learn the basics of playing strings instruments with this short course
			developed for beginners.
		</p>
		<h5>
			Difficulty: <span>Beginner</span>
		</h5>
		<p>
			Price: <span>$100</span>
		</p>
		<div class="wp-block-button">
			<a class="wp-block-button__link wp-element-button" href="#">Enroll Now</a>
		</div>
	</div>
	<div>
		<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
			<div class="wp-block-embed__wrapper">
				https://www.youtube.com/watch?v=JRnDYB28bL8
			</div>
		</figure>
	</div>
</div>