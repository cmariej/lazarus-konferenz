import { Component, input } from '@angular/core';

import { Button } from '../../../shared/components/button/button';
import { GENERAL_INFO } from '../../../../../public/data/general.data';

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

  readonly home = input(false);

  protected readonly general = GENERAL_INFO;



}