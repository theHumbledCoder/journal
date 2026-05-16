---
title: "On building a website to think out loud"
date: "2026-05-12"
tags: [essay]
excerpt: "For years I kept notes in scattered places — paper, Notion, the back of receipts. This site is the experiment in pulling them into one quiet room."
readTime: "8 min"
---

For years I kept notes in scattered places — paper, Notion, the back of receipts. This site is the experiment in pulling them into one quiet room. Not for an audience, exactly. More like a workshop where the door happens to be open.

## Why not just use a blog platform?

I tried. Medium, Substack, even a hand-rolled WordPress install circa 2019. Each time, the friction was the same: someone else's design asserting itself, a CMS that wanted me to fill in fields before I'd had a thought.

What I wanted was simpler. A directory of files. Push. Done.

## The stack

This site is built with React and Vite. Posts are Markdown files in a `content/posts/` folder. Pushing to `main` triggers a GitHub Action that builds and deploys to GitHub Pages automatically.

No database. No CMS. No server to maintain.

```bash
# The whole deploy flow is just:
git add content/posts/new-post.md
git commit -m "add: new post"
git push
```

GitHub Actions handles the rest.

## What I'm hoping to learn

Web design and layout. The difference between a typographically good page and a mediocre one. How deployment actually works for a site like this — not the abstracted version, but the real thing.

This site is the textbook.
