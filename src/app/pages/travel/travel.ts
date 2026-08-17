import { Component, inject } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { SiteDataService } from '../../core/data/site-data.service';

@Component({
  selector: 'app-travel',
  imports: [
    Hero,
    Section,
    FeatureCard
  ],
  templateUrl: './travel.html',
  styleUrls: ['./travel.scss']
})
export class Travel {
  private readonly siteData = inject(SiteDataService);
  protected readonly travel = this.siteData.data.travel;
  protected readonly location = this.siteData.data.location;

}
