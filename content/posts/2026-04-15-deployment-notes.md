---
title: "What I keep relearning about deployment"
date: "2026-04-15"
tags: [note]
excerpt: "Every time I deploy something new, I re-encounter the same gap between 'it works on my machine' and 'it works.'"
readTime: "5 min"
---

Every time I deploy something new, I re-encounter the same gap between "it works on my machine" and "it works."

## The gap

Local development is a simulation. Your machine has Node installed. It has the right version. Environment variables are set. The file paths all make sense relative to where you're sitting.

Production is a different country. It has its own rules.

## What I've learned to check

**Build output first.** Run `npm run build` locally before pushing. Errors that only appear at build time are embarrassing to discover via a failed CI run.

**Relative vs absolute paths.** A site deployed to `username.github.io/repo-name/` is not the same as one deployed to `username.github.io/`. Asset paths that start with `/` will break. This is why this site uses `base: './'` in `vite.config.js`.

**The cache.** Browser caches are aggressive. After deploying, hard-refresh (`Ctrl+Shift+R`). If something looks wrong, the cache is usually the first suspect.

## The actual lesson

None of this is complicated. It just requires paying attention. Deployment is mostly reading error messages carefully and working backwards.

The skill isn't knowledge of deployment. The skill is patience with the feedback loop.
