import { Component } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';

@Component({
  selector: 'app-privacy',
  imports: [
    Hero
  ],
  templateUrl: './privacy.html',
  styleUrls: ['./privacy.scss']
})
export class Privacy {
}