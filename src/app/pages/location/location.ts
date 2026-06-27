import { Component } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { LOCATION } from '../../data/location.data';

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

  protected readonly location = LOCATION;

}