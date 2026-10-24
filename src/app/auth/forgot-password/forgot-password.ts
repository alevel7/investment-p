import { Component, inject, signal } from '@angular/core';
import { AuthBasePage } from '../auth-base-page/auth-base-page';
import { FormField, email, form, required, schema } from '@angular/forms/signals';
import { Router } from '@angular/router';

@Component({
  imports: [AuthBasePage, FormField],
  selector: 'app-forgot-password',
  styleUrl: './forgot-password.css',
  templateUrl: './forgot-password.html',
})
export class ForgotPassword {

  router = inject(Router);

  forgotPasswordForm = form(
    signal({
      email: ''
    }),
    schema<{email:string}>((rootPath) => {
      required(rootPath.email, { message: 'Email is required' });
      email(rootPath.email, { message: 'Email is invalid' });
    })
  );


  resetPassword() {
    if (this.forgotPasswordForm().valid()) {
      // Handle password reset logic here
      console.log('Resetting password for:', this.forgotPasswordForm.email().value());
      this.router.navigate(['/auth/reset-password/verify']);
    } else {
      console.log('Form is invalid');
    }
  }
}
