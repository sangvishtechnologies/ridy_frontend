import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CMSComponent } from './cms.component';
import { CMSResolver } from './cms.resolver';

const routes: Routes = [
  {
    path: '',
    component: CMSComponent,
    resolve: { notifications: CMSResolver },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          {
            path: 'overview',
            loadChildren: () =>
              import('./home/overview/overview.module').then(
                (m) => m.OverviewModule,
              ),
          },
          {
            path: 'dispatcher',
            loadChildren: () =>
              import('./home/dispatcher/dispatcher.module').then(
                (m) => m.DispatcherModule,
              ),
          },
        ],
      },
      {
        path: 'drivers',
        loadChildren: () =>
          import('./drivers/drivers.module').then((m) => m.DriversModule),
      },
      {
        path: 'payouts',
        loadChildren: () =>
          import('./payouts/payouts.module').then((m) => m.PayoutsModule),
      },
      {
        path: 'payout-methods',
        loadChildren: () =>
          import('./payouts/payout-methods/payout-methods.module').then(
            (m) => m.PayoutMethodsModule,
          ),
      },
      {
        path: 'riders',
        loadChildren: () =>
          import('./riders/riders.module').then((m) => m.RidersModule),
      },
      {
        path: 'marketing',
        loadChildren: () =>
          import('./marketing/marketing.module').then((m) => m.MarketingModule),
      },
      {
        path: 'financials',
        loadChildren: () =>
          import('./financials/financials.module').then(
            (m) => m.FinancialsModule,
          ),
      },
      {
        path: 'requests',
        loadChildren: () =>
          import('./requests/requests.module').then((m) => m.RequestsModule),
      },
      {
        path: 'complaints',
        loadChildren: () =>
          import('./complaints/complaints.module').then(
            (m) => m.ComplaintsModule,
          ),
      },
      {
        path: 'sos',
        loadChildren: () => import('./sos/sos.module').then((m) => m.SOSModule),
      },
      {
        path: 'management',
        loadChildren: () =>
          import('./management/management.module').then(
            (x) => x.ManagementModule,
          ),
      },
    ],
  },
  {
    path: './',
    loadChildren: () =>
      import('./payouts/payouts.module').then((m) => m.PayoutsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CMSResolver],
})
export class CMSRoutingModule {}
