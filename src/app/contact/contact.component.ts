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
    '+91-9289700931',
    '+91-9599023663',
  ];

  emails = [
    'contact@aarogycare.com',
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

    // Отладка состояния формы
    this.contactForm.statusChanges.subscribe(status => {
      console.log('Статус формы:', status);
      console.log('Ошибки формы:', this.getFormValidationErrors());
    });
  }

  // Вспомогательный метод для вывода ошибок валидации формы
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
          to_email: 'contact@aarogycare.com',
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
      // Отметить все поля как «затронутые», чтобы показать сообщения об ошибках
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
