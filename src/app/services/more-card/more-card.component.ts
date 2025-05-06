import { Component } from '@angular/core';

@Component({
  selector: 'more-card',
  templateUrl: './more-card.component.html',
  styleUrls: ['./more-card.component.css']
})
export class MoreCardComponent {
  cancerTypes = [
    { name: 'Рак груди', icon: 'fas fa-ribbon' },
    { name: 'Рак шейки матки', icon: 'fas fa-venus' },
    { name: 'Рак желудка', icon: 'fas fa-ribbon' },
    { name: 'Рак лёгких', icon: 'fas fa-lungs' },
    { name: 'Рак яичников', icon: 'fas fa-venus' },
    { name: 'Рак поджелудочной железы', icon: 'fas fa-dna' },
    { name: 'Рак прямой кишки', icon: 'fas fa-procedures' },
  ];
}
