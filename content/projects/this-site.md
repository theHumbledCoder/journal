---
title: "This site"
date: "2026-04-01"
year: "2026"
type: web
tags: [live]
description: "A personal site built with React and Vite, deployed via GitHub Actions."
---

The site you're reading now. Built as both a product and a learning exercise.

## Stack

- **React + Vite** — fast development, standard tooling
- **React Router** — client-side navigation
- **Markdown files** — content lives in `content/`, not a database
- **GitHub Actions** — push to `main`, site deploys automatically
- **GitHub Pages** — free hosting for static sites

## What I learned building it

CSS custom properties are underrated. The entire light/dark theme system here is eight variable declarations. Toggle one attribute on `<html>` and everything follows.

Build tools are not magic. Vite is just a dev server and a bundler. Once I understood that, it stopped being intimidating.

## What's next

- Better typography on the post pages
- An RSS feed
- Possibly a photo lightbox for the gallery
