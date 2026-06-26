import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  imports: [],
  templateUrl: './hotel-card.html',
  styleUrls: ['./hotel-card.scss']
})
export class HotelCard {

  readonly name = input.required<string>();

  readonly description = input.required<string>();

  readonly image = input.required<string>();

  readonly distance = input.required<string>();

  readonly website = input.required<string>();

}