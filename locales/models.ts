export const LOCALE = {
  EN_US: "en-US",
  PT_BR: "pt-BR",
} as const;

export type Locale = typeof LOCALE[keyof typeof LOCALE];

// Runtime array (useful for loops)
export const LOCALES: Locale[] = Object.values(LOCALE);