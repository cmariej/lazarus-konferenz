import { Component, inject } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { Button } from '../../shared/components/button/button';
import { Faq } from '../../shared/components/faq/faq';
import { SiteDataService } from '../../core/data/site-data.service';


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
  private readonly siteData = inject(SiteDataService);
  private readonly data = this.siteData.data;

  protected readonly general = this.data.general;
  protected readonly features = this.data.homeFeatures;
  protected readonly highlights = this.data.homeHighlights;
  protected readonly location = this.data.location;
  protected readonly faq = this.data.faq;

}
