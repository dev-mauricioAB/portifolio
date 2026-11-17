import type { Locale } from "./models"

type Project = { title: string; description: string; image: string; tags: string[] }
type Skill = { label: string; title: string; description: string; tags: string[] }

export type Content = {
  nav: { work: string; profile: string; contact: string; resume: string; menu: string; language: string; home: string; styleGuide: string }
  hero: { label: string; first: string; second: string; description: string; work: string; profile: string; scroll: string }
  work: { label: string; heading: string; description: string; featured: string; discuss: string; projects: Project[] }
  profile: { label: string; heading: string; description: string; stats: { label: string; value: string }[]; panel: string; areas: string; across: string; groups: string[]; skills: Skill[] }
  contact: { label: string; first: string; second: string; description: string; email: string; linkedin: string }
  footer: { location: string; reference: string }
  guide: { label: string; title: string; subtitle: string; back: string; identity: string; palette: string; typography: string; buttons: string; components: string; spacing: string; photography: string; display: string; body: string; logo: string }
}

const en: Content = {
  nav: { work: "Work", profile: "Profile", contact: "Contact", resume: "Resume", menu: "Open menu", language: "Language", home: "Home", styleGuide: "Design reference" },
  hero: { label: "Frontend · Full-stack · DevOps", first: "I build digital", second: "worlds that work.", description: "Maurício Alexandre Barroso — full-stack developer, frontend specialist, and DevOps enthusiast crafting digital products from first pixel to production.", work: "Explore my work", profile: "View player profile", scroll: "Scroll to explore" },
  work: { label: "Selected missions", heading: "Work built to make an impact.", description: "A selection of challenges I work on across product engineering, data experiences, and cloud delivery.", featured: "Featured operation", discuss: "Discuss", projects: [
    { title: "Data command centers", description: "Interactive dashboards built to make complex datasets feel fast, clear, and actionable.", image: "/images/seoul-sunset.jpg", tags: ["React", "TypeScript", "ECharts", "SciChart"] },
    { title: "Smart product systems", description: "Reliable forms, responsive web apps, and polished interfaces designed around real user journeys.", image: "/images/seoul-neon.jpg", tags: ["Next.js", "Zod", "Tailwind", "UX"] },
    { title: "Cloud-ready platforms", description: "Distributed services, micro frontends, and delivery pipelines that keep teams moving.", image: "/images/seoul-skyline.jpg", tags: ["Docker", "Kubernetes", "Azure", "CI/CD"] },
  ] },
  profile: { label: "Player profile", heading: "Creative at heart. Technical by nature.", description: "I turn ambitious ideas into reliable digital products. My sweet spot is the space where visual craft, thoughtful UX, and solid engineering meet.", stats: [{ value: "90", label: "Communication" }, { value: "95", label: "Teamwork" }, { value: "85", label: "Curiosity" }], panel: "Full-stack loadout", areas: "Technical areas", across: "Across product & platform", groups: ["Interface & product", "Backend & cloud", "AI & automation"], skills: [
    { label: "Frontend core", title: "Interface foundations", description: "Modern, strongly typed interfaces with maintainable styling systems.", tags: ["React / Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS / Sass"] },
    { label: "Product UX", title: "Product systems", description: "Responsive experiences and dependable workflows built around real users.", tags: ["Responsive design", "UI/UX & prototyping", "React Hook Form / Zod", "TanStack Table / Query"] },
    { label: "Data + backend", title: "Connected platforms", description: "Data-rich products supported by practical backend and content services.", tags: ["ECharts / Chart.js / SciChart", "C# / .NET", "Azure Functions / REST APIs", "WordPress / Wix"] },
    { label: "Cloud + AI", title: "Delivery & intelligence", description: "Cloud delivery and emerging AI workflows that help products scale smarter.", tags: ["Kubernetes / Docker", "CI/CD · GitHub / Azure", "OpenAI / LangChain agents", "Azure AI / Copilot / LLMs"] },
  ] },
  contact: { label: "New quest", first: "Let's build something", second: "worth remembering.", description: "Have an idea, a product challenge, or a team that needs an extra player? Let's talk.", email: "Start a conversation", linkedin: "Connect on LinkedIn" },
  footer: { location: "Designing and developing from Brazil.", reference: "Design reference" },
  guide: { label: "Portfolio design reference", title: "Built for the next mission.", subtitle: "A visual identity system for digital worlds.", back: "Return to portfolio", identity: "Logo system", palette: "Color palette", typography: "Typography", buttons: "Buttons & links", components: "Components", spacing: "Spacing & shape", photography: "Seoul at night", display: "Display face", body: "Interface face", logo: "Signature slash · Mission Pink" },
}

const pt: Content = {
  nav: { work: "Projetos", profile: "Perfil", contact: "Contato", resume: "Currículo", menu: "Abrir menu", language: "Idioma", home: "Início", styleGuide: "Referência visual" },
  hero: { label: "Frontend · Full-stack · DevOps", first: "Construo mundos", second: "digitais que funcionam.", description: "Maurício Alexandre Barroso — desenvolvedor full-stack, especialista em frontend e entusiasta de DevOps, criando produtos digitais do primeiro pixel à produção.", work: "Explorar projetos", profile: "Ver perfil", scroll: "Role para explorar" },
  work: { label: "Missões selecionadas", heading: "Trabalho feito para causar impacto.", description: "Uma seleção de desafios em engenharia de produto, experiências de dados e entrega em nuvem.", featured: "Operação em destaque", discuss: "Conversar sobre", projects: [
    { title: "Centros de comando de dados", description: "Dashboards interativos para tornar dados complexos rápidos, claros e acionáveis.", image: "/images/seoul-sunset.jpg", tags: ["React", "TypeScript", "ECharts", "SciChart"] },
    { title: "Sistemas inteligentes de produto", description: "Formulários confiáveis, aplicações responsivas e interfaces pensadas para jornadas reais.", image: "/images/seoul-neon.jpg", tags: ["Next.js", "Zod", "Tailwind", "UX"] },
    { title: "Plataformas prontas para a nuvem", description: "Serviços distribuídos, micro frontends e pipelines de entrega que mantêm as equipes em movimento.", image: "/images/seoul-skyline.jpg", tags: ["Docker", "Kubernetes", "Azure", "CI/CD"] },
  ] },
  profile: { label: "Perfil do jogador", heading: "Criativo por essência. Técnico por natureza.", description: "Transformo ideias ambiciosas em produtos digitais confiáveis. Meu lugar é onde o cuidado visual, uma boa experiência e uma engenharia sólida se encontram.", stats: [{ value: "90", label: "Comunicação" }, { value: "95", label: "Trabalho em equipe" }, { value: "85", label: "Curiosidade" }], panel: "Equipamento full-stack", areas: "Áreas técnicas", across: "Produto e plataforma", groups: ["Interface e produto", "Backend e nuvem", "IA e automação"], skills: [
    { label: "Frontend", title: "Fundamentos de interface", description: "Interfaces modernas e tipadas com sistemas de estilo sustentáveis.", tags: ["React / Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS / Sass"] },
    { label: "Experiência de produto", title: "Sistemas de produto", description: "Experiências responsivas e fluxos confiáveis construídos para pessoas reais.", tags: ["Design responsivo", "UI/UX e prototipagem", "React Hook Form / Zod", "TanStack Table / Query"] },
    { label: "Dados + backend", title: "Plataformas conectadas", description: "Produtos ricos em dados com serviços de backend e conteúdo.", tags: ["ECharts / Chart.js / SciChart", "C# / .NET", "Azure Functions / APIs REST", "WordPress / Wix"] },
    { label: "Nuvem + IA", title: "Entrega e inteligência", description: "Entrega em nuvem e fluxos emergentes de IA para produtos mais inteligentes.", tags: ["Kubernetes / Docker", "CI/CD · GitHub / Azure", "OpenAI / agentes LangChain", "Azure AI / Copilot / LLMs"] },
  ] },
  contact: { label: "Nova missão", first: "Vamos criar algo", second: "inesquecível.", description: "Tem uma ideia, um desafio de produto ou uma equipe precisando de mais um jogador? Vamos conversar.", email: "Iniciar uma conversa", linkedin: "Conectar no LinkedIn" },
  footer: { location: "Design e desenvolvimento do Brasil.", reference: "Referência visual" },
  guide: { label: "Referência visual do portfólio", title: "Pronto para a próxima missão.", subtitle: "Um sistema de identidade visual para mundos digitais.", back: "Voltar ao portfólio", identity: "Sistema de marca", palette: "Paleta de cores", typography: "Tipografia", buttons: "Botões e links", components: "Componentes", spacing: "Espaçamento e formas", photography: "Seul à noite", display: "Fonte de destaque", body: "Fonte de interface", logo: "Barra característica · Mission Pink" },
}

export function getContent(locale: Locale): Content {
  return locale === "pt-BR" ? pt : en
}
