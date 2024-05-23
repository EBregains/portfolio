import Spain from '@/components/flags/Spain.astro';
import UnitedStates from '@/components/flags/UnitedStates.astro';
import Norway from '@/components/flags/Norway.astro';
import Deutschland from '@/components/flags/Deutschland.astro';

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof Spain }
> = {
  de: {
    code: 'de',
    name: 'Deutsch',
    flag: Deutschland,
  },
  no: {
    code: 'no',
    name: 'Norsk',
    flag: Norway,
  },
  en: {
    code: 'en',
    name: 'English',
    flag: UnitedStates,
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: Spain,
  },
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
  es: {
    'nav.experiencia': 'Experiencia',
    'nav.proyectos': 'Proyectos',
    'nav.sobre-mi': 'Sobre mí',
    'nav.contacto': 'Contacto',
  },
  en: {
    'nav.experiencia': 'Experience',
    'nav.proyectos': 'Projects',
    'nav.sobre-mi': 'About me',
    'nav.contacto': 'Contact me',
  },
  no: {
    'nav.experiencia': 'Erfaring',
    'nav.proyectos': 'Prosjekter',
    'nav.sobre-mi': 'Om meg',
    'nav.contacto': 'Kontakto',
  },
  de: {
    'nav.experiencia': 'Erfahrung',
    'nav.proyectos': 'Projekte',
    'nav.sobre-mi': 'Über mich',
    'nav.contacto': 'Kontakt',
  },
} as const;