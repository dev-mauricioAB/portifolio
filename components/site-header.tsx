import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"
import { MobileMenu, LocaleSwitcher } from "@/components/site-navigation"
import type { Content } from "@/locales/content"
import type { Locale } from "@/locales/models"

export function SiteHeader({ locale, content, guide = false }: { locale: Locale; content: Content; guide?: boolean }) {
  const base = `/${locale}`
  const links = [
    { href: `${base}#work`, label: content.nav.work },
    { href: `${base}#profile`, label: content.nav.profile },
    { href: `${base}#contact`, label: content.nav.contact },
  ]
  return (
    <header className={`site-header ${guide ? "site-header-guide" : ""}`}>
      <div className="site-container header-inner">
        <BrandLogo locale={locale} />
        <nav className="desktop-nav" aria-label={content.nav.home}>
          {links.map((link) => <Link className="nav-section-link" key={link.href} href={link.href}>{link.label}</Link>)}
          <a className="nav-social" href="https://github.com/dev-mauricioAB" target="_blank" rel="noreferrer">GitHub</a>
          <a className="nav-social" href="https://www.linkedin.com/in/mauricioab-dev/" target="_blank" rel="noreferrer">LinkedIn</a>
          <LocaleSwitcher locale={locale} label={content.nav.language} />
        </nav>
        <MobileMenu locale={locale} content={content} links={links} />
      </div>
    </header>
  )
}
