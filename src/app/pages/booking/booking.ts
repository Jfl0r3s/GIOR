import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
})
export class Booking {
  private readonly fb = new FormBuilder();
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    eventType: ['Club underground'],
    date: [''],
    message: ['', Validators.required],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, eventType, date, message } = this.form.getRawValue();
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nTipo de evento: ${eventType}\nFecha tentativa: ${date}\n\n${message}`
    );
    window.location.href = `mailto:giordj.official@gmail.com?subject=Booking GIØR&body=${body}`;
    this.submitted.set(true);
  }
}
