import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayoutsComponent } from './payouts.component';
import { payoutsResolver } from './payouts.resolver';
import { CreatePayoutSessionComponent } from './create-payout-session/create-payout-session.component';
import { createPayoutSessionResolver } from './create-payout-session/create-payout-session.resolver';
import { ViewPayoutSessionComponent } from './view-payout-session/view-payout-session.component';
import { viewPayoutSessionResolver } from './view-payout-session/view-payout-session.resolver';
import { payoutSessionTransactionsResolver } from './view-payout-session/payout-session-transactions.resolver';

const routes: Routes = [
  {
    path: '',
    component: PayoutsComponent,
    resolve: { payouts: payoutsResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: 'new',
    component: CreatePayoutSessionComponent,
    resolve: {
      fields: createPayoutSessionResolver,
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: ':id/view',
    component: ViewPayoutSessionComponent,
    resolve: {
      payoutSession: viewPayoutSessionResolver,
      transactions: payoutSessionTransactionsResolver,
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayoutsRoutingModule {}
