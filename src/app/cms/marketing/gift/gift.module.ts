import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftRoutingModule } from './gift-routing.module';
import { GiftBatchListComponent } from './gift-batch-list/gift-batch-list.component';
import { GiftBatchViewComponent } from './gift-batch-view/gift-batch-view.component';
import { SharedModule } from '@ridy/admin-panel/src/app/@components/shared.module';
import { GiftBatchNewComponent } from './gift-batch-new/gift-batch-new.component';

@NgModule({
  declarations: [GiftBatchListComponent, GiftBatchViewComponent, GiftBatchNewComponent],
  imports: [CommonModule, GiftRoutingModule, SharedModule],
})
export class GiftModule {}
