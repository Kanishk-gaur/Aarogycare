import { Component } from '@angular/core';

@Component({
  selector: 'more-card',
  templateUrl: './more-card.component.html',
  styleUrls: ['./more-card.component.css']
})
export class MoreCardComponent {
  cancerTypes = [
    { name: 'Breast Cancer', icon: 'fas fa-ribbon' },
    { name: 'Cervical Cancer', icon: 'fas fa-venus' },
    { name: 'Stomach Cancer', icon: 'fas fa-ribbon' },
    { name: 'Lung Cancer', icon: 'fas fa-lungs' },
    { name: 'Ovarian Cancer', icon: 'fas fa-venus' },
    { name: 'Pancreatic Cancer', icon: 'fas fa-dna' },
    { name: 'Rectal Cancer', icon: 'fas fa-procedures' },
  ];

}
