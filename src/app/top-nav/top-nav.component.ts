// top-nav.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var bootstrap: any; // Declare bootstrap as any type

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  navItems = [
    { path: 'home', label: 'Home' },
    // { path: 'projects', label: 'Projects' },
    { path: 'services', label: 'Services' },
    { path: 'about', label: 'About' },
    // { path: 'blog', label: 'Blog' },
    { path: 'contact', label: 'Contact' }
  ];

  activeLink: string = 'home';
  isHomeRoute: boolean = true;
  private bsCollapse: any;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.activeLink = event.url.slice(1) || 'home';
      this.isHomeRoute = (event.url === '/home' || event.url === '/');
      this.closeMenu();
    });
  }

  ngOnInit() {
    // Initialize Bootstrap collapse after a short delay to ensure DOM is ready
    setTimeout(() => {
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse && typeof bootstrap !== 'undefined') {
        this.bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
      }
    }, 0);

    // Handle back button
    window.addEventListener('popstate', () => {
      this.closeMenu();
    });
  }

  closeMenu() {
    if (this.bsCollapse && typeof this.bsCollapse.hide === 'function') {
      this.bsCollapse.hide();
    }
  }
}