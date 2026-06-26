import { Component } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';

import {
  CATERING,
  RESTAURANTS
} from '../../data/catering.data';

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

  protected readonly catering = CATERING;

  protected readonly restaurants = RESTAURANTS;

}