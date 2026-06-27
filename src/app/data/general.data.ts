import { Feature } from '../shared/interfaces/feature';
import { LOCATION } from './location.data';

export const GENERAL_INFO = {
    title: 'Lazarus-Konferenz',
    date: '18.–20. September',
    year: '2026'
} 

// Features and highlights for the home page

export const HOME_FEATURES: Feature[] = [
  {
    icon: '📅',
    title: GENERAL_INFO.date,
    text: 'Drei Tage voller Vorträge und Workshops.'
  },
  {
    icon: '📍',
    title: LOCATION.location,
    text: LOCATION.city
  },
  {
    icon: '👥',
    title: 'Community',
    text: 'Treffe Entwickler aus ganz Europa.'
  },
  {
    icon: '🎤',
    title: 'Praxis',
    text: 'Spannende Vorträge und Workshops.'
  }
];

export const HOME_HIGHLIGHTS: Feature[] = [
  {
    icon: '💻',
    title: 'Lazarus',
    text: 'Neuigkeiten und Best Practices rund um Lazarus.'
  },
  {
    icon: '⚡',
    title: 'Free Pascal',
    text: 'Moderne Entwicklungen im Compiler und der Sprache.'
  },
  {
    icon: '🤝',
    title: 'Networking',
    text: 'Treffe Entwickler, Firmen und Open-Source-Projekte.'
  },
  {
    icon: '🚀',
    title: 'Workshops',
    text: 'Praxisnahe Sessions zum Mitmachen.'
  }
];

