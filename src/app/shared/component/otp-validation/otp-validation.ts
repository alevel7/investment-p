import { Component, output, signal } from '@angular/core';
import { applyEach, form, FormField, maxLength, minLength, required, schema } from '@angular/forms/signals';


interface OtpFormInterface {
  otp:string[]
}

const otpFormSchema = schema<OtpFormInterface>((rootPath) => {
  applyEach(rootPath.otp, (otpPath) => {
    required(otpPath);
    maxLength(otpPath, 1);
    minLength(otpPath, 1);
  });
});
@Component({
  imports: [FormField],
  selector: 'app-otp-validation',
  styles: ``,
  template: ` 
   <div class="flex flex-col justify-center gap-10" form-content>
        <div class="mb-5 w-full flex justify-center"><img src="https://customer-qa.bucksfield.com.ng/bucksfield-logo-dark.svg" alt=""></div>

        <div class="flex flex-col items-center gap-5">
           
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path d="M44.8 25.6H19.2V19.2C19.2 12.1301 24.9301 6.4 32 6.4C39.0698 6.4 44.8 12.1301 44.8 19.2V25.6Z" stroke="url(#paint0_linear_365_7012)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M51.2 23.4667H12.8C10.4427 23.4667 8.53333 25.376 8.53333 27.7333V53.3333C8.53333 55.6907 10.4427 57.6 12.8 57.6H51.2C53.5573 57.6 55.4667 55.6907 55.4667 53.3333V27.7333C55.4667 25.376 53.5573 23.4667 51.2 23.4667ZM32 44.8C29.6427 44.8 27.7333 42.8885 27.7333 40.5333C27.7333 38.176 29.6427 36.2667 32 36.2667C34.3573 36.2667 36.2667 38.176 36.2667 40.5333C36.2667 42.8885 34.3573 44.8 32 44.8ZM44.8 44.8C42.4427 44.8 40.5333 42.8885 40.5333 40.5333C40.5333 38.176 42.4427 36.2667 44.8 36.2667C47.1573 36.2667 49.0667 38.176 49.0667 40.5333C49.0667 42.8885 47.1573 44.8 44.8 44.8ZM19.2 44.8C16.8427 44.8 14.9333 42.8885 14.9333 40.5333C14.9333 38.176 16.8427 36.2667 19.2 36.2667C21.5573 36.2667 23.4667 38.176 23.4667 40.5333C23.4667 42.8885 21.5573 44.8 19.2 44.8Z" fill="url(#paint1_linear_365_7012)"></path><defs><linearGradient id="paint0_linear_365_7012" x1="32" y1="6.4" x2="32" y2="25.6" gradientUnits="userSpaceOnUse"><stop stop-color="#FF5461"></stop><stop offset="1" stop-color="#970A14"></stop></linearGradient>
            <linearGradient id="paint1_linear_365_7012" x1="32" y1="23.4667" x2="32" y2="57.6" gradientUnits="userSpaceOnUse"><stop stop-color="#FF5461"></stop><stop offset="1" stop-color="#970A14"></stop></linearGradient></defs>
            </svg>

            <h2>OTP Verification</h2>
            <p class="text-gray-800 text-center">Please enter the OTP sent to your email address</p>

              <div class="w-full flex justify-center gap-1">
                @for (t of otpForm.otp; track $index) {
                  <input [id]=" 'otp' + $index" type="text" [formField]="otpForm.otp[$index]"
                  (input)="focusNextOtp($event, $index)"
                  (keydown)="focusPreviousOtpOnBackspace($event, $index)"
                  class="bg-gray-100 p-3 rounded-lg size-12 focus:ring-2 focus:ring-bucks-primary focus:outline-none" />
                }
              </div>
                <div>
            
                    @if (otpForm.otp().invalid()) {
                        @for (error of otpForm.otp().errors(); track $index) {
                        <small>{{ error.message }}</small><br />
                        }
                    }
                </div>
        </div> 

        <div class="flex w-full justify-center">
            <p class="font-semibold">Didn't get any code ? <a href="" class="text-bucks-primary cursor-pointer underline">Resend Code</a></p>
        </div> 

        <div class="mb-5 p-10">
            <button [disabled]="otpForm.otp().invalid()" 
            [class]="{ 'bg-bucks-tertiary': otpForm.otp().invalid() }"
            class="bg-bucks-primary text-white p-2 rounded-xl w-full text-center py-5 cursor-pointer" (click)="verifyOTP()">
              Verify OTP
            </button>
        </div>


        
    </div>
   `,
})
export class OtpValidation {
  emitOtp = output<string>();

  otpModel = signal<OtpFormInterface>({
    otp: ['', '', '', '', '', '']
  });

  otpForm = form(this.otpModel,otpFormSchema);

  verifyOTP() {
    const otpValue = this.otpModel().otp.join('');
    this.emitOtp.emit(otpValue);
    // navigate to dashboard
  }

  focusNextOtp(event: Event, index: number) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.value.length === 1 && index < this.otpModel().otp.length - 1) {
      const nextInput = document.getElementById(`otp${index + 1}`) as HTMLInputElement | null;
      nextInput?.focus();
    }
  }

  focusPreviousOtpOnBackspace(event: KeyboardEvent, index: number) {
    const inputElement = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && inputElement.value.length === 0 && index > 0) {
      const previousInput = document.getElementById(`otp${index - 1}`) as HTMLInputElement | null;
      previousInput?.focus();
    }
  }
}
