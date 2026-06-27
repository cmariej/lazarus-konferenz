import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  signal
} from '@angular/core';

import {
  NavigationEnd,
  Router,
  RouterLink
} from '@angular/router';

import { filter, Subscription } from 'rxjs';

import { Navigation } from '../navigation/navigation';
import { GENERAL_INFO } from '../../../data/general.data';
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
export class Header implements OnInit, OnDestroy {

  protected readonly general = GENERAL_INFO;

  protected readonly navigation = NAVIGATION;

  protected readonly mobileMenuOpen = signal(false);

  protected readonly scrolled = signal(false);

  private navigationSubscription?: Subscription;

  constructor(
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {

    this.navigationSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {

        this.mobileMenuOpen.set(false);

      });

  }

  ngOnDestroy(): void {

    this.navigationSubscription?.unsubscribe();

  }

  @HostListener('window:scroll')
  protected onScroll(): void {

    this.scrolled.set(window.scrollY > 20);

  }

  protected toggleMenu(): void {

    this.mobileMenuOpen.update(open => !open);

  }

  protected closeMenu(): void {

    this.mobileMenuOpen.set(false);

  }

}