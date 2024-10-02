import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayoutMethodsListComponent } from './payout-methods-list/payout-methods-list.component';
import { payoutMethodsListResolver } from './payout-methods-list/payout-methods-list.resolver';
import { PayoutMethodsViewComponent } from './payout-methods-view/payout-methods-view.component';
import { viewPayoutMethodResolver } from './payout-methods-view/payout-methods-view.resolver';

const routes: Routes = [
  {
    path: '',
    component: PayoutMethodsListComponent,
    resolve: {
      payoutMethods: payoutMethodsListResolver,
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: 'new',
    component: PayoutMethodsViewComponent,
  },
  {
    path: ':id/edit',
    component: PayoutMethodsViewComponent,
    resolve: {
      payoutMethod: viewPayoutMethodResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayoutMethodsRoutingModule {}
