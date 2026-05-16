---
title: "Image pipeline experiments"
date: "2026-03-15"
year: "2026"
type: tools
tags: []
description: "Experiments in processing and optimizing images for the web."
---

A loose collection of experiments in getting images from camera to web efficiently.

## The problem

Raw photos from a camera are large. A single JPEG from a modern phone is 3–6 MB. Serving those directly would make the gallery unusably slow on mobile.

The web wants smaller files: WebP or AVIF format, multiple sizes for responsive images, lazy loading.

## What I'm exploring

**ffmpeg and ImageMagick** for batch conversion. Both are available in GitHub Actions runners, which means the pipeline can run automatically on push.

**The `<img srcset>` attribute** — how to give the browser size hints so it picks the right image for the screen.

**Perceptual quality vs file size.** Quality 85 in WebP looks indistinguishable from quality 100 at half the file size. The eye doesn't notice what the byte counter does.

## Status

Ongoing. Currently the gallery just serves JPEGs from `public/images/gallery/`. The optimization layer is next.
