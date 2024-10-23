import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private router: Router) {}

  openLeftComponent() {
    // Navigate to the first child component route
    this.router.navigate(['/service-card']); // Update the route as necessary
  }

  openRightComponent() {
    // Navigate to the second child component route
    this.router.navigate(['/ayur']); // Update the route as necessary
  }
}
