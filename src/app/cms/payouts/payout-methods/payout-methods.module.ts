import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutMethodsRoutingModule } from './payout-methods-routing.module';
import { PayoutMethodsListComponent } from './payout-methods-list/payout-methods-list.component';
import { PayoutMethodsViewComponent } from './payout-methods-view/payout-methods-view.component';
import { SharedModule } from '../../../@components/shared.module';

@NgModule({
  declarations: [PayoutMethodsListComponent, PayoutMethodsViewComponent],
  imports: [SharedModule, PayoutMethodsRoutingModule],
})
export class PayoutMethodsModule {}
