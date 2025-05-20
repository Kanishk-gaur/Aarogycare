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
    '+91-9097272726',
    '+91-9599023663',
  ];

  // WhatsApp details
  whatsappNumber = '+919097272726'; // Replace with your WhatsApp number
  whatsappMessage = 'Здравствуйте! Я хотел бы получить информацию о ваших услугах.'; // Default message

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
      console.log('Статус формы:', status);
      console.log('Ошибки формы:', this.getFormValidationErrors());
    });
  }

  // Helper method to display form validation errors
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

  // Open WhatsApp chat
  openWhatsApp() {
    // Add a small pop effect when clicked
    const button = document.querySelector('.whatsapp-button') as HTMLElement;
    if (button) {
      button.style.transform = 'scale(0.9)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    }
    
    const encodedMessage = encodeURIComponent(this.whatsappMessage);
    const whatsappUrl = `https://wa.me/${this.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        const templateParams = {
          // to_email: 'Shubhamagrawal970@gmail.com',
          to_email: 'kanishkg7017@gmail.com',
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

        this.submitMessage = 'Сообщение успешно отправлено!';
        this.contactForm.reset();
      } catch (error) {
        console.error('Ошибка отправки сообщения:', error);
        this.submitMessage = 'Не удалось отправить сообщение. Пожалуйста, попробуйте позже.';
      } finally {
        this.isSubmitting = false;
      }
    } else {
      // Mark all fields as 'touched' to show error messages
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}