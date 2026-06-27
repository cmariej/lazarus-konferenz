import { Component } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';

import { TRAVEL } from '../../../../public/data/travel.data';

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

  protected readonly travel = TRAVEL;

}