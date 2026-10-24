import { Component, inject } from '@angular/core';
import { AuthBasePage } from '../auth-base-page/auth-base-page';
import { OtpValidation } from '../../shared/component/otp-validation/otp-validation';
import { Router } from '@angular/router';

@Component({
  imports: [AuthBasePage, OtpValidation],
  selector: 'app-verify-password-otp',
  styles: ``,
  templateUrl: './verify-password-otp.html',
})
export class VerifyPasswordOtp {
  router = inject(Router);


  verifyOtp(otp: string) {
    // Handle OTP verification logic here
    console.log('Verifying OTP:', otp);
    // Navigate to the new password page after successful verification
    this.router.navigate(['/auth/reset-password/new-password']);
  }
}
