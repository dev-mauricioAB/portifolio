import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactElement } from "react";
import { Locale } from "@/locales/models";
import LocaleSwitcher from "./components/LocaleSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portifolio-ecru-theta.vercel.app/"), // 👈 change to your production domain
  title: "Maurício Alexandre Barroso - Frontend Developer",
  description:
    "Welcome to my portfolio! I am a passionate frontend developer specializing in creating beautiful, responsive, and user-centric web applications. With expertise in modern JavaScript frameworks and UI/UX principles, I transform designs into seamless interactive experiences.",
  keywords: [
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "UI/UX",
    "Responsive Design",
    "Web Animation",
    "Modern Web Development",
    "CSS Expert",
    "Performance Optimization",
    "Web Accessibility",
    "Component Design",
    "Maurício Alexandre Barroso",
  ],
  authors: [{ name: "Maurício Alexandre Barroso" }],
  creator: "Maurício Alexandre Barroso",
  openGraph: {
    title: "Maurício Alexandre Barroso - Frontend Developer Portfolio",
    description:
      "Passionate frontend developer crafting beautiful and interactive web experiences. Explore my projects and frontend development expertise.",
    url: "https://your-domain.com",
    siteName: "Maurício Alexandre Barroso - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maurício Alexandre Barroso - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maurício Alexandre Barroso - Frontend Developer",
    description:
      "Passionate frontend developer crafting beautiful and interactive web experiences. Explore my projects and frontend development expertise.",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function LocaleLayout({
  params,
  children,
}: {
  params: Promise<{ locale: Locale }>;
  children: ReactElement;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="p-4 fixed z-10">
          <LocaleSwitcher currentLocale={locale} />
        </nav>
        {children}
      </body>
    </html>
  );
}
