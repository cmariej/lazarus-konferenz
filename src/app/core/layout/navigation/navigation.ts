import { Component, inject, input } from '@angular/core';

import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { NavigationItem } from '../../../shared/interfaces/navigation-item';
import { SiteDataService } from '../../data/site-data.service';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss']
})
export class Navigation {
  private readonly siteData = inject(SiteDataService);

  readonly items = input.required<NavigationItem[]>();

  readonly mobile = input(false);

  protected readonly ticketUrl = this.siteData.data.general.ticketUrl;

}
