# Dhruv Verma Portfolio

This repo powers a plain static personal site for GitHub Pages. There is no server,
no framework, and no build step required.

## Stack

- Static HTML
- Static CSS
- Static assets
- GitHub Pages compatible hosting

Everything the live site needs lives at the repo root plus `assets/`.

## Local Preview

Run a simple static file server from the repo root:

```bash
python3 -m http.server 4173
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## What To Edit

- `index.html`: content, structure, SEO metadata, contact links
- `assets/site.css`: visual design and responsive layout
- `assets/profile.jpg`: profile and social preview image
- `assets/favicon.svg`: favicon
- `portfolio.html`: redirect kept for backwards compatibility with older links

## Deployment

This repo appears to be set up as a standard GitHub Pages user site:

- repo name: `dhruv1702.github.io`
- default branch in this clone: `master`
- no in-repo Pages workflow
- no Jekyll config
- no `CNAME` file currently present

That means the most likely deployment model is GitHub Pages serving static files
directly from the root of the default branch.

To deploy:

1. Commit changes to the default branch used by GitHub Pages.
2. Push to GitHub.
3. Wait for GitHub Pages to refresh.

If you later add a custom domain, add or restore a `CNAME` file and update the
canonical / Open Graph URLs in `index.html`.

## Notes

- The site is intentionally lightweight for fast loads and easy maintenance.
- Writing is linked out to Substack and Medium instead of using third-party embeds.
- Public case studies are still not published, so the site uses clearly labeled
  placeholders rather than invented links.
