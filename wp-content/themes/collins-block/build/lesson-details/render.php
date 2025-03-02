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
	<div class="video-container">
		<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
			<div class="wp-block-embed__wrapper">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/JRnDYB28bL8?si=2kyPU9jzmyU-NOn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>
		</figure>
	</div>
</div>