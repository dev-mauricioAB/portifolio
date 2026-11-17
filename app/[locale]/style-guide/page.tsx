import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BrandLogo } from "@/components/brand-logo"
import { ProjectCard, ProfilePanel, SkillGroup } from "@/components/portfolio-components"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getContent } from "@/locales/content"
import type { Locale } from "@/locales/models"

const colors = [
  ["Night Ink", "#15101D"], ["Deep Violet", "#20132C"], ["Mission Pink", "#FF5EA8"],
  ["Sunset Orange", "#FF915D"], ["Checkpoint Yellow", "#FFD45F"], ["Signal Mint", "#8FF7D1"], ["Paper", "#F7F3EF"],
]

export default async function StyleGuide({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const c = getContent(locale)
  return (
    <>
      <SiteHeader locale={locale} content={c} guide />
      <main className="guide-page">
        <section className="guide-hero">
          <Image src="/images/seoul-street.jpg" alt="" fill priority sizes="100vw" className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-disc" aria-hidden="true" />
          <div className="site-container guide-hero-content">
            <p className="eyebrow">{c.guide.label}</p>
            <h1>{c.guide.title}</h1>
            <p>{c.guide.subtitle}</p>
            <Button asChild variant="outline"><Link href={`/${locale}`}>{c.guide.back}<ArrowRight /></Link></Button>
          </div>
        </section>
        <section className="guide-section section-pad">
          <div className="site-container"><p className="eyebrow">01 / Identity</p><h2>{c.guide.identity}</h2>
            <div className="logo-grid"><div><BrandLogo locale={locale} /></div><div><BrandLogo locale={locale} /></div></div>
            <p className="guide-note">{c.guide.logo}</p>
          </div>
        </section>
        <section className="guide-section guide-white section-pad">
          <div className="site-container"><p className="eyebrow">02 / Foundation</p><h2>{c.guide.palette}</h2>
            <div className="color-grid">{colors.map(([name, value]) => <div key={name}><div className="color-swatch" style={{ backgroundColor: value }} /><strong>{name}</strong><span>{value}</span></div>)}</div>
            <div className="gradient-grid"><div>Sunset Action</div><div>Seoul Night</div><div>Signal State</div></div>
          </div>
        </section>
        <section className="guide-section section-pad">
          <div className="site-container"><p className="eyebrow">03 / Foundation</p><h2>{c.guide.typography}</h2>
            <div className="type-grid"><div><span className="eyebrow">{c.guide.display}</span><strong>Bebas Neue</strong><p>Headlines · Numbers · Logo</p></div><div><span className="eyebrow">{c.guide.body}</span><strong>Space Grotesk</strong><p>Body · Navigation · Buttons</p></div></div>
            <div className="type-sample"><span>Display / 144</span><strong>Digital worlds.</strong></div>
            <div className="type-sample"><span>Heading / 88</span><strong>Selected missions</strong></div>
            <div className="type-sample"><span>Title / 34</span><strong>Data command centers</strong></div>
          </div>
        </section>
        <section className="guide-section guide-white section-pad">
          <div className="site-container"><p className="eyebrow">04 / Interactive</p><h2>{c.guide.buttons}</h2>
            <div className="guide-buttons">
              <Button asChild size="lg"><Link href={`/${locale}#work`}>{c.hero.work}<ArrowRight /></Link></Button>
              <Button asChild variant="secondary" size="lg"><a href="mailto:dev.mauricioalezandre@gmail.com">{c.contact.email}<ArrowRight /></a></Button>
              <Button asChild variant="outline"><Link href={`/${locale}#profile`}>{c.hero.profile}</Link></Button>
              <Button asChild variant="link"><a href="https://www.linkedin.com/in/mauricioab-dev/" target="_blank" rel="noreferrer">{c.contact.linkedin}</a></Button>
            </div>
          </div>
        </section>
        <section className="guide-section section-pad">
          <div className="site-container"><p className="eyebrow">05 / Interface</p><h2>{c.guide.components}</h2>
            <div className="guide-components"><ProjectCard project={c.work.projects[0]} index={0} featured={c.work.featured} discuss={c.work.discuss} contactHref={`/${locale}#contact`} /><div className="guide-skill"><SkillGroup skill={c.profile.skills[0]} index={0} /></div><ProfilePanel content={c.profile} /></div>
          </div>
        </section>
        <section className="guide-section guide-white section-pad">
          <div className="site-container"><p className="eyebrow">06 / Foundation</p><h2>{c.guide.spacing}</h2>
            <div className="spacing-list">{[4, 8, 12, 16, 24, 32, 48, 72].map((size) => <div key={size}><span>{size}px</span><i style={{ width: size }} /></div>)}</div>
          </div>
        </section>
        <section className="guide-section section-pad">
          <div className="site-container"><p className="eyebrow">07 / Imagery</p><h2>{c.guide.photography}</h2>
            <div className="guide-photos">{["seoul-street", "seoul-sunset", "seoul-neon"].map((image) => <div key={image}><Image src={`/images/${image}.jpg`} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /></div>)}</div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} content={c} />
    </>
  )
}
