import Link from "next/link"
import type { Locale } from "@/locales/models"

export function BrandLogo({ locale }: { locale: Locale }) {
  return <Link href={`/${locale}`} className="brand-logo" aria-label="M/AB — Home">M<span>/</span>AB</Link>
}
