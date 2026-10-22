import { Component, signal, Signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-sign-in',
  styleUrl: './sign-in.css',
  templateUrl: './sign-in.html',
})
export class SignIn {
  previewPassword = signal(false);



  togglePasswordPreview() {
    this.previewPassword.set(!this.previewPassword());
  }

}
