import { Component } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-display',
  templateUrl: './display-1.component.html',
  styleUrls: ['./display-1.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        query('.card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class Display1Component {
  infoItems = [
    {
      icon: 'https://img.icons8.com/ios-filled/50/8a2be2/hospital.png',
      number: 25,
      label: 'HOSPITALS'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/50/8a2be2/doctor-male.png',
      number: 250,
      label: 'DOCTORS'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/50/8a2be2/stethoscope.png',
      number: 30,
      label: 'MEDICAL SPECIALISTS'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/50/8a2be2/surgery.png',
      number: 2000,
      label: 'SURGERIES'
    }
  ];
}
