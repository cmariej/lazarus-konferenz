import { Component, inject } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { SiteDataService } from '../../core/data/site-data.service';

@Component({
  selector: 'app-catering',
  imports: [
    Hero,
    Section,
    FeatureCard
  ],
  templateUrl: './catering.html',
  styleUrls: ['./catering.scss']
})
export class Catering {
  private readonly siteData = inject(SiteDataService);
  protected readonly catering = this.siteData.data.catering;
  protected readonly restaurants = this.siteData.data.restaurants;

}
