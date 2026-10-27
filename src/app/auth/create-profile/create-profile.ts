import { Component, inject, signal } from '@angular/core';
import { AuthBasePage } from '../auth-base-page/auth-base-page';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { CreateIndividualProfileInterface, createIndividualProfileSchema } from './create-profile.model';
import { Router } from '@angular/router';

@Component({
  imports: [AuthBasePage, FormField, FormRoot],
  selector: 'app-create-profile',
  styles: ``,
  templateUrl: './create-profile.html',
})
export class CreateProfile {

  router = inject(Router);
  
  private createProfileModel = signal<CreateIndividualProfileInterface>({
    companyName: '',
    registrationNumber: '',
    companyIndustry: '',
    companySize: '',
    taxIdentificationNumber: '',
    dateOfIncorporation: '',
    estimatedAnnualRevenue: '',
    companyAddress: '',
    state: '',
    localGovernmentArea: ''
  });

  createProfileForm = form(this.createProfileModel, createIndividualProfileSchema);

  createProfile() {
    this.router.navigate(['/auth/sign-in']);
    if (this.createProfileForm().invalid()) {
      console.log('Form is invalid');
      return;
    }

    const profileData = this.createProfileForm().value();
    console.log('Creating profile with data:', profileData);
    // Handle profile creation logic here
  }
}
