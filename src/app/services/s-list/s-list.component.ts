import { Component } from '@angular/core';

@Component({
  selector: 's-list',
  templateUrl: './s-list.component.html',
  styleUrls: ['./s-list.component.css']
})
export class SListComponent {
  services = [
    { title: 'Medical Opinion and Cost Estimations', description: 'Expert opinions and cost estimates.', icon: 'fas fa-notes-medical' },
    { title: 'Pre-Travel Consultations', description: 'Understand your procedure before traveling.', icon: 'fas fa-comments' },
    { title: 'Visa Assistance', description: 'Complete medical visa assistance.', icon: 'fas fa-passport' },
    { title: 'Money Exchange', description: 'Convenient currency exchange services in your city.', icon: 'fas fa-exchange-alt' },
    { title: 'Interpreters and Translators', description: 'Fluent professionals to break language barriers at every step.', icon: 'fas fa-language' },
    { title: 'Transportation Assistance', description: 'Complimentary airport transfers.', icon: 'fas fa-ambulance' },
    { title: 'Accommodation Options', description: 'Near the hospital and matching your budget and needs.', icon: 'fas fa-hotel' },
    { title: 'Admission, Appointment, Pharma Care', description: 'Full coordination of medical logistics.', icon: 'fas fa-calendar-check' },
    // { title: 'Private Duty Nursing', description: 'Arrangements of private nursing care as needed.', icon: 'fas fa-user-nurse' },
  ];

}
