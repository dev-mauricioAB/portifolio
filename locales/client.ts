// locales/client.ts
"use client"
import { createI18nClient } from 'next-international/client'

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, defineLocale, useCurrentLocale } = createI18nClient({
  'en-US': () => import('./languages/en-US'),
  'pt-BR': () => import('./languages/pt-BR')
})
