// locales/server.ts
import { createI18nServer } from 'next-international/server'

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  enUS: () => import('./languages/en-US'),
  ptBR: () => import('./languages/pt-BR')
})