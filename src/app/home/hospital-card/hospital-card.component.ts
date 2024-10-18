// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

// interface Hospital {
//   id: number;
//   name: string;
//   location: string;
//   imageUrl: string;
// }

// @Component({
//   selector: 'app-hospital-card',
//   templateUrl: './hospital-card.component.html',
//   styleUrls: ['./hospital-card.component.scss']
// })
// export class HospitalCardComponent implements OnInit {


//   currentIndex = 0;
//   itemsPerPage = 4;
//   hoveredIndex: number | null = null;

//   ngOnInit() {
//     this.updateItemsPerPage();
//     window.addEventListener('resize', () => this.updateItemsPerPage());
//   }

// }
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Hospital {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
}

@Component({
  selector: 'app-hospital-card',
  templateUrl: './hospital-card.component.html',
  styleUrls: ['./hospital-card.component.scss']
})
export class HospitalCardComponent implements OnInit {
  hospitals: Hospital[] = [
    { id: 1, name: 'Apollo', location: 'Ahmedabad', imageUrl: '../../assets/apolo.jpeg' },
    { id: 2, name: 'Fortis', location: 'Mumbai', imageUrl: '../../assets/hostpital.jpeg' },
    { id: 3, name: 'AIIMS', location: 'Delhi', imageUrl: '../../assets/hos_1.jpeg' },
    { id: 4, name: 'Max Healthcare', location: 'Chennai', imageUrl: '../../assets/max.jpeg' },
    { id: 5, name: 'Medanta', location: 'Gurugram', imageUrl: '../../assets/hostpital.jpeg' },
    { id: 6, name: 'Narayana Health', location: 'Bangalore', imageUrl: '../../assets/hostpital.jpeg' },
    { id: 7, name: 'Manipal Hospitals', location: 'Pune', imageUrl: '../../assets/hostpital.jpeg' },
    { id: 8, name: 'Columbia Asia', location: 'Kolkata', imageUrl: '../../assets/hostpital.jpeg' },
    { id: 9, name: 'Kokilaben Hospital', location: 'Hyderabad', imageUrl: '../../assets/hostpital.jpeg' },
    { id: 10, name: 'Artemis Hospital', location: 'Jaipur', imageUrl: '../../assets/hostpital.jpeg' }
  ];

  currentIndex = 0;
  itemsPerPage = 4;
  hoveredIndex: number | null = null;
  leftArrowSvg: SafeHtml;
  rightArrowSvg: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.leftArrowSvg = this.sanitizer.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon">
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    `);
    this.rightArrowSvg = this.sanitizer.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon">
        <path d="M9 18l6-6-6-6"/>
      </svg>
    `);
  }

  ngOnInit() {
    this.updateItemsPerPage();
    window.addEventListener('resize', () => this.updateItemsPerPage());
  }

 
  updateItemsPerPage() {
    if (window.innerWidth < 768) {
      this.itemsPerPage = 1;
    } else if (window.innerWidth < 992) {
      this.itemsPerPage = 2;
    } else if (window.innerWidth < 1200) {
      this.itemsPerPage = 3;
    } else {
      this.itemsPerPage = 4;
    }
    this.currentIndex = 0;
  }

  get visibleHospitals() {
    return this.hospitals.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  next() {
    if (this.currentIndex + this.itemsPerPage < this.hospitals.length) {
      this.currentIndex += this.itemsPerPage;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemsPerPage;
    }
  }

  setHoveredIndex(index: number | null) {
    this.hoveredIndex = index;
  }

  canGoNext(): boolean {
    return this.currentIndex + this.itemsPerPage < this.hospitals.length;
  }

  canGoPrevious(): boolean {
    return this.currentIndex > 0;
  }
}