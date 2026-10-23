# Nicholas Carr's personal website

This site is built with Astro and published as static files to GitHub Pages. Run `npm ci`, then `npm run dev` to work locally. Run `npm run build` before publishing.

## Content

### Blog posts and projects

Add Markdown or MDX files under `src/content/blog/`. Each entry uses this frontmatter:

```yaml
---
title: Example post
pubDate: 2025-01-01
summary: A short description for cards and search previews.
tags: [project]
cardImage: ../assets/example.jpg
cardImageAlt: A concise description of the image.
blogHighlight: false
projectHighlight: false
startDate: 2024-03-01
endDate: 2024-08-01
---
```

`pubDate` is when the write-up was published. `startDate` and `endDate` describe the project itself and are optional; omit `endDate` for ongoing work. Project write-ups must include the `project` tag. Project lists sort by project end date, then start date, falling back to publication date only when project dates are absent. Set `projectHighlight` to show a project on the home and projects pages, or `blogHighlight` to show a post in the blog feature strip. Highlight selections do not remove entries from their full archive.

Place public images in `public/images/` and reference them with root-relative paths such as `/images/example.jpg`.

### Work experience

Add one entry per role to `src/content/experience.yml`:

```yaml
- id: organization-year
  organization: Organization name
  role: Role title
  startDate: 2024-01-01
  endDate: 2025-01-01
  highlights:
    - A concise accomplishment.
```

Omit `endDate` for a current role. Roles appear newest-first. Keep education and the short profile fields in `src/data/site.ts`.

## Deployment

The GitHub Actions workflow builds the site and deploys `dist/` to GitHub Pages when changes reach `main`. Set the repository's Pages source to **GitHub Actions**. Keep `public/CNAME` in place for the custom domain. The existing resume is served from `/resume.pdf`.
