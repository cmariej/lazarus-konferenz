import { Component, inject } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { SiteDataService } from '../../core/data/site-data.service';

@Component({
  selector: 'app-location',
  imports: [
    Hero,
    Section
  ],
  templateUrl: './location.html',
  styleUrls: ['./location.scss']
})
export class Location {
  private readonly siteData = inject(SiteDataService);
  protected readonly location = this.siteData.data.location;

}
