import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly open = signal(false);

  protected readonly links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Giør' },
    { path: '/music', label: 'Music' },
    { path: '/tour', label: 'Tour' },
    { path: '/courses', label: 'Formación' },
    { path: '/booking', label: 'Booking' },
  ];

  toggle(): void {
    this.open.update((v) => !v);
  }

  close(): void {
    this.open.set(false);
  }
}
