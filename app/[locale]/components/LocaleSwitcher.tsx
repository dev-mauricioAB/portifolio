"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, Locale } from "@/locales/models";

interface Props {
  currentLocale: Locale;
}

export default function LocaleSwitcher({ currentLocale }: Props) {
  const pathname = usePathname();

  const getLocalizedPath = (locale: Locale): string => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || "/";
  };

  return (
    <div className="flex gap-2">
      {LOCALES.map((locale) => (
        <Link
          key={locale}
          href={getLocalizedPath(locale)}
          className={`px-3 py-2 rounded hover:brightness-75 transition-all ${
            locale === currentLocale ? "bg-purple-600" : "bg-gray-200"
          }`}
        >
          <Image
            src={`/flags/${locale}.svg`}
            alt={locale}
            width={0}
            height={0}
            className="rounded-sm size-6"
            priority={true}
          />
        </Link>
      ))}
    </div>
  );
}
