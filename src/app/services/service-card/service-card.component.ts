import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  services = [
    {
      title: 'Cosmetic Surgery',
      description: 'Enhance your appearance with expert cosmetic surgery.',
      imageUrl: 'assets/moder_ser/cosm-Photoroom.jpg',
      price: '$2,500'
    },
    {
      title: 'Heart Transplant',
      description: 'Life-saving heart transplant with world-class care.',
      imageUrl: 'assets/moder_ser/heart-Photoroom.jpg',
      price: '$150,000'
    },
    {
      title: 'Dental Implants',
      description: 'Get the perfect smile with our advanced dental implants.',
      imageUrl: 'assets/moder_ser/dent-Photoroom.jpg',
      price: '$1,200'
    },
    {
      title: 'Hair Transplant',
      description: 'Restore your hairline with natural-looking hair transplants.',
      imageUrl: 'assets/service_img/hair_t.jpg',
      price: '$3,000'
    },
    {
      title: 'Knee Replacement',
      description: 'Regain mobility with our effective knee replacement surgeries.',
      imageUrl: 'assets/moder_ser/knee-Photoroom.jpg',
      price: '$7,000'
    },
    {
      title: 'Eye Surgery (LASIK)',
      description: 'Get crystal-clear vision with our advanced LASIK procedures.',
      imageUrl: 'assets/moder_ser/eye-Photoroom.jpg',
      price: '$2,000'
    },
    {
      title: 'Liver Transplant',
      description: 'World-class liver transplant services with minimal recovery time.',
      imageUrl: 'assets/moder_ser/liver-Photoroom.jpg',
      price: '$180,000'
    },
    {
      title: 'Breast Augmentation',
      description: 'Achieve your desired look with breast augmentation surgery.',
      imageUrl: 'assets/moder_ser/brest-Photoroom.jpg',
      price: '$5,000'
    }
  ];
  
  
}
