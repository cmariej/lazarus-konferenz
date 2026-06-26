import { Component, input } from '@angular/core';

import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { NavigationItem } from '../../../shared/interfaces/navigation-item';

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

  readonly items = input.required<NavigationItem[]>();

  readonly mobile = input(false);

}