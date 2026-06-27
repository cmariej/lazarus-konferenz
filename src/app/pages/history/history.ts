import { Component } from '@angular/core';

import { Hero } from '../../core/layout/hero/hero';
import { Section } from '../../shared/components/section/section';
import { Timeline } from '../../shared/components/timeline/timeline';
import { HISTORY } from '../../data/history.data';

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

  protected readonly history = HISTORY;

  title = `${new Date().getFullYear() - 2008} Jahre Lazarus-Konferenz`;

}