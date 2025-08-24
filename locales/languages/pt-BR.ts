export default {
  'hero': { 'subtitle': 'Desenvolvedor Full Stack, Especialista em Frontend e Entusiasta de DevOps', },
  "projects": {
    'title': 'Projetos em Destaque que Já Desenvolvi ou Participei',
    'list': [
      {
        "title": "Dashboards Avançados de Dados",
        "description": "Dashboards interativos com gráficos dinâmicos, customizações do usuário e conjuntos de dados complexos.",
        "image": "/images/data_dashboards.jpg",
        "tags": ["React", "ECharts", "SciChart", "Tailwind CSS", "TypeScript"],
      },
      {
        "title": "Sistemas Inteligentes de Formulários",
        "description": "Soluções robustas de formulários para autenticação de usuários, edição de produtos e configurações complexas do sistema.",
        image: "/images/form.png",
        tags: ["React", "React Hook Form", "Zod", "Tailwind CSS"],
      },
      {
        "title": "Aplicações Web Mobile-First",
        "description": "Aplicações responsivas projetadas para desktop e mobile, suportando uso cross-platform.",
        image: "/images/mobile_first.png",
        tags: ["React", "Tailwind CSS", "Responsive Design"],
      },
      {
        "title": "Landing Pages",
        "description": "Landing pages simples e eficazes, projetadas para informar ou converter visitantes.",
        image: "/images/landing_page.png",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      },
      {
        "title": "Sites WordPress Autogerenciáveis",
        "description": "Sites em WordPress e Wix para clientes que desejam gerenciar seu conteúdo após a entrega.",
        image: "/images/wordpress.jpg",
        tags: ["WordPress", "Wix", "SEO", "Client Support"],
      },
      {
        "title": "DevOps & Micro Frontends",
        "description": "Ambientes Kubernetes gerenciados com pipelines CI/CD para micro frontends e serviços distribuídos.",
        image: "/images/devops_microfrontends.png",
        tags: ["Kubernetes", "CI/CD", "Micro Frontends", "Azure DevOps", "Docker"],
      },
      {
        "title": "Backend & Funções em Nuvem",
        "description": "Experiência com APIs backend em .NET e Azure Functions orientadas a eventos para soluções escaláveis.",
        image: "/images/backend.jpg",
        tags: ["C#", ".NET", "Azure Functions", "REST APIs", "Serverless"],
      },
      {
        "title": "Aplicações AI-First",
        "description": "Explorando agentes de IA e design orientado à automação para criar experiências de usuário mais inteligentes e adaptativas.",
        image: "/images/ai.png",
        tags: ["AI Agents", "LangChain", "OpenAI", "Next.js", "Prompt Engineering"],
      }
    ]
  },
  "skills": {
    "technical": "Conhecimentos Técnicos",
    "softSkills": {
      "title": "Habilidades Interpessoais",
      "list": [
        { "skill": "Comunicação", "level": 90 },
        { "skill": "Trabalho em Equipe", "level": 95 },
        { "skill": "Curiosidade", "level": 85 },
        { "skill": "Resolução de Problemas", "level": 80 },
        { "skill": "Adaptabilidade", "level": 88 },
        { "skill": "Liderança", "level": 75 },
        { "skill": "Empatia", "level": 85 },
        { "skill": "Gestão do Tempo", "level": 80 }
      ]
    }
  },
  "contact": {
    "title": "Vamos Conectar",
    "subtitle": "Pronto para colaborar ou tem um projeto em mente? Vamos criar algo incrível juntos.",
    "buttonLabels": {
      "email": "Entrar em Contato",
      "resume": "Ver Currículo"
    }
  },

  // examples
  'hello': 'Ola',
  'hello.world': 'Ola Mundo!',
  'welcome': 'Ola {name}!'
} as const