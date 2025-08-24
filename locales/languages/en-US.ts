export default {
  'hero': { 'subtitle': 'Full Stack Developer, Frontend Specialist, and DevOps Enthusiast' },
  "projects": {
    'title': 'Featured Projects I have work',
    'list': [
      {
        "title": "Advanced Data Dashboards",
        "description": "Interactive dashboards with dynamic charts, user customizations, and complex datasets.",
        "image": "/images/data_dashboards.jpg",
        "tags": ["React", "ECharts", "SciChart", "Tailwind CSS", "TypeScript"],
      },
      {
        "title": "Smart Form Systems",
        "description": "Robust form solutions for user auth, product editing, and complex system settings.",
        image: "/images/form.png",
        tags: ["React", "React Hook Form", "Zod", "Tailwind CSS"],
      },
      {
        "title": "Mobile-First Web Apps",
        "description": "Responsive applications designed for desktop and mobile, supporting cross-platform usage.",
        image: "/images/mobile_first.png",
        tags: ["React", "Tailwind CSS", "Responsive Design"],
      },
      {
        "title": "Landing Pages",
        "description": "Simple, effective landing pages designed to inform or convert visitors.",
        image: "/images/landing_page.png",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      },
      {
        "title": "Self-Managed WordPress Sites",
        "description": "WordPress and Wix sites for clients who want to manage their content post-delivery.",
        image: "/images/wordpress.jpg",
        tags: ["WordPress", "Wix", "SEO", "Client Support"],
      },
      {
        "title": "DevOps & Micro Frontends",
        "description": "Managed Kubernetes environments with CI/CD pipelines for micro frontends and distributed services.",
        image: "/images/devops_microfrontends.png",
        tags: ["Kubernetes", "CI/CD", "Micro Frontends", "Azure DevOps", "Docker"],
      },
      {
        "title": "Backend & Cloud Functions",
        "description": "Experience with .NET backend APIs and event-driven Azure Functions for scalable solutions.",
        image: "/images/backend.jpg",
        tags: ["C#", ".NET", "Azure Functions", "REST APIs", "Serverless"],
      },
      {
        "title": "AI-First Applications",
        "description": "Exploring AI agents and automation-first design to build smarter, adaptive user experiences.",
        image: "/images/ai.png",
        tags: ["AI Agents", "LangChain", "OpenAI", "Next.js", "Prompt Engineering"],
      }
    ]
  },
  "skills": {
    "technical": "Technical Knowledge",
    "softSkills": {
      "title": "Soft Skills",
      "list": [
        { "skill": "Communication", "level": 90 },
        { "skill": "Teamwork", "level": 95 },
        { "skill": "Curiosity", "level": 85 },
        { "skill": "Problem Solving", "level": 80 },
        { "skill": "Adaptability", "level": 88 },
        { "skill": "Leadership", "level": 75 },
        { "skill": "Empathy", "level": 85 },
        { "skill": "Time Management", "level": 80 }
      ]
    }
  },
  "contact": {
    "title": "Let&apos;s Connect",
    "subtitle": "Ready to collaborate or have a project in mind? Let&apos;s make something amazing together.",
    "buttonLabels": {
      "email": "Get in Touch",
      "resume": "View Resume"
    }
  },

  // examples
  'hello': 'Hello',
  'hello.world': 'Hello world!',
  'welcome': 'Hello {name}!'
} as const