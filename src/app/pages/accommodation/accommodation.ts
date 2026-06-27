import { Component } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { HotelCard } from '../../shared/components/hotel-card/hotel-card';
import { HOTELS } from '../../../../public/data/accomodation.data';


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

  protected readonly hotels = HOTELS;

}