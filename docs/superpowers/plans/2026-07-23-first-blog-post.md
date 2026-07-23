# First Blog Post Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the "Coming Soon" Blog placeholder with a real, growable blog whose first post is Diana's Next Chapter cohort reflection, with a title card, an in-code project montage, and interleaved images.

**Architecture:** A `BlogPosts.jsx` data file holds each post as an array of typed content blocks. `Blog.jsx` becomes a list→detail view (local `selectedSlug` state, deep-linked via `?post=<slug>`). New presentational components — `BlogCard`, `BlogPost`, `BlogMontage` — render the list card, the full post, and the in-code screenshot collage.

**Tech Stack:** React 19, Framer Motion 12, Tailwind CSS v4, Vite 7, lucide-react. No new dependencies.

## Global Constraints

- **No new dependencies.** Use only what's in `client/package.json`.
- **No react-router.** Navigation stays section-based (`App.jsx` `activeSection`); post selection is internal to `Blog.jsx` + URL params.
- **No test framework exists in this repo and none is added** (YAGNI). Verify every task with `npm run build` (must succeed) and `npm run lint` (must pass), plus a browser check via `npm run dev`.
- **Follow existing conventions:** glass cards, `gradient-text`/`gradient-bg` classes, Framer Motion `initial/animate` entrance patterns, graceful image fallback (skeleton → gradient) exactly like `ProjectCard.jsx`.
- **All commands run from `client/`** (where `package.json` lives). Paths below are repo-relative.
- **Copy is verbatim** from `next-chapter-blog-post.md` — do not paraphrase the post text.

---

## File Structure

- `client/src/data/BlogPosts.jsx` — **create.** Exports `blogPosts` array; the single source of post content.
- `client/src/components/BlogMontage.jsx` — **create.** CSS-grid collage of existing project screenshots.
- `client/src/components/BlogCard.jsx` — **create.** List thumbnail card (cover + title + date + teaser).
- `client/src/components/BlogPost.jsx` — **create.** Full-post renderer: hero + walks content blocks.
- `client/src/pages/Blog.jsx` — **rewrite.** List↔detail state, URL deep-link, back button.

Assets already present: `client/public/assets/blog/cohort-classroom.png`, and project shots under `client/public/assets/projects/`. Assets Diana will add later (post degrades gracefully without them): `next-chapter-cover.jpg`, `turnleaf.jpg`, `capstone-video.jpg` under `client/public/assets/blog/`.

---

### Task 1: Blog post data file

**Files:**
- Create: `client/src/data/BlogPosts.jsx`

**Interfaces:**
- Produces: `export default blogPosts` — an array of post objects.
- Post object shape:
  ```
  { slug: string, title: string, date: string, teaser: string,
    coverImage: string, content: Block[] }
  ```
- Block shapes (the `content` array):
  - `{ type: "lead", text: string }` — emphasized italic lead line
  - `{ type: "paragraph", content: Segment[] }` — body text; `Segment` is a
    string OR `{ text: string, href?: string, bold?: boolean }`
  - `{ type: "heading", text: string }` — section heading
  - `{ type: "callout", text: string }` — styled pull-quote
  - `{ type: "image", src: string, alt: string, caption?: string }`
  - `{ type: "montage" }` — renders `BlogMontage`

- [ ] **Step 1: Create the data file with the full post**

Create `client/src/data/BlogPosts.jsx` with exactly this content:

```jsx
const blogPosts = [
  {
    slug: "next-chapter",
    title: "What I Built in One Cohort (and What It Built in Me)",
    date: "July 2026",
    teaser:
      "I finished the Next Chapter AI-Augmented Builder Cohort and shipped more in a few months than in any stretch of my career. That's worth writing down.",
    coverImage: "/assets/blog/next-chapter-cover.jpg",
    content: [
      {
        type: "paragraph",
        content: [
          "This is my first blog post. I've had a blog link on my resume for a while with nothing behind it, mostly because I convinced myself I'm not a writer. But I just finished the Next Chapter AI-Augmented Builder Cohort, and I shipped more in these few months than in any stretch of my career. That's worth writing down.",
        ],
      },
      { type: "heading", text: "The pace" },
      {
        type: "paragraph",
        content: [
          "The cohort's whole premise is building with AI as a real teammate — not a toy, not a threat, a teammate. And the honest measure of whether that works isn't a hot take. It's output. So here's mine.",
        ],
      },
      { type: "montage" },
      {
        type: "paragraph",
        content: [
          { text: "NewsForge", bold: true },
          " — an AI news aggregator I built for our Monday presentations, so I could walk in every week already knowing what happened in AI over the weekend. Next.js, Supabase, Groq, deployed on Vercel.",
        ],
      },
      {
        type: "paragraph",
        content: [
          { text: "PromptForge", bold: true },
          " — a prompt engineering workspace with auth, 34 templates, and streaming responses. Building it forced me to actually study what makes a prompt good instead of just vibing my way through.",
        ],
      },
      {
        type: "paragraph",
        content: [
          { text: "Interview Armor", bold: true },
          " — an interview prep tool in vanilla JavaScript with voice transcription and AI coaching, styled like a dojo. Sometimes you build a thing just because it makes practicing less miserable.",
        ],
      },
      {
        type: "paragraph",
        content: [
          { text: "Canvas Daily", bold: true },
          " — our Phase 2 project. Python and FastAPI pulling my Canvas LMS data into a daily email digest with an AI study breakdown, because I was juggling college courses alongside the cohort and needed my school life to come to me instead of the other way around.",
        ],
      },
      {
        type: "paragraph",
        content: [
          { text: "yc-student-assistant", bold: true },
          " — a RAG pipeline built from scratch with TF-IDF and cosine similarity, no vector database, so I'd understand what retrieval actually is before reaching for the fancy tools.",
        ],
      },
      {
        type: "paragraph",
        content: [
          { text: "Project Noah", bold: true },
          " — the fun one. A planetary map streaming the “thoughts” of 1,500 procedurally generated animals across 60 species. Zero business value. Maximum joy. Every portfolio needs one of those.",
        ],
      },
      { type: "paragraph", content: ["And then the capstone."] },
      { type: "heading", text: "Turnleaf" },
      {
        type: "paragraph",
        content: [
          "Turnleaf is a free tool that tells you whether you're eligible to clear your criminal record, in any of the fifty states, in plain language — plus the actual form to file next.",
        ],
      },
      {
        type: "lead",
        text: "Fifty states of record-clearing law, one plain answer, and the form to file next.",
      },
      {
        type: "image",
        src: "/assets/blog/turnleaf.jpg",
        alt: "Turnleaf showing a plain-language record-clearing eligibility answer",
        caption: "Turnleaf: one plain answer, and the form to file next.",
      },
      {
        type: "paragraph",
        content: [
          "It's also where the cohort's biggest lesson landed. AI scaffolded the app, generated research packages for all fifty states, and seeded hundreds of test personas overnight. Then I checked its legal rules against the actual statutes, and they were wrong. Repealed laws cited as current. New laws missing entirely.",
        ],
      },
      {
        type: "paragraph",
        content: [
          "For a tool like this, wrong answers hurt real people. So I read the official legislature website for every single state and verified all fifty myself, statute by statute. Every source in the app links to the actual .gov page with the date I checked it.",
        ],
      },
      {
        type: "paragraph",
        content: [
          "That's the balance the whole cohort taught me, compressed into one project:",
        ],
      },
      {
        type: "callout",
        text: "AI is an incredible accelerator and a terrible authority.",
      },
      {
        type: "paragraph",
        content: [
          "Speed from the machine, trust from the human. The machine bought me the weeks; I spent them on the part only a human should do.",
        ],
      },
      { type: "heading", text: "The skill I didn't sign up for" },
      {
        type: "paragraph",
        content: [
          "The capstone demo required a video. I'd never made one. I wrote a script in six beats — a person, a problem, a possibility, the product, the proof, the payoff — and spent a full week learning to produce it while still verifying statutes on the side. Editing video uses a completely different part of your brain than debugging TypeScript, and finding out I could do both is its own reward.",
        ],
      },
      {
        type: "image",
        src: "/assets/blog/capstone-video.jpg",
        alt: "A frame from the Turnleaf capstone demo video",
        caption: "Learning video production in a week, one beat at a time.",
      },
      {
        type: "paragraph",
        content: ["The closing line is the reason the project exists:"],
      },
      {
        type: "callout",
        text: "because a second chance shouldn't require a law degree.",
      },
      { type: "heading", text: "The people" },
      {
        type: "paragraph",
        content: [
          "I expected to leave with projects. I didn't expect to leave with people. My peers pushed me every single week — Monday presentations, honest feedback, watching everyone's work grow alongside mine. My instructor Shahzad believed in Turnleaf early and said so publicly, which mattered more than he probably knows on the days the statute reading felt endless.",
        ],
      },
      {
        type: "image",
        src: "/assets/blog/cohort-classroom.png",
        alt: "The Next Chapter spring cohort together on a video call",
        caption: "The NC Spring Cohort — Monday presentations, every week.",
      },
      {
        type: "paragraph",
        content: [
          "These aren't networking contacts. These are people I'll be building things with for a long time.",
        ],
      },
      { type: "heading", text: "What's next" },
      {
        type: "paragraph",
        content: [
          "Turnleaf is live at ",
          { text: "turnleaf.us", href: "https://turnleaf.us" },
          ", and everything else is on my portfolio. There's more work ahead, and I'll write about it here as it happens.",
        ],
      },
      {
        type: "paragraph",
        content: ["Turns out I had things to say. First post: done."],
      },
    ],
  },
];

export default blogPosts;
```

- [ ] **Step 2: Verify it builds**

Run (from `client/`): `npm run build`
Expected: build succeeds with no errors (the file is imported in Task 5; a standalone build here still validates syntax once imported — if running before Task 5, instead verify with `npx eslint src/data/BlogPosts.jsx` → no errors).

- [ ] **Step 3: Commit**

```bash
git add client/src/data/BlogPosts.jsx
git commit -m "Add first blog post data (Next Chapter reflection)"
```

---

### Task 2: BlogMontage component

**Files:**
- Create: `client/src/components/BlogMontage.jsx`

**Interfaces:**
- Produces: `export default function BlogMontage()` — self-contained, no required props.
- Renders a responsive CSS grid of existing project screenshots. Each tile
  hides itself on image error (so a missing file never shows a broken icon).

- [ ] **Step 1: Create the component**

Create `client/src/components/BlogMontage.jsx`:

```jsx
import { useState } from "react";
import { motion } from "framer-motion";

const tiles = [
  { src: "/assets/projects/promptforge.jpg", label: "PromptForge" },
  { src: "/assets/projects/interview-armor.jpg", label: "Interview Armor" },
  { src: "/assets/projects/canvas-daily.jpg", label: "Canvas Daily" },
  { src: "/assets/projects/toolbelt.jpg", label: "Toolbelt" },
  { src: "/assets/projects/reset.jpg", label: "Reset" },
];

const Tile = ({ src, label }) => {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-800 group/tile">
      <img
        src={src}
        alt={`${label} screenshot`}
        loading="lazy"
        onError={() => setError(true)}
        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/tile:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300 flex items-end p-2">
        <span className="text-xs text-white font-medium">{label}</span>
      </div>
    </div>
  );
};

const BlogMontage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8"
    >
      {tiles.map((t) => (
        <Tile key={t.src} {...t} />
      ))}
    </motion.div>
  );
};

export default BlogMontage;
```

- [ ] **Step 2: Verify lint**

Run: `npx eslint src/components/BlogMontage.jsx`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add client/src/components/BlogMontage.jsx
git commit -m "Add BlogMontage project collage component"
```

---

### Task 3: BlogCard component

**Files:**
- Create: `client/src/components/BlogCard.jsx`

**Interfaces:**
- Consumes: a `post` object from `blogPosts` (Task 1); `onOpen(slug)` callback.
- Produces: `export default function BlogCard({ post, onOpen, index })`.
- Mirrors `ProjectCard.jsx` image handling: skeleton while loading, gradient
  fallback on error.

- [ ] **Step 1: Create the component**

Create `client/src/components/BlogCard.jsx`:

```jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon, ArrowRight, Calendar } from "lucide-react";

const BlogCard = ({ post, onOpen, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(post.slug)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl card-hover group relative text-left w-full cursor-pointer overflow-hidden"
    >
      <div className="h-48 relative overflow-hidden bg-gray-800">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
            <ImageIcon size={32} className="text-gray-500" />
          </div>
        )}
        {post.coverImage && !imageError ? (
          <img
            src={post.coverImage}
            alt={`${post.title} cover`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div className="w-full h-full gradient-bg flex items-center justify-center">
            <span className="text-4xl">📝</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-cyan-400 mb-2">
          <Calendar size={14} />
          <span>{post.date}</span>
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-all leading-tight mb-3">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
          {post.teaser}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 group-hover:gap-2 transition-all">
          Read post <ArrowRight size={16} />
        </span>
      </div>
    </motion.button>
  );
};

export default BlogCard;
```

- [ ] **Step 2: Verify lint**

Run: `npx eslint src/components/BlogCard.jsx`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add client/src/components/BlogCard.jsx
git commit -m "Add BlogCard list component"
```

---

### Task 4: BlogPost component (block renderer)

**Files:**
- Create: `client/src/components/BlogPost.jsx`

**Interfaces:**
- Consumes: a `post` object (Task 1); `onBack()` callback; `BlogMontage` (Task 2).
- Produces: `export default function BlogPost({ post, onBack })`.
- Renders hero (coverImage + title + date), then maps `post.content` blocks to
  markup by `type`. Inline segments render bold and links.

- [ ] **Step 1: Create the component**

Create `client/src/components/BlogPost.jsx`:

```jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ImageIcon, Calendar } from "lucide-react";
import BlogMontage from "./BlogMontage";

const Segments = ({ content }) =>
  content.map((seg, i) => {
    if (typeof seg === "string") return <span key={i}>{seg}</span>;
    if (seg.href)
      return (
        <a
          key={i}
          href={seg.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
        >
          {seg.text}
        </a>
      );
    if (seg.bold)
      return (
        <strong key={i} className="text-white font-semibold">
          {seg.text}
        </strong>
      );
    return <span key={i}>{seg.text}</span>;
  });

const PostImage = ({ block }) => {
  const [error, setError] = useState(false);
  if (error) return null;
  return (
    <figure className="my-8">
      <div className="rounded-2xl overflow-hidden glass">
        <img
          src={block.src}
          alt={block.alt}
          loading="lazy"
          onError={() => setError(true)}
          className="w-full h-auto object-cover"
        />
      </div>
      {block.caption && (
        <figcaption className="text-center text-sm text-gray-500 mt-3">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
};

const Block = ({ block }) => {
  switch (block.type) {
    case "heading":
      return (
        <h3 className="text-2xl font-bold gradient-text mt-10 mb-4">
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p className="text-gray-300 leading-relaxed mb-5">
          <Segments content={block.content} />
        </p>
      );
    case "lead":
      return (
        <p className="text-lg md:text-xl italic text-cyan-300 leading-relaxed my-6">
          {block.text}
        </p>
      );
    case "callout":
      return (
        <blockquote className="my-8 border-l-4 border-cyan-400 pl-6 py-2">
          <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
            {block.text}
          </p>
        </blockquote>
      );
    case "image":
      return <PostImage block={block} />;
    case "montage":
      return <BlogMontage />;
    default:
      return null;
  }
};

const BlogPost = ({ post, onBack }) => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [heroError, setHeroError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-6 cursor-pointer"
      >
        <ArrowLeft size={18} /> Back to Blog
      </button>

      <div className="rounded-3xl overflow-hidden glass mb-8 relative h-56 md:h-80 bg-gray-800">
        {!heroLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
            <ImageIcon size={40} className="text-gray-500" />
          </div>
        )}
        {post.coverImage && !heroError ? (
          <img
            src={post.coverImage}
            alt={`${post.title} cover`}
            onLoad={() => setHeroLoaded(true)}
            onError={() => {
              setHeroError(true);
              setHeroLoaded(true);
            }}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              heroLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div className="w-full h-full gradient-bg flex items-center justify-center">
            <span className="text-6xl">📝</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 text-sm text-cyan-400 mb-3">
        <Calendar size={16} />
        <span>{post.date}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
        {post.title}
      </h2>

      <div className="max-w-3xl">
        {post.content.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} /> Back to Blog
        </button>
      </div>
    </motion.article>
  );
};

export default BlogPost;
```

- [ ] **Step 2: Verify lint**

Run: `npx eslint src/components/BlogPost.jsx`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add client/src/components/BlogPost.jsx
git commit -m "Add BlogPost block renderer component"
```

---

### Task 5: Rewrite Blog page (list ↔ detail + deep-link)

**Files:**
- Modify (full rewrite): `client/src/pages/Blog.jsx`

**Interfaces:**
- Consumes: `blogPosts` (Task 1), `BlogCard` (Task 3), `BlogPost` (Task 4).
- Reads `?post=<slug>` on mount to open a post directly; updates the URL on
  open/back via `history.pushState`/`replaceState` and syncs on `popstate`.
- No prop changes — still rendered by `App.jsx` as `<Blog />`.

- [ ] **Step 1: Rewrite the page**

Replace the entire contents of `client/src/pages/Blog.jsx` with:

```jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import blogPosts from "../data/BlogPosts";
import BlogCard from "../components/BlogCard";
import BlogPost from "../components/BlogPost";

const slugFromUrl = () =>
  new URLSearchParams(window.location.search).get("post");

const Blog = () => {
  const [selectedSlug, setSelectedSlug] = useState(() => {
    const slug = slugFromUrl();
    return blogPosts.some((p) => p.slug === slug) ? slug : null;
  });

  useEffect(() => {
    const onPop = () => {
      const slug = slugFromUrl();
      setSelectedSlug(blogPosts.some((p) => p.slug === slug) ? slug : null);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const openPost = (slug) => {
    const params = new URLSearchParams(window.location.search);
    params.set("section", "blog");
    params.set("post", slug);
    window.history.pushState({}, "", `?${params.toString()}`);
    setSelectedSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closePost = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("post");
    window.history.pushState({}, "", `?${params.toString()}`);
    setSelectedSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedPost = blogPosts.find((p) => p.slug === selectedSlug);

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={closePost} />;
  }

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 gradient-text relative"
      >
        Blog
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 gradient-bg rounded-full mt-2"
        />
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.slug}
            post={post}
            index={index}
            onOpen={openPost}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
```

- [ ] **Step 2: Build the whole app**

Run (from `client/`): `npm run build`
Expected: build succeeds, no errors.

- [ ] **Step 3: Lint the whole app**

Run: `npm run lint`
Expected: passes (no new errors introduced by the blog files).

- [ ] **Step 4: Browser check**

Run: `npm run dev`, open the printed localhost URL, then:
- Click **Blog** in the nav → one post card renders (cover falls back to 📝 gradient until `next-chapter-cover.jpg` is added).
- Click the card → full post opens, scrolled to top; montage grid shows the project screenshots; callouts and lead line are styled; missing images (turnleaf/capstone) are simply absent, not broken.
- Click **Back to Blog** → returns to the list.
- Visit `?section=blog&post=next-chapter` directly → opens the post.
- Browser Back/Forward buttons move between list and post correctly.
- Check mobile width (dev tools responsive) → single-column list, readable post.

- [ ] **Step 5: Commit**

```bash
git add client/src/pages/Blog.jsx
git commit -m "Rewrite Blog page as list-to-detail with deep-linking"
```

---

## Later (Diana, non-blocking)

Add these files under `client/public/assets/blog/` and the post fills in automatically — no code changes:
- `next-chapter-cover.jpg` — Next Chapter site hero (nextchapterproject.org), landscape ~16:9.
- `turnleaf.jpg` — turnleaf.us plain-answer/result screen.
- `capstone-video.jpg` — a still frame from the capstone demo video.

If a captured shot has a different extension (e.g. `.png`), update the matching `src` in `client/src/data/BlogPosts.jsx`.

## Self-Review Notes

- **Spec coverage:** data model (Task 1), list↔detail + deep-link (Task 5), BlogCard/BlogPost/BlogMontage (Tasks 3/4/2), callouts + lead + montage blocks (Tasks 1/4), graceful fallbacks (Tasks 2/3/4), images table incl. cohort photo already in repo (Task 1 references it). ✓
- **No placeholders:** all component code and post copy included verbatim. ✓
- **Type consistency:** block `type` strings (`paragraph`/`heading`/`lead`/`callout`/`image`/`montage`) match between Task 1 data and Task 4 renderer; `content` is always a segment array; `onOpen(slug)`/`onBack()` names consistent across Tasks 3/4/5. ✓
