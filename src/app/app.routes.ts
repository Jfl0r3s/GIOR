import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'GIØR — Liberate Through Sound',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'GIØR — El artista',
  },
  {
    path: 'music',
    loadComponent: () => import('./pages/music/music').then((m) => m.Music),
    title: 'GIØR — Music / Sets',
  },
  {
    path: 'tour',
    loadComponent: () => import('./pages/tour/tour').then((m) => m.Tour),
    title: 'GIØR — Tour / Media',
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/courses').then((m) => m.Courses),
    title: 'GIØR — Formación',
  },
  {
    path: 'booking',
    loadComponent: () => import('./pages/booking/booking').then((m) => m.Booking),
    title: 'GIØR — Booking / Contacto',
  },
  { path: '**', redirectTo: '' },
];
