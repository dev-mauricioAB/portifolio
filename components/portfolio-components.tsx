import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Content } from "@/locales/content"

export function ProjectCard({ project, index, featured, discuss, contactHref = "#contact" }: { project: Content["work"]["projects"][number]; index: number; featured: string; discuss: string; contactHref?: string }) {
  return (
    <Card className="project-card">
      <div className={`project-image project-image-${index + 1}`}>
        <Image src={project.image} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        <div className="project-color" />
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-featured">{featured}</span>
      </div>
      <CardContent className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-meta">
          <div className="tag-list">{project.tags.map((tag) => <Badge key={tag} variant="outline" className="portfolio-tag">{tag}</Badge>)}</div>
          <a href={contactHref} className="project-contact" aria-label={`${discuss} ${project.title}`}><ArrowRight size={24} aria-hidden="true" /></a>
        </div>
      </CardContent>
    </Card>
  )
}

export function SkillGroup({ skill, index }: { skill: Content["profile"]["skills"][number]; index: number }) {
  return (
    <article className="skill-group">
      <div className="skill-heading"><span className="eyebrow">{skill.label}</span><span className="skill-number">{String(index + 1).padStart(2, "0")}</span></div>
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
      <div className="tag-list">{skill.tags.map((tag) => <Badge key={tag} variant="outline" className="portfolio-tag portfolio-tag-dark">{tag}</Badge>)}</div>
    </article>
  )
}

export function ProfilePanel({ content }: { content: Content["profile"] }) {
  return (
    <div className="profile-panel">
      <div className="panel-top"><span className="eyebrow">{content.panel}</span><span>Profile 01</span></div>
      <div className="panel-total"><strong>16</strong><span>{content.areas}<br />{content.across}</span></div>
      <div className="panel-rule" />
      {content.groups.map((group, index) => <div className="panel-row" key={group}><span>{group}</span><strong>{["08", "06", "02"][index]}</strong></div>)}
      <p>Frontend specialist · Full-stack developer · DevOps enthusiast</p>
    </div>
  )
}
