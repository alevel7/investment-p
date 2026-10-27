import { Routes } from '@angular/router';
import { Navigation } from './shared/component/navigation/navigation';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth-route').then((m) => m.AUTH_ROUTES),
    },
    {
        path: '',
        component: Navigation,
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./modules/dashboard/overview/overview').then((m) => m.Overview),
            },
            // {
            //     path: "kyb",
            //     loadChildren: () => import('./kyb/kyb-route').then((m) => m.KYB_ROUTES),
            // },
            // {
            //     path: "analytics",
            //     component: AuthBasePage,
            // },
            // {
            //     path: "settings",
            //     loadChildren: () => import('./settings/settings-route').then((m) => m.SETTINGS_ROUTES),
            // },
            // {
            //     path: "reports",
            //     loadChildren: () => import('./reports/reports-route').then((m) => m.REPORTS_ROUTES),
            // },
            // {
            // }
        ]
    },
    {
        path: '**',
        redirectTo: 'auth/sign-in',
    }
];
