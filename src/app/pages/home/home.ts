import { Component } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { Button } from '../../shared/components/button/button';
import { Faq } from '../../shared/components/faq/faq';

import { 
  HOME_FEATURES, 
  HOME_HIGHLIGHTS, 
  LOCATION
} from '../../data/home.data';
import { FAQ_ITEMS } from '../../data/faq.data';


@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Section,
    FeatureCard,
    Button,
    Faq
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

  protected readonly hero = {
    title: 'Lazarus-Konferenz 2026',
    subtitle: '25.–27. September 2026 • ATLANTIC Hotel Sail City • Bremerhaven',
    image: 'assets/images/hero.jpg'
  };

  protected readonly features = HOME_FEATURES;
  protected readonly highlights = HOME_HIGHLIGHTS;
  protected readonly location = LOCATION;
  protected readonly faq = FAQ_ITEMS;

}