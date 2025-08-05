'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Advanced Data Dashboards",
    description:
      "Interactive dashboards with dynamic charts, user customizations, and complex datasets.",
    image: "/images/data_dashboards.jpg",
    tags: ["React", "ECharts", "SciChart", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Smart Form Systems",
    description:
      "Robust form solutions for user auth, product editing, and complex system settings.",
    image: "/images/form.png",
    tags: ["React", "React Hook Form", "Zod", "Tailwind CSS"],
  },
  {
    title: "Mobile-First Web Apps",
    description:
      "Responsive applications designed for desktop and mobile, supporting cross-platform usage.",
    image: "/images/mobile_first.png",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Landing Pages",
    description:
      "Simple, effective landing pages designed to inform or convert visitors.",
    image: "/images/landing_page.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Self-Managed WordPress Sites",
    description:
      "WordPress and Wix sites for clients who want to manage their content post-delivery.",
    image: "/images/wordpress.jpg",
    tags: ["WordPress", "Wix", "SEO", "Client Support"],
  },
  {
    title: "DevOps & Micro Frontends",
    description:
      "Managed Kubernetes environments with CI/CD pipelines for micro frontends and distributed services.",
    image: "/images/devops_microfrontends.png",
    tags: ["Kubernetes", "CI/CD", "Micro Frontends", "Azure DevOps", "Docker"],
  },
  {
    title: "Backend & Cloud Functions",
    description:
      "Experience with .NET backend APIs and event-driven Azure Functions for scalable solutions.",
    image: "/images/backend.png",
    tags: ["C#", ".NET", "Azure Functions", "REST APIs", "Serverless"],
  },
  {
    title: "AI-First Applications",
    description:
      "Exploring AI agents and automation-first design to build smarter, adaptive user experiences.",
    image: "/images/ai.png",
    tags: ["AI Agents", "LangChain", "OpenAI", "Next.js", "Prompt Engineering"],
  },
];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Featured Projects I have work
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, i) => (
										<span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
