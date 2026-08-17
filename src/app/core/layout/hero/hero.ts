import { Component, inject, input } from '@angular/core';

import { Button } from '../../../shared/components/button/button';
import { SiteDataService } from '../../data/site-data.service';

@Component({
  selector: 'app-hero',
  imports: [
    Button
  ],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero {
  private readonly siteData = inject(SiteDataService);

  readonly title = input.required<string>();

  readonly subtitle = input('');

  readonly home = input(false);

  protected readonly general = this.siteData.data.general;

}
