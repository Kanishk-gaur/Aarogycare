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

  constructor() {}

  ngOnInit() {
    this.setupScrollListener();
  }

  ngAfterViewInit() {
    console.log('Trigger element:', this.triggerElement);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    console.log('Scroll position:', scrollPosition);
    this.scrollSubject.next(scrollPosition);
  }

  setupScrollListener() {
    this.scrollSubject.pipe(
      debounceTime(100),
      distinctUntilChanged()
    ).subscribe((scrollPosition) => {
      if (this.triggerElement) {
        const triggerPosition = this.triggerElement.nativeElement.offsetTop;
        console.log('Trigger position:', triggerPosition);
        
        if (scrollPosition >= triggerPosition && !this.showCircleCard && !this.isLoading) {
          console.log('Starting loading');
          this.isLoading = true;
          this.loadCircleCardComponent();
        } else if (scrollPosition < triggerPosition && this.showCircleCard) {
          console.log('Hiding circle card');
          this.showCircleCard = false;
          this.unloadCircleCardComponent();
        }
      } else {
        console.log('Trigger element not found');
      }
    });
  }

  async loadCircleCardComponent() {
    if (!this.circleCardComponentRef) {
      const { CircleCardComponent } = await import('./circle-card/circle-card.component');
      this.circleCardComponentRef = this.circleCardContainer.createComponent(CircleCardComponent);
    }
    setTimeout(() => {
      console.log('Showing circle card');
      this.showCircleCard = true;
      this.isLoading = false;
    }, 2000);
  }

  unloadCircleCardComponent() {
    if (this.circleCardComponentRef) {
      this.circleCardComponentRef.destroy();
      this.circleCardComponentRef = null;
    }
  }
}