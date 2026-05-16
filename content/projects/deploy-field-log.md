---
title: "Learning to deploy — a field log"
date: "2026-02-20"
year: "2026"
type: writing
tags: []
description: "A running log of things learned while figuring out web deployment."
---

A running log. Added to as I go.

---

**Feb 20** — Set up first GitHub Actions workflow. It failed because I forgot `permissions: contents: write`. The error message was cryptic. The fix was one line.

---

**Mar 04** — Learned the difference between `npm install` and `npm ci`. The latter is for CI: it's faster, reproducible, and fails if `package-lock.json` doesn't match `package.json`. Use `npm ci` in workflows.

---

**Mar 18** — GitHub Pages serves from either the root of `main`, a `/docs` folder, or a separate `gh-pages` branch. The branch approach is cleanest for a built site — the source and output stay separate.

---

**Apr 10** — Discovered `base: './'` in Vite config. Without it, assets load fine in development but 404 on GitHub Pages because the site isn't at the root of the domain. Two hours debugging before finding this.

---

**Apr 22** — First fully automatic deploy: pushed a markdown file, GitHub Actions built and deployed the site within 90 seconds. The pipeline worked exactly as intended.

This is the thing I was trying to learn.
