// home.component.ts
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, ViewContainerRef, ComponentRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('trigger') triggerElement!: ElementRef;
  @ViewChild('circleCardContainer', { read: ViewContainerRef }) circleCardContainer!: ViewContainerRef;
  
  showCircleCard = false;
  isLoading = false;
  private scrollSubject = new BehaviorSubject<number>(0);
  private circleCardComponentRef: ComponentRef<any> | null = null;
  viewHeight: string = '100vh';

  constructor() {
    // Initial viewport height calculation
    this.calculateViewHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateViewHeight();
  }

  private calculateViewHeight() {
    // Handle mobile viewport height issues
    this.viewHeight = `${window.innerHeight}px`;
  }

  ngOnInit() {
    this.setupScrollListener();
  }

  ngAfterViewInit() {
    console.log('Trigger element:', this.triggerElement);
    // Initial check for elements in viewport
    this.checkElementsInView();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    this.scrollSubject.next(scrollPosition);
    this.checkElementsInView();
  }

  private checkElementsInView() {
    if (this.triggerElement) {
      const rect = this.triggerElement.nativeElement.getBoundingClientRect();
      const triggerVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      if (triggerVisible && !this.showCircleCard && !this.isLoading) {
        console.log('Trigger element in view');
        this.isLoading = true;
        this.loadCircleCardComponent();
      } else if (!triggerVisible && this.showCircleCard) {
        console.log('Trigger element out of view');
        this.showCircleCard = false;
        this.unloadCircleCardComponent();
      }
    }
  }

  setupScrollListener() {
    this.scrollSubject.pipe(
      debounceTime(100),
      distinctUntilChanged()
    ).subscribe(() => {
      this.checkElementsInView();
    });
  }

  async loadCircleCardComponent() {
    if (!this.circleCardComponentRef) {
      try {
        const { CircleCardComponent } = await import('./circle-card/circle-card.component');
        this.circleCardComponentRef = this.circleCardContainer.createComponent(CircleCardComponent);
        
        setTimeout(() => {
          console.log('Showing circle card');
          this.showCircleCard = true;
          this.isLoading = false;
        }, 1000);
      } catch (error) {
        console.error('Error loading circle card component:', error);
        this.isLoading = false;
      }
    }
  }

  unloadCircleCardComponent() {
    if (this.circleCardComponentRef) {
      this.circleCardComponentRef.destroy();
      this.circleCardComponentRef = null;
    }
  }
}
