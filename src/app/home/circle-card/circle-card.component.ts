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
    { icon: '/assets/icons/checkup.png', title: 'Обследования', description: 'Найдите и изучите лучшие больницы и направления' },
    { icon: '/assets/icons/surgery.png', title: 'Хирургия', description: 'Запросите цену напрямую через наш сайт' },
    { icon: '/assets/icons/transplant.png', title: 'Трансплантация', description: 'Мы рекомендуем лучшие клиники по вашим критериям' },
    { icon: '/assets/icons/cancer.png', title: 'Лечение рака', description: 'Клиника/врач свяжется с вами для организации лечения' },
    { icon: '/assets/icons/ivf.png', title: 'ЭКО (IVF)', description: 'Самое популярное и доступное направление для ЭКО' },
  ];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 200);
  }
}
