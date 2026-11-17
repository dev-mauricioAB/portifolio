"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { Content } from "@/locales/content"
import type { Locale } from "@/locales/models"

export function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname()
  const target = locale === "en-US" ? "pt-BR" : "en-US"
  const href = pathname.replace(/^\/(en-US|pt-BR)(?=\/|$)/, `/${target}`)
  return <Link className="locale-switch" href={href} aria-label={`${label}: ${target}`} lang={target}>{target === "pt-BR" ? "PT" : "EN"}</Link>
}

export function MobileMenu({ locale, content, links }: { locale: Locale; content: Content; links: { href: string; label: string }[] }) {
  return (
    <div className="mobile-nav">
      <LocaleSwitcher locale={locale} label={content.nav.language} />
      <Sheet>
        <SheetTrigger asChild><Button variant="ghost" size="icon" aria-label={content.nav.menu}><Menu /></Button></SheetTrigger>
        <SheetContent aria-describedby={undefined}>
          <SheetTitle className="sheet-title">M<span>/</span>AB</SheetTitle>
          <nav className="sheet-links" aria-label={content.nav.menu}>
            {links.map((link) => <SheetClose asChild key={link.href}><Link href={link.href}>{link.label}</Link></SheetClose>)}
            <SheetClose asChild><Link href={`/${locale}/style-guide`}>{content.nav.styleGuide}</Link></SheetClose>
            <a href={locale === "pt-BR" ? "/Profile_PTBR.pdf" : "/Profile_EN.pdf"}>{content.nav.resume}</a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
