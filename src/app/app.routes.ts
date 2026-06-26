import { Routes } from '@angular/router';
import { Imprint } from './pages/imprint/imprint';
import { Privacy } from './pages/privacy/privacy';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'programm',
    loadComponent: () =>
      import('./pages/program/program').then(m => m.Program)
  },
  {
    path: 'veranstaltungsort',
    loadComponent: () =>
      import('./pages/location/location').then(m => m.Location)
  },
  {
    path: 'anreise',
    loadComponent: () =>
      import('./pages/travel/travel').then(m => m.Travel)
  },
  {
    path: 'unterkuenfte',
    loadComponent: () =>
      import('./pages/accommodation/accommodation').then(m => m.Accommodation)
  },
  {
    path: 'geschichte',
    loadComponent: () =>
      import('./pages/history/history').then(m => m.History)
  },
  {
    path: 'verpflegung',
    loadComponent: () =>
      import('./pages/catering/catering').then(m => m.Catering)
  },
  {
    path: 'impressum',
        component: Imprint
  },
  {
    path: 'datenschutz',
    component: Privacy
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then(m => m.NotFound)
  }
];