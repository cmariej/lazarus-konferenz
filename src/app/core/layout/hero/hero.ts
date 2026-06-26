import { Component, input } from '@angular/core';

import { Button } from '../../../shared/components/button/button';

@Component({
  selector: 'app-hero',
  imports: [
    Button
  ],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero {

  readonly title = input.required<string>();

  readonly subtitle = input('');

  readonly image = input('');

  readonly home = input(false);

}