# Collins Music Academy Assignment

## Summary

For this project, I created a WordPress Block Theme built around "client" specifications. The site has 4 template pages:

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

I couldn't manage to get block theme working for a considerable amount of time. By the time I had exhausted online resources, it was too late to switch to classic theme, so the site might be significantly under-developed in places.

I also struggled with custom css:

While developing, I was writing css to `styles.css`. When I would view my templates from the admin dashboard (Appearance/Themes/Collins Music Academy - Live Preview), my styles were not applied. I could apply themes using `theme.json`, but I couldn't understand or find out how to style custom classes in `theme.json`. As a result, I ended up frantically using the WordPress editor's 'Additional CSS' tool and writing my custom class CSS there. Again, probably not my best option.

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
