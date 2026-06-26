import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
  styleUrls: ['./feature-card.scss']
})
export class FeatureCard {

  readonly icon = input.required<string>();

  readonly title = input.required<string>();

  readonly text = input.required<string>();

}