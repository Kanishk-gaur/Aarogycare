import { Component } from '@angular/core';

@Component({
  selector: 'app-ayur',
  templateUrl: './ayur.component.html',
  styleUrls: ['./ayur.component.scss']
})
export class AyurComponent {
  services = [
    {
      title: 'Абхьянга',
      description: 'Массаж всего тела с использованием теплых лекарственных масел для балансировки дош тела',
      imageUrl: 'assets/ayur_img/abhyanga.jpg',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$150,000'
    },
    {
      title: 'Широдхара',
      description: 'Лечебная практика, при которой теплое масло непрерывно льется на лоб',
      imageUrl: 'assets/ayur_img/shirodhara.png',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$1,200'
    },
    {
      title: 'Сведана',
      description: 'Паровая терапия, способствующая потоотделению и выведению токсинов из организма.',
      imageUrl: 'assets/ayur_img/swedana.jpg',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$3,000'
    },
    {
      title: 'Удвартанам',
      description: 'Массаж с использованием сухих травяных порошков для отшелушивания кожи, улучшения кровообращения и уменьшения жировых отложений.',
      imageUrl: 'assets/ayur_img/Udvarth.jpg',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$7,000'
    },
    {
      title: 'Насья',
      description: 'Введение лекарственных масел или травяных составов через нос для очищения и балансировки пазух и мозга.',
      imageUrl: 'assets/ayur_img/nasya.jpg',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$180,000'
    },
    {
      title: 'Расаяна',
      description: 'Омолаживающая терапия, направленная на продление жизни, укрепление иммунитета и жизненной силы.',
      imageUrl: 'assets/ayur_img/rasayana.jpg',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$5,000'
    },
    {
      title: 'Шодхана',
      description: 'Очищающие процедуры, направленные на выведение токсинов из организма.',
      imageUrl: 'assets/ayur_img/shodana.png',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$25,000'
    }
  ];
}
