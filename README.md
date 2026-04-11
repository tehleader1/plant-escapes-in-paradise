# PlantEscapes In Paradise

PlantEscapes In Paradise is a Charlotte, NC plant-ordering site built as a simple static site for Render hosting.

## What it includes

- `index.html`: main plant carousel and in-page custom order flow
- `admin.html`: lightweight back-admin view for saved custom orders
- `app.js`: carousel behavior and local order storage
- `styles.css`: site styling
- `render.yaml`: Render static-site configuration

## Render setup

This project is prepared for a Render Static Site.

Recommended custom domain setup:

- primary: `www.theplantmaninc.com`
- redirect: `theplantmaninc.com` -> `www.theplantmaninc.com`

## Current order behavior

Orders are currently stored in browser `localStorage` for prototype/demo use.

That means:

- the main order flow works right now
- the admin page works right now
- but orders are not yet shared across devices/users

## Next backend step

Add a shared backend or database so:

- all custom orders persist centrally
- the admin page shows real orders for everyone
- follow-up payment workflows can be tracked
