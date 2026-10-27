import { Component, computed, effect, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { AuthBasePage } from '../auth-base-page/auth-base-page';
import { SignUpInterface, signUpSchema } from './create-account.model';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [MatIconModule, AuthBasePage, FormField, RouterLink],
  selector: 'app-create-account',
  styles: ``,
  templateUrl: './create-account.html',
})
export class CreateAccount {
  previewPassword = signal(false);

  router = inject(Router);


  signUpModel = signal<SignUpInterface>({
    email: '',
    password: '',
    confirmPassword: ''
  });

  signUpForm = form(this.signUpModel, signUpSchema);


  eff = effect(() => {
    // console.log('Form Errors:', this.formErrors());
  });



  togglePasswordPreview() {
    this.previewPassword.set(!this.previewPassword());
  }
  signIn() {
    this.router.navigate(['auth/sign-up/verify']);
  }
}
