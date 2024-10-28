// circle-card.component.ts
import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-circle-card',
  templateUrl: './circle-card.component.html',
  styleUrls: ['./circle-card.component.scss'],
  animations: [
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],
})
export class CircleCardComponent implements OnInit {
  @HostBinding('class.show') show = false;

  steps = [
    { icon: '/assets/icons/checkup.png', title: 'Checkups', description: 'Find and research top hospitals & destinations' },
    { icon: '/assets/icons/surgery.png', title: 'Surgery', description: 'Request a quote directly through our website' },
    { icon: '/assets/icons/transplant.png', title: 'Transplant', description: 'Based on your criteria, we recommend the best hospitals or providers' },
    { icon: '/assets/icons/cancer.png', title: 'Cancer Treatement', description: 'The hospital/provider will contact you directly to coordinate your treatment' },
    { icon: '/assets/icons/dentist.png', title: 'Dental Care', description: 'Finalize your treatment with the hospital/provider of your choice' },
  ];
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 200);
  }
}