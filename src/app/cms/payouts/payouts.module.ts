import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutsRoutingModule } from './payouts-routing.module';
import { PayoutsComponent } from './payouts.component';
import { SharedModule } from '../../@components/shared.module';
import { CreatePayoutSessionComponent } from './create-payout-session/create-payout-session.component';
import { ViewPayoutSessionComponent } from './view-payout-session/view-payout-session.component';

@NgModule({
  declarations: [
    PayoutsComponent,
    CreatePayoutSessionComponent,
    ViewPayoutSessionComponent,
  ],
  imports: [SharedModule, PayoutsRoutingModule],
})
export class PayoutsModule {}
