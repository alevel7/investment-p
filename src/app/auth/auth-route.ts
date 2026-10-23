import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./sign-in/sign-in').then((m) => m.SignIn),
  },
  {
    path: 'verification',
    loadComponent: () => import('./sign-in-verify/sign-in-verify').then((m) => m.SignInVerify),
  }
];
