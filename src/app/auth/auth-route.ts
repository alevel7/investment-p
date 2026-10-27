import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'sign-in',
    loadComponent: () => import('./sign-in/sign-in').then((m) => m.SignIn),
  },
  {
    path: 'verification',
    loadComponent: () => import('./sign-in-verify/sign-in-verify').then((m) => m.SignInVerify),
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./forgot-password/forgot-password').then((m) => m.ForgotPassword),
  },
  {
    path: 'reset-password/verify',
    loadComponent: () => import('./verify-password-otp/verify-password-otp').then((m) => m.VerifyPasswordOtp),
  },
  {
    path: 'reset-password/new-password',
    loadComponent: () => import('./change-password/change-password').then((m) => m.ChangePassword),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./create-account/create-account').then((m) => m.CreateAccount),
  },
  {
    path: 'sign-up/verify',
    loadComponent: () => import('./new-account-verify/new-account-verify').then((m) => m.NewAccountVerify),
  },
  {
    path: 'profile/new',
    loadComponent: () => import('./create-profile/create-profile').then((m) => m.CreateProfile),
  },
  {
    path: "",
    redirectTo: "sigin-in",
    pathMatch: "full"
  },
];
