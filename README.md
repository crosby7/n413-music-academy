# Collins Music Academy Assignment - Round 2

## Summary

For this redo of the Collins project, I created a WordPress Block Theme built around "client" specifications. The site has 4 template pages:

- Homepage
  - Brief intro to Academy
  - Featured instructors
  - Call-to-action
- Lessons
  - List of available instrument lessons
  - Descriptions, skill levels, and pricing
  - Embedded videos or audio clips
- Instructor Profiles
  - Lists music instructors
  - Bio, background, instruments taught, philosophy
  - Contact option
- 404 Page
  - Music-related message when 404 happens
  - Button to return to homepage

## Struggles

Styling is still a confusing part for me. The best way to style, it seems, is in `theme.json`, but I don't know much of what I can do there and I don't know how to style `"blocks"` in the file (e.g. `"core/block"` or `"core/embed"`). I was able to cobble together some styles between custom elements SCSS, `style.css` (which doesn't reflect in the editor?) and what I could put together in `theme.json`, but I would love a revisit of `theme.json` for a lecture or even just a Canvas page

## Weekly Recap

We can create custom blocks for theme development.

Use `npx @wordpress/create-block` in the root of the current theme directory to initialize a custom block

This command will create a few files:

- `block.json`
  - Metadata, name, attributes, rendering method
- `render.php`
  - Contains `render_callback()`, fetches and outputs content
  - We edited this file to hold our custom block's HTML
- `edit.js`
  - Defines how the content appears in the WP editor
  - We edited this file as well with our custom HTML
- `index.js`
  - Registers the block, handles settings
- `editor.scss`
  - Styles specific to the block in the editor
- `styles.scss`
  - Frontend styles for live site

Also, we had to update `functions.php` to initialize the block type.

Once the block is registered and the `npm start` command is run, the block should be available for use in VSCode as well as the WP Editor.

#### Duplicating Blocks

We can duplicate blocks by copy/pasting an existing custom block (or reissuing the command to create one).

If copy/pastings:

- Rename the file folder
- Rename the `block.json`
  - `"name"`
  - `"title"`
  - `"textdomain"`
- Rename the style.scss
- Update functions.php to register an additional block type

#### Embeds in Custom Blocks

When trying to embed in a custom block, make sure to add an explicit `<iframe>` to hold the video player.

```HTML
<div class="video-container">
	<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio">
		<div class="wp-block-embed__wrapper">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/JRnDYB28bL8?si=2kyPU9jzmyU-NOn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
		</div>
	</figure>
</div>
```
