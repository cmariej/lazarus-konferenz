import { Component, inject } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { HotelCard } from '../../shared/components/hotel-card/hotel-card';
import { SiteDataService } from '../../core/data/site-data.service';


@Component({
  selector: 'app-accommodation',
  imports: [
    Hero,
    Section,
    HotelCard
  ],
  templateUrl: './accommodation.html',
  styleUrls: ['./accommodation.scss']
})
export class Accommodation {
  private readonly siteData = inject(SiteDataService);
  protected readonly hotels = this.siteData.data.hotels;

}
