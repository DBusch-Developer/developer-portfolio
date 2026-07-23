const blogPosts = [
  {
    slug: "next-chapter",
    title: "What I Built in One Cohort (and What It Built in Me)",
    date: "July 2026",
    teaser:
      "I finished the Next Chapter AI-Augmented Builder Cohort and shipped more in a few months than in any stretch of my career. That's worth writing down.",
    coverImage: "/assets/blog/next-chapter-cover.png",
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
          " — an AI news aggregator I built for our weekly presentations, so I could walk in every week already knowing what happened in AI over the weekend. Next.js, Supabase, Groq, deployed on Vercel.",
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
        src: "/assets/blog/turnleaf.png",
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
        src: "/assets/blog/capstone-video.png",
        alt: "Editing the Turnleaf ad in Premiere Pro—timeline, captions, and the logo on the program monitor",
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
      {
        type: "video",
        src: "/assets/blog/turnleaf-ad.mp4",
        poster: "/assets/blog/turnleaf-ad-poster.jpg",
        caption: "The finished ad—the six beats, and that closing line.",
      },
      { type: "heading", text: "The people" },
      {
        type: "paragraph",
        content: [
          "I expected to leave with projects. I didn't expect to leave with people. My peers pushed me every single week — the presentations, honest feedback, watching everyone's work grow alongside mine. My instructor Shahzad believed in Turnleaf early and said so publicly, which mattered more than he probably knows on the days the statute reading felt endless.",
        ],
      },
      {
        type: "image",
        src: "/assets/blog/cohort-classroom.png",
        alt: "The Next Chapter spring cohort together on a video call",
        caption: "The NC Spring Cohort — presentations every week.",
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
