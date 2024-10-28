import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';

  phoneNumbers = [
    '+1 (555) 123-4567',
    '+44 20 7123 4567',
    '+61 2 8123 4567'
  ];

  emails = [
    'info@brand.com',
    'support@brand.com'
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s-()]{7,20}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    emailjs.init("FEPr0AJzXy6lAR_X5");
    
    // Debug form state
    this.contactForm.statusChanges.subscribe(status => {
      console.log('Form Status:', status);
      console.log('Form Errors:', this.getFormValidationErrors());
    });
  }

  // Helper method to debug form validation errors
  getFormValidationErrors() {
    const errors: any = {};
    Object.keys(this.contactForm.controls).forEach(key => {
      const controlErrors = this.contactForm.get(key)?.errors;
      if (controlErrors != null) {
        errors[key] = controlErrors;
      }
    });
    return errors;
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        const templateParams = {
          to_email: '20010418vidhan@gmail.com',
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          phone: this.contactForm.value.phone,
          address: this.contactForm.value.address,
          message: this.contactForm.value.message,
        };

        await emailjs.send(
          'service_1ktjc4r',
          'template_fmdx5wc',
          templateParams
        );

        this.submitMessage = 'Message sent successfully!';
        this.contactForm.reset();
      } catch (error) {
        console.error('Error sending email:', error);
        this.submitMessage = 'Failed to send message. Please try again later.';
      } finally {
        this.isSubmitting = false;
      }
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}