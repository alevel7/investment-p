import { Component, effect, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthBasePage } from '../auth-base-page/auth-base-page';
import { Router } from '@angular/router';
import { form, FormField } from '@angular/forms/signals';
import { LoginInterface, loginSchema } from './sign-in.model';



@Component({
  imports: [MatIconModule, AuthBasePage, FormField],
  selector: 'app-sign-in',
  styleUrl: './sign-in.css',
  templateUrl: './sign-in.html',
})
export class SignIn {
  previewPassword = signal(false);

  router = inject(Router);


  loginModel = signal<LoginInterface>({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel, loginSchema);


  eff = effect(() => {
    console.log('Login Model:', this.loginModel());
  });



  togglePasswordPreview() {
    this.previewPassword.set(!this.previewPassword());
  }
  signIn(){
    this.router.navigate(['/verification']);
  }
}
