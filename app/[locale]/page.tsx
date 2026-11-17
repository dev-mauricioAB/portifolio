import Image from "next/image"
import { ArrowDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard, ProfilePanel, SkillGroup } from "@/components/portfolio-components"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getContent } from "@/locales/content"
import type { Locale } from "@/locales/models"

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const c = getContent(locale)
  return (
    <>
      <main>
      <div className="hero">
        <Image src="/images/seoul-street.jpg" alt="" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-disc" aria-hidden="true" />
        <SiteHeader locale={locale} content={c} />
          <section className="site-container hero-content">
            <p className="eyebrow hero-label"><span />{c.hero.label}</p>
            <h1>{c.hero.first}<br /><span>{c.hero.second}</span></h1>
            <p className="hero-description">{c.hero.description}</p>
            <div className="hero-actions">
              <Button asChild size="lg"><a href="#work">{c.hero.work}<ArrowRight /></a></Button>
              <Button asChild variant="link"><a href="#profile">{c.hero.profile}</a></Button>
            </div>
          </section>
          <a href="#work" className="scroll-cue" aria-label={c.hero.scroll}><ArrowDown size={16} /></a>
      </div>
        <section id="work" className="work-section section-pad">
          <div className="site-container">
            <div className="section-intro">
              <div><p className="eyebrow">{c.work.label}</p><h2>{c.work.heading}</h2></div>
              <p>{c.work.description}</p>
            </div>
            <div className="project-grid">{c.work.projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} featured={c.work.featured} discuss={c.work.discuss} />)}</div>
          </div>
        </section>
        <section id="profile" className="profile-section section-pad">
          <div className="site-container">
            <div className="profile-intro">
              <div>
                <p className="eyebrow">{c.profile.label}</p>
                <h2>{c.profile.heading}</h2>
                <p className="profile-description">{c.profile.description}</p>
                <div className="profile-stats">{c.profile.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
              </div>
              <ProfilePanel content={c.profile} />
            </div>
            <div className="skill-grid">{c.profile.skills.map((skill, index) => <SkillGroup key={skill.label} skill={skill} index={index} />)}</div>
          </div>
        </section>
        <section id="contact" className="contact-section section-pad">
          <div className="contact-disc" aria-hidden="true" />
          <div className="site-container contact-inner">
            <p className="eyebrow">{c.contact.label}</p>
            <h2>{c.contact.first}<br /><span>{c.contact.second}</span></h2>
            <p>{c.contact.description}</p>
            <div className="contact-actions">
              <Button asChild variant="secondary" size="lg"><a href="mailto:dev.mauricioalezandre@gmail.com">{c.contact.email}<ArrowRight /></a></Button>
              <Button asChild variant="link" className="decoration-white/55"><a href="https://www.linkedin.com/in/mauricioab-dev/" target="_blank" rel="noreferrer">{c.contact.linkedin}</a></Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} content={c} />
    </>
  )
}
