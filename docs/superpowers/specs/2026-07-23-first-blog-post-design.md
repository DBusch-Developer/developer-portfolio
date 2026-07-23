# First Blog Post — "What I Built in One Cohort" — Design

**Date:** 2026-07-23
**Author:** Diana Busch (with Claude)
**Status:** Approved, ready for implementation plan

## Goal

Ship Diana's first blog post to the portfolio, replacing the "Coming Soon"
placeholder in the Blog section. The post is a reflection on the Next Chapter
AI-Augmented Builder Cohort. The blog must be built to grow — more posts will
follow — and the post needs a title card plus in-post images.

## Non-goals (YAGNI)

- No CMS, markdown-file loader, or backend. Content lives in a JS data file.
- No router library. Reuse the existing section-based navigation pattern.
- No comments, tags, search, or pagination (one post today; revisit if the
  list grows large).

## Architecture

Single-page React app with section-based navigation (About / Resume / Projects
/ Blog / Contact), Framer Motion, Tailwind v4. No react-router. Content lives in
`src/data/*.jsx` arrays; images live in `public/assets/...`. All new work follows
these existing conventions.

### Data model — `src/data/BlogPosts.jsx`

Exports an array of post objects. Post content is stored as **structured blocks**
so images and pull-quotes sit exactly where they belong:

```js
{
  slug: "next-chapter",
  title: "What I Built in One Cohort (and What It Built in Me)",
  date: "July 2026",
  teaser: "I finished the Next Chapter cohort and shipped more than in any
           stretch of my career. That's worth writing down.",
  coverImage: "/assets/blog/next-chapter-cover.jpg",
  content: [
    { type: "paragraph", text: "..." },
    { type: "heading", text: "The pace" },
    { type: "montage" },                                  // in-code project grid
    { type: "image", src: "...", caption: "..." },
    { type: "callout", text: "AI is an incredible accelerator and a
                              terrible authority." },
    // ...
  ]
}
```

Block types: `paragraph`, `heading`, `image` (`src`, `caption`), `callout`
(styled pull-quote), `montage` (the in-code project grid), and `lead` (the
emphasized italic tagline line). Paragraph text may include the project names;
inline links (e.g. turnleaf.us) handled via a simple link field or a small set
of allowed inline markers — decided in the plan.

### Components

- **`Blog.jsx`** (rewrite) — holds `selectedPost` state.
  - No selection → renders the **list** of `BlogCard`s (grid, matches Projects).
  - Selection → renders `BlogPost` with a "← Back to Blog" control.
  - Reads/writes `?section=blog&post=<slug>` for deep-linking, consistent with
    the existing `?section=` handling in `App.jsx`.
- **`BlogCard.jsx`** (new) — cover thumbnail + title + date + teaser. Styled like
  `ProjectCard` (glass, hover lift, graceful image fallback with skeleton).
- **`BlogPost.jsx`** (new) — renders the hero (coverImage + title + date) then
  walks `content` blocks, rendering each type. Framer Motion enter animations
  consistent with existing pages.
- **`BlogMontage.jsx`** (new) — CSS-grid collage tiling existing project
  screenshots from `public/assets/projects/`. Used for the `montage` block.

### Deep-linking

`App.jsx` already parses `?section=`. Blog extends this: when `section=blog` and
a `post` param is present and matches a slug, open that post directly. Back
button clears the `post` param.

## Images

All real screenshots (most authentic — the post is about what was shipped).

| Placement | Image | Asset path | Status |
|---|---|---|---|
| Title card / hero | Next Chapter website hero (logo + tagline), ~16:9 | `/assets/blog/next-chapter-cover.jpg` | 📸 Diana captures (site: nextchapterproject.org — verify) |
| "The pace" section | Project montage grid | *(none — in-code)* | Built in `BlogMontage.jsx` from existing project shots |
| "Turnleaf" section | Turnleaf.us hero / plain-answer result screen | `/assets/blog/turnleaf.jpg` | 📸 Diana captures (must-have) |
| "The skill I didn't sign up for" | Capstone video still or editing-timeline frame | `/assets/blog/capstone-video.jpg` | 📸 Diana captures |
| "The people" section | Cohort classroom (Google Meet grid) | `/assets/blog/cohort-classroom.png` | ✅ In repo |

Cover framing: capture landscape so it crops cleanly as both small card thumbnail
and wide hero. Graceful fallback (skeleton → gradient) means missing captures
degrade cleanly rather than break the page.

## Content styling (no assets)

- **Callouts** — two lines rendered as styled pull-quotes:
  - "AI is an incredible accelerator and a terrible authority."
  - "because a second chance shouldn't require a law degree."
- **Lead line** — the italic tagline "Fifty states of record-clearing law, one
  plain answer, and the form to file next." rendered emphasized under the
  Turnleaf heading.
- Post body text is the full markdown from `next-chapter-blog-post.md`,
  converted into blocks. Section headings become `heading` blocks.

## Testing / verification

- `npm run build` succeeds.
- `npm run lint` passes.
- Manual: Blog list renders the one card; clicking opens the full post; back
  returns to the list; `?section=blog&post=next-chapter` deep-links to the post;
  missing images fall back gracefully; layout works mobile + desktop.

## Open items for Diana (do not block build)

1. Confirm the cohort site is `nextchapterproject.org`.
2. Capture 3 screenshots: Next Chapter hero, Turnleaf, capstone video frame.
   The post renders with graceful fallbacks until these land.
