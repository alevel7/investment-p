import { Routes } from '@angular/router';
import { AuthBasePage } from './auth/auth-base-page/auth-base-page';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth-route').then((m) => m.AUTH_ROUTES),
    },
    {
        path: 'onboarding',
        loadChildren: () => import('./onboarding/onboarding-route').then((m) => m.ONBOARDING_ROUTES),
    },
   
];
