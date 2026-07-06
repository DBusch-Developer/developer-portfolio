const projects = [
  {
    title: "Toolbelt - Back-Office Automation Suite",
    description:
      "Back-office automation for local service businesses—three small automations that answer every lead in seconds, turn finished jobs into five-star reviews, and chase overdue invoices so you never have to.",
    category: "Applications",
    icon: "🧰", // Fallback icon
    color: "from-orange-500 to-red-600", // Fallback gradient
    technologies: ["React", "Vite", "GSAP", "Groq API"],
    githubUrl: "https://github.com/DBusch-Developer/toolbelt",
    liveUrl: "https://toolbelt-eta.vercel.app/",
    image: "/assets/projects/toolbelt.jpg",
  },
  {
    title: "Canvas Daily - AI Study Companion",
    description:
      "A daily companion for students that syncs upcoming Canvas assignments, breaks them down with AI, and answers questions about your course. One day, every class.",
    category: "Applications",
    icon: "🎓", // Fallback icon
    color: "from-indigo-500 to-purple-600", // Fallback gradient
    technologies: ["Python", "FastAPI", "PostgreSQL", "Groq API"],
    githubUrl: "https://github.com/DBusch-Developer/canvas-daily",
    liveUrl: "https://canvas-daily.org/",
    image: "/assets/projects/canvas-daily.jpg",
  },
  {
    title: "PromptForge - AI Prompt Template Library",
    description:
      "An AI prompt template library with 34+ reusable templates across techniques like chain-of-thought, few-shot, and step sequencing. Build, test, and export prompts.",
    category: "Applications",
    icon: "⚡", // Fallback icon
    color: "from-amber-500 to-orange-600", // Fallback gradient
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/DBusch-Developer/PromptForge",
    liveUrl: "https://prompt-forge-woad-one.vercel.app/",
    image: "/assets/projects/promptforge.jpg",
  },
  {
    title: "Interview Armor - Developer Interview Trainer",
    description:
      "A dojo-themed training ground for developer interviews—draw a question, speak your answer aloud, and get AI coaching on what you actually said, not what you meant to say.",
    category: "Applications",
    icon: "🥋", // Fallback icon
    color: "from-red-500 to-rose-700", // Fallback gradient
    technologies: ["JavaScript", "HTML", "CSS", "Groq API"],
    githubUrl: "https://github.com/DBusch-Developer/interview-armor",
    liveUrl: "https://interview-armor.vercel.app/",
    image: "/assets/projects/interview-armor.jpg",
  },
  {
    title: "Reset - Anti-Inflammatory Meal Plan",
    description:
      "A 14-day anti-inflammatory meal reset—dairy-free and plant-forward with meal browsing and progress tracking. No rigid schedules, just smart options.",
    category: "Applications",
    icon: "🥗", // Fallback icon
    color: "from-green-500 to-emerald-600", // Fallback gradient
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/DBusch-Developer/reset",
    liveUrl: "https://www.your-reset.life/",
    image: "/assets/projects/reset.jpg",
  },
  {
    title: "Cuttin' Up Community Project - Community Platform",
    description:
      "A website built for Cuttin Up Community Project, a Phoenix-based nonprofit empowering unhoused and justice-impacted individuals through free barbering services, job training, and community support.",
    category: "Web Development",
    icon: "✂️", // Fallback icon
    color: "from-blue-500 to-purple-600", // Fallback gradient
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/DBusch-Developer/CUCP",
    liveUrl: "https://cucp.vercel.app/",
    image: "/assets/projects/cucp.png",
  },
  {
    title: "ShoeStyle - E-Commerce Landing Page",
    description:
      "A modern, responsive shoe store landing page showcasing product design and UI layout",
    category: "UI/UX",
    icon: "👟", // Fallback icon
    color: "from-blue-500 to-purple-600", // Fallback gradient
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/DBusch-Developer/Shoe-Landing-Page",
    liveUrl: "https://shoe-landing-page-u213.vercel.app",
    image: "/assets/projects/shoe-landing-page.png",
  },
  {
    title: "Bust the Myth - Vegan Awareness Campaign",
    description:
      "A three-page vanilla HTML/CSS/JS site debunking common misconceptions about plant-based eating, featuring interactive flip cards, an accordion, and a live bust counter.",
    category: "Web Development",
    icon: "🥦", // Fallback icon
    color: "from-blue-500 to-purple-600", // Fallback gradient
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/DBusch-Developer/next-chapter",
    liveUrl: "https://dbusch-developer.github.io/bust-the-myths/",
    image: "/assets/projects/bust-the-myth.png",
  },
  {
    title: "ListKing - Real Estate Platform",
    description:
      "Ultimate destination for finding your dream home with advanced search filters and interactive maps",
    category: "Web Development",
    icon: "🏠", // Fallback icon
    color: "from-blue-500 to-purple-600", // Fallback gradient
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/DBusch-Developer/real-estate",
    liveUrl: "https://real-estate-rouge-seven.vercel.app/",
    image: "/assets/projects/listKing.jpg",
  },
  {
    title: "ChatSphere - Social Chat Application",
    description:
      "Real-time messaging platform with modern UI, socket.io integration and user authentication",
    category: "Applications",
    icon: "💬",
    color: "from-green-500 to-blue-500",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/DBusch-Developer/chat-app",
    liveUrl: "https://chat-app-one-wine.vercel.app/",
    image: "/assets/projects/chat-app.JPG",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Comprehensive data visualization tool with interactive charts and real-time data updates",
    category: "UI/UX",
    icon: "📊",
    color: "from-purple-500 to-pink-500",
    technologies: ["React", "D3.js", "Recharts.js", "MongoDB"],
    githubUrl: "https://github.com/DBusch-Developer/project-tracker",
    liveUrl: "https://project-tracker-dun-six.vercel.app",
    image: "/assets/projects/project-tracker.JPG",
  },

  {
    title: "WikiVerse - Collaborative Wiki Platform",
    description:
      "A Collaborative Wiki Platform for Knowledge Sharing and Documentation",
    category: "Web Development",
    icon: "🌊",
    color: "from-cyan-500 to-blue-500",
    technologies: ["React", "Framer Motion", "Redux", "CSS3"],
    githubUrl: "https://github.com/DBusch-Developer/class-connect-capstone",
    liveUrl: "https://class-connect-capstone.vercel.app/",
    image: "/assets/projects/classConnect.jpg",
  },
  {
    title: "Todo App with Backend",
    description:
      "My first full-stack project featuring CRUD operations and responsive design",
    category: "Applications",
    icon: "📝",
    color: "from-yellow-500 to-orange-500",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/DBusch-Developer/todo-app-react-backend",
    liveUrl: "https://todo-app-react-backend.vercel.app/",
    image: "/assets/projects/todoApp.jpg",
  },
];

export default projects;
