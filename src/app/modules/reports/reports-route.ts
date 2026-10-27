import { Routes } from '@angular/router';

export const REPORT_ROUTES: Routes = [
  {
    path: 'report-dashboard',
    loadComponent: () =>
      import('./report-dashboard/report-dashboard').then(
        (m) => m.ReportDashboard
      ),
  },
  {
    path: "investment-report",
    children: [
      {
        path: "fixed-investment-report",
        loadComponent: () =>
          import('./fixed-investment/fixed-investment').then(
            (m) => m.FixedInvestment)
      },
      {
        path: "liquidations",
        loadComponent: () =>
          import('./liquidations/liquidations').then(
            (m) => m.Liquidations)
      },
      {
        path: "daily-accrual-report",
        loadComponent: () =>
          import('./daily-accrual/daily-accrual').then(
            (m) => m.DailyAccrual)
      },
      {
        path: "mutual-investment-report",
        loadComponent: () =>
          import('./mutual-fund-investment/mutual-fund-investment').then(
            (m) => m.MutualFundInvestment)
      },
    ]
  }
];
