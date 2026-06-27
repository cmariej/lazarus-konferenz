import { Component } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { Button } from '../../shared/components/button/button';
import { Faq } from '../../shared/components/faq/faq';
import { GENERAL_INFO, HOME_FEATURES, HOME_HIGHLIGHTS } from '../../data/general.data';
import { LOCATION } from '../../data/location.data';
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

  protected readonly general = GENERAL_INFO;
  protected readonly features = HOME_FEATURES;
  protected readonly highlights = HOME_HIGHLIGHTS;
  protected readonly location = LOCATION;
  protected readonly faq = FAQ_ITEMS;

}