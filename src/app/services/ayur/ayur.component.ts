import { Component } from '@angular/core';

@Component({
  selector: 'app-ayur',
  templateUrl: './ayur.component.html',
  styleUrls: ['./ayur.component.scss']
})
export class AyurComponent {
  services = [
   
    {
      title: 'Abhyanga',
      description: 'A full-body massage using warm medicated oils to balance the body doshas',
      imageUrl: 'assets/ayur_img/abhyanga.jpg',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$150,000'
    },
    {
      title: 'Shirodhara',
      description: 'A therapeutic practice where warm medicated oil is poured continuously on the forehead',
      imageUrl: 'assets/ayur_img/shirodhara.png',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$1,200'
    },
    {
      title: 'Swedana',
      description: 'A steam therapy used to induce sweating, helping to release toxins from the body.',
      imageUrl: 'assets/ayur_img/swedana.jpg',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$3,000'
    },
    {
      title: 'Udvarthanam',
      description: 'A dry powder massage using herbal powders to exfoliate the skin, improve circulation, and reduce fat accumulation. ',
      imageUrl: 'assets/ayur_img/Udvarth.jpg',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$7,000'
    },
    {
      title: 'Nasya',
      description: 'The administration of medicated oils or herbal formulations through the nasal passage to cleanse and balance the sinuses and brain.',
      imageUrl: 'assets/ayur_img/nasya.jpg',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$180,000'
    },
    {
      title: 'Rasayana',
      description: 'Rejuvenation therapy focused on promoting longevity, vitality, and immunity.',
      imageUrl: 'assets/ayur_img/rasayana.jpg',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$5,000'
    },
    {
      title: 'Shodhana',
      description: 'Refers to cleansing therapies aimed at purifying the body from toxins.',
      imageUrl: 'assets/ayur_img/shodana.png',
      backgroundUrl: 'assets/ayur_img/bg4.png',
      price: '$25,000'
    }
  ];

}
