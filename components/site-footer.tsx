import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"
import type { Content } from "@/locales/content"
import type { Locale } from "@/locales/models"

export function SiteFooter({ locale, content }: { locale: Locale; content: Content }) {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <BrandLogo locale={locale} />
        <p>{content.footer.location}</p>
        <nav aria-label={content.nav.contact}>
          <a href="https://github.com/dev-mauricioAB" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mauricioab-dev/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://medium.com/@dev-mauricioalexandre" target="_blank" rel="noreferrer">Medium</a>
          <Link href={`/${locale}/style-guide`}>{content.footer.reference}</Link>
          <a href={locale === "pt-BR" ? "/Profile_PTBR.pdf" : "/Profile_EN.pdf"}>{content.nav.resume}</a>
        </nav>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
