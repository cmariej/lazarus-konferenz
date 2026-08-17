import { Component, inject } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { Timeline } from '../../shared/components/timeline/timeline';
import { SiteDataService } from '../../core/data/site-data.service';

@Component({
  selector: 'app-history',
  imports: [
    Hero,
    Section,
    Timeline
  ],
  templateUrl: './history.html',
  styleUrls: ['./history.scss']
})
export class History {
  private readonly siteData = inject(SiteDataService);
  protected readonly history = this.siteData.data.history;

  title = `${new Date().getFullYear() - 2008} Jahre Lazarus-Konferenz`;

}
