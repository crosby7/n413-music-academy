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
		<section {...useBlockProps()}>
			<div>
				<figure>
					<img src="https://picsum.photos/300?grayscale" alt="Violin" />
				</figure>
				<h4>Violin</h4>
				<p>Lessons: Introduction to Strings, Chopin Music, Vibrato</p>
				<div class="wp-block-button">
					<a class="wp-block-button__link wp-element-button" href="#">
						Learn More
					</a>
				</div>
			</div>

			<div>
				<figure>
					<img src="https://picsum.photos/300?grayscale" alt="Guitar" />
				</figure>
				<h4>Guitar</h4>
				<p>Lessons: Introduction to Strings, Rock Ballads, Bar Chords</p>
				<div class="wp-block-button">
					<a class="wp-block-button__link wp-element-button" href="#">
						Learn More
					</a>
				</div>
			</div>

			<div>
				<figure>
					<img src="https://picsum.photos/300?grayscale" alt="Piano" />
				</figure>
				<h4>Piano</h4>
				<p>Lessons: Chopsticks, Accompaniments, Tuning</p>
				<div class="wp-block-button">
					<a class="wp-block-button__link wp-element-button" href="#">
						Learn More
					</a>
				</div>
			</div>

			<div>
				<figure>
					<img src="https://picsum.photos/300?grayscale" alt="Drums" />
				</figure>
				<h4>Drums</h4>
				<p>Lessons: Introduction to Drums, Rock Ballads, Tempo Switching</p>
				<div class="wp-block-button">
					<a class="wp-block-button__link wp-element-button" href="#">
						Learn More
					</a>
				</div>
			</div>
		</section>
	);
}
