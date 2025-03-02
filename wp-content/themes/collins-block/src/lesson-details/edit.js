/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<div {...useBlockProps()}>
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
					<a class="wp-block-button__link wp-element-button" href="#">
						Enroll Now
					</a>
				</div>
			</div>
			<div class="video-container">
				<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
					<div class="wp-block-embed__wrapper">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/JRnDYB28bL8?si=2kyPU9jzmyU-NOn0"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>
				</figure>
			</div>
		</div>
	);
}
