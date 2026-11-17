import type { Metadata } from "next"
import { Bebas_Neue, Space_Grotesk } from "next/font/google"
import { notFound } from "next/navigation"
import { LOCALES, type Locale } from "@/locales/models"
import "./globals.css"

const display = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-display" })
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" })

export const metadata: Metadata = {
  metadataBase: new URL("https://portifolio-ecru-theta.vercel.app"),
  title: "Maurício Alexandre Barroso — Developer",
  description: "Portfolio of Maurício Alexandre Barroso, full-stack developer and frontend specialist.",
}

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!LOCALES.includes(locale as Locale)) notFound()

  return (
    <html lang={locale}>
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  )
}
