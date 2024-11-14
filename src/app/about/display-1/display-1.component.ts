import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display-1.component.html',
  styleUrls: ['./display-1.component.css']
})
export class Display1Component {


  infoItems = [
    {
      icon: 'https://img.icons8.com/ios-filled/50/8a2be2/hospital.png', // Hospital icon
      number: 25,
      label: 'HOSPITALS'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/50/8a2be2/doctor-male.png', // Doctor icon
      number: 250,
      label: 'DOCTORS'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/50/8a2be2/stethoscope.png', // Medical Specialist icon
      number: 30,
      label: 'MEDICAL SPECIALISTS'
    },
    {
      icon: 'https://img.icons8.com/ios-filled/50/8a2be2/surgery.png', // Surgery icon
      number: 20000,
      label: 'SURGERIES'
    }
  ];

}
