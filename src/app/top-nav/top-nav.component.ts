import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  navItems = [
    { path: 'home', label: 'Home' },
    { path: 'projects', label: 'Projects' },
    { path: 'services', label: 'Services' },
    { path: 'about', label: 'About' },
    { path: 'blog', label: 'Blog' },
    { path: 'contact', label: 'Contact' }
  ];

  activeLink: string = 'home';
  isHomeRoute: boolean = true;  // Track if the current route is home

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.activeLink = event.url.slice(1) || 'home';
      
      // Check if the current route is 'home'
      this.isHomeRoute = (event.url === '/home' || event.url === '/');
    });
  }
}
