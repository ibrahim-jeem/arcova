# ARCOVA Website

A responsive company website built with plain HTML, CSS and JavaScript. There is no framework, build process or package manager.

## Project files

- `index.html` — homepage and client carousel.
- `about.html` — company introduction and approach.
- `services.html` — service descriptions.
- `projects.html` — project gallery and category filters.
- `team.html` — team profiles.
- `contact.html` — contact details and enquiry form.
- `style.css` — all colours, fonts, spacing, layout and responsive styles.
- `script.js` — mobile menu, project filters, automatic client carousel and email enquiry.
- `img/` — logo and project images.

## How to make common changes

### Change the logo
Replace `img/Logo_Arcova.png` with your new logo, keeping the same filename. The header and footer on every page use this file.

### Change text
Open the relevant HTML page and edit the text inside its section. Each page is separate, so a change to one page does not automatically change the others.

### Change fonts
Open `style.css` and find the `:root` variables near the top. The current font choices are:
- Headings: Lora
- Body text and interface: Source Sans 3

The Google Fonts import is in the `<head>` of each HTML page.

### Change colours
Edit the colour variables in `:root` near the top of `style.css`, such as `--navy`, `--gold`, `--paper` and `--ink`.

### Change spacing and layout
Most layout and responsive rules are in `style.css`. The media queries near the bottom control tablet and mobile layouts.

### Change client names or carousel speed
Edit the client cards in the client section of `index.html`. In `script.js`, change the `2800` value to adjust the automatic slide interval in milliseconds.

### Change project cards or categories
Edit the project cards and their `data-category` values in `projects.html`. The category buttons use the same category names.

### Change contact information
Update the address, email and phone number in the footer of each HTML page and in `contact.html`. The enquiry email destination is also set in `script.js`.

## Important notes

- The enquiry form opens the visitor's email application. It does not store submissions online.
- Before publishing, verify project details, client names, team credentials, contact information and image permissions.
- Keep image filenames in the `img/` folder unchanged unless you also update their paths in the HTML.

## Technology

HTML5 · CSS3 · Vanilla JavaScript
