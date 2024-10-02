import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'coupon', pathMatch: 'full' },
  {
    path: 'coupon',
    loadChildren: () =>
      import('./coupons/coupons.module').then((m) => m.CouponsModule),
  },
  {
    path: 'announcement',
    loadChildren: () =>
      import('./announcements/announcements.module').then(
        (m) => m.AnnouncementsModule,
      ),
  },
  {
    path: 'gift-card',
    loadChildren: () => import('./gift/gift.module').then((m) => m.GiftModule),
  },
  {
    path: 'rewards',
    loadChildren: () =>
      import('./rewards/rewards.module').then((m) => m.RewardsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingRoutingModule {}
