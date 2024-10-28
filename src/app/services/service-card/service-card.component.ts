import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  services = [
    {
      title: 'Cosmetic Surgery',
      description: 'Enhance your appearance with expert cosmetic surgery.',
      imageUrl: 'assets/moder_ser/cosm.jpeg',
      price: '$2,500'
    },
    {
      title: 'Heart Transplant',
      description: 'Life-saving heart transplant with world-class care.',
      imageUrl: 'assets/moder_ser/heart.jpeg',
      price: '$150,000'
    },
    {
      title: 'Dental Implants',
      description: 'Get the perfect smile with our advanced dental implants.',
      imageUrl: 'assets/moder_ser/dent.jpeg',
      price: '$1,200'
    },
    {
      title: 'Hair Transplant',
      description: 'Restore your hairline with natural-looking hair transplants.',
      imageUrl: 'https://example.com/images/hair-transplant.jpg',
      price: '$3,000'
    },
    {
      title: 'Knee Replacement',
      description: 'Regain mobility with our effective knee replacement surgeries.',
      imageUrl: 'https://example.com/images/knee-replacement.jpg',
      price: '$7,000'
    },
    {
      title: 'Eye Surgery (LASIK)',
      description: 'Get crystal-clear vision with our advanced LASIK procedures.',
      imageUrl: 'https://example.com/images/lasik.jpg',
      price: '$2,000'
    },
    {
      title: 'Liver Transplant',
      description: 'World-class liver transplant services with minimal recovery time.',
      imageUrl: 'https://example.com/images/liver-transplant.jpg',
      price: '$180,000'
    },
    {
      title: 'Breast Augmentation',
      description: 'Achieve your desired look with breast augmentation surgery.',
      imageUrl: 'https://example.com/images/breast-augmentation.jpg',
      price: '$5,000'
    },
    {
      title: 'Spinal Surgery',
      description: 'Get relief from chronic back pain with expert spinal surgery.',
      imageUrl: 'https://example.com/images/spinal-surgery.jpg',
      price: '$25,000'
    },
    {
      title: 'Fertility Treatment (IVF)',
      description: 'Achieve parenthood with our advanced fertility treatments.',
      imageUrl: 'https://example.com/images/ivf.jpg',
      price: '$10,000'
    }
  ];
  
}
