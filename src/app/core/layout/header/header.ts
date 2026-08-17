import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  inject,
  signal
} from '@angular/core';

import {
  NavigationEnd,
  Router,
  RouterLink
} from '@angular/router';

import { filter, Subscription } from 'rxjs';

import { Navigation } from '../navigation/navigation';
import { SiteDataService } from '../../data/site-data.service';

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
  private readonly siteData = inject(SiteDataService);

  protected readonly general = this.siteData.data.general;

  protected readonly navigation = this.siteData.data.navigation;

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
