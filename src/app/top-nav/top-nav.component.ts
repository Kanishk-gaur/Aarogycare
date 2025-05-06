import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var bootstrap: any; // Объявить bootstrap как тип any

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, OnDestroy {
  navItems = [
    { path: 'home', label: 'Главная' },
    { path: 'service-card', label: 'Услуги' },
    { path: 'about', label: 'О нас' },
    { path: 'contact', label: 'Контакты' }
  ];

  activeLink: string = 'home';
  isHomeRoute: boolean = true;
  private bsCollapse: any;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  private intersectionObserver: IntersectionObserver | null = null;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.activeLink = event.url.slice(1) || 'home';
      this.isHomeRoute = (event.url === '/home' || event.url === '/');
      this.closeMenu();
      this.initializeVideoObserver();
    });
  }

  ngOnInit() {
    // Инициализация Bootstrap collapse после небольшой задержки для готовности DOM
    this.initializeBootstrapCollapse();

    // Обработка кнопки "назад"
    window.addEventListener('popstate', () => {
      this.closeMenu();
    });
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  closeMenu() {
    if (this.bsCollapse && typeof this.bsCollapse.hide === 'function') {
      this.bsCollapse.hide();
    }
  }

  private initializeBootstrapCollapse() {
    setTimeout(() => {
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse && typeof bootstrap !== 'undefined') {
        this.bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
      }
    }, 0);
  }

  private initializeVideoObserver() {
    if (this.videoPlayer && this.isHomeRoute) {
      if (this.intersectionObserver) {
        this.intersectionObserver.disconnect();
      }

      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.videoPlayer.nativeElement.play().catch((error: Error) => {
                console.warn('Автозапуск был предотвращен:', error.message);
              });
            } else {
              this.videoPlayer.nativeElement.pause();
            }
          });
        },
        { threshold: 0.5 } // Воспроизведение видео, когда хотя бы 50% его видны
      );
      this.intersectionObserver.observe(this.videoPlayer.nativeElement);
    }
  }
}
