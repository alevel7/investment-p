import { Component, inject } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { AuthBasePage } from '../auth-base-page/auth-base-page';
import { OtpValidation } from '../../shared/component/otp-validation/otp-validation';
import { Router } from '@angular/router';

@Component({
  imports: [AuthBasePage,OtpValidation],
  selector: 'app-new-account-verify',
  styles: ``,
  templateUrl: './new-account-verify.html',
})
export class NewAccountVerify {
  router = inject(Router);
  
  verifyOtp(otp: string) {
    this.router.navigate(['auth/profile/new'], { queryParams: { otp } });
  }
}
