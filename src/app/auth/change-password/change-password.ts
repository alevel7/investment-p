import { Component, signal } from '@angular/core';
import { form, FormField, required, schema, validate } from '@angular/forms/signals';
import { AuthBasePage } from '../auth-base-page/auth-base-page';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [FormField, AuthBasePage, MatIconModule],
  selector: 'app-change-password',
  styles: ``,
  templateUrl: './change-password.html',
})
export class ChangePassword {

  resetPasswordForm = form(
    signal({
      newPassword: '',
      confirmPassword: ''
    }),
    schema<{newPassword:string, confirmPassword:string}>((rootPath) => {
      required(rootPath.newPassword, { message: 'New password is required' });
      required(rootPath.confirmPassword, { message: 'Confirm password is required' });
      // Custom validation to check if newPassword and confirmPassword match
      validate(rootPath.confirmPassword, ({ value, valueOf }) => {
        const confirmPassword = value();
        const password = valueOf(rootPath.newPassword);
        if (confirmPassword !== password) {
          return {
            kind: 'passwordMismatch',
            message: 'Passwords do not match',
          };
        }
        return null;
      });
    })
  )

  previewPassword = signal(false);
  togglePasswordPreview() {
    this.previewPassword.set(!this.previewPassword());
  }
  resetPassword() {
    if (this.resetPasswordForm().valid()) {
      // Handle password reset logic here
      console.log('Resetting password for:', this.resetPasswordForm.newPassword().value());
      // Navigate to the next page or show a success message
    } else {
      console.log('Form is invalid');
    }
  }
}
