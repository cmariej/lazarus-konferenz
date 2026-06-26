import {
  Component,
  HostListener,
  signal
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { Navigation } from '../navigation/navigation';
import { NAVIGATION } from '../../../data/navigation';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    Navigation
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {

  protected readonly navigation = NAVIGATION;

  protected readonly mobileMenuOpen = signal(false);

  protected readonly scrolled = signal(false);

  @HostListener('window:scroll')
  protected onScroll(): void {

    this.scrolled.set(window.scrollY > 20);

  }

  protected toggleMenu(): void {

    this.mobileMenuOpen.update(value => !value);

  }

  protected closeMenu(): void {

    this.mobileMenuOpen.set(false);

  }

}