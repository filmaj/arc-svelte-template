# arc-svelte-template

> Scaffold repo for how to set up arc and svelte together

## Overview

This setup uses Svelte, a frontend JS framework, to power your web UI. The
Svelte frontend assets are stored under `src/frontend`.

Before running the site locally or deploying, we use Parcel to bundle the Svelte
assets into the `dist/` folder.

Arc is configured such that static assets are served from the `dist/` folder
(see `app.arc`).

Finally, a single catch-all `HTTP GET /*` is defined as an arc function, and
that route doesn't do much more than serve a basic HTML page with the
Parcel-build JS file being referenced from this page.

## Quickstart

    cd arc-svelte-template
    npm install
    npm start
