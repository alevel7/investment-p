import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
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
  }
];
