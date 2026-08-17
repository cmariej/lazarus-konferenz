import { FaqItem } from './faq-item';
import { Feature } from './feature';
import { Hotel } from './hotel';
import { NavigationItem } from './navigation-item';
import { ScheduleItem } from './schedule-item';

export interface GeneralInfo {
  title: string;
  date: string;
  year: string;
  ticketUrl: string;
}

export interface LocationInfo {
  location: string;
  city: string;
  address: string;
  train: string;
  publicTransport: string;
  shortDescription: string;
  longDescription: string;
  image: string;
}

export interface Restaurant {
  name: string;
  distance: string;
}

export interface HistoryItem {
  year: string;
  title: string;
  text: string;
  image: string;
}

export interface SiteData {
  general: GeneralInfo;
  homeFeatures: Feature[];
  homeHighlights: Feature[];
  location: LocationInfo;
  navigation: NavigationItem[];
  program: ScheduleItem[];
  travel: Feature[];
  catering: Feature[];
  restaurants: Restaurant[];
  hotels: Hotel[];
  faq: FaqItem[];
  history: HistoryItem[];
}
