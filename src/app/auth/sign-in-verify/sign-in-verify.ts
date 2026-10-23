import { Component } from '@angular/core';
import { AuthBasePage } from '../auth-base-page/auth-base-page';
import { OtpValidation } from '../../shared/component/otp-validation/otp-validation';

@Component({
  imports: [AuthBasePage, OtpValidation],
  selector: 'app-sign-in-verify',
  styleUrl: './sign-in-verify.css',
  templateUrl: './sign-in-verify.html',
})
export class SignInVerify {


  verifyOtp(data: string) {
    console.log('OTP received:', data);
    // Add your OTP verification logic here
    
  }
}
