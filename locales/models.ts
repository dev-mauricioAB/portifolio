export const LOCALE = {
  EN_US: "en-US",
  PT_BR: "pt-BR",
} as const;

export type Locale = typeof LOCALE[keyof typeof LOCALE];

// Runtime array (useful for loops)
export const LOCALES: Locale[] = Object.values(LOCALE);

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  path?: string;
  disabled?: boolean;
}

export type TranslationEntity = {
  hero: {
    subtitle: string;
  },
  projects: {
    title: string;
    list: Project[];
  },
  skills: {
    technical: string;
    softSkills: {
      title: string;
      list: { skill: string; level: number }[];
    };
  },
  contact: {
    title: string;
    subtitle: string;
    buttonLabels: {
      email: string;
      resume: string;
    }
  },
};
