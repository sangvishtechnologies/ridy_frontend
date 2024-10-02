import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SMSProviderListComponent } from './sms-provider-list/sms-provider-list.component';
import { SMSProviderViewComponent } from './sms-provider-view/sms-provider-view.component';
import { TagColorService } from '@ridy/admin-panel/src/app/@services/tag-color/tag-color.service';
import { SharedModule } from '@ridy/admin-panel/src/app/@components/shared.module';
import { ManagementSMSProviderRoutingModule } from './management-sms-provider-routing.module';

@NgModule({
  declarations: [SMSProviderListComponent, SMSProviderViewComponent],
  imports: [CommonModule, ManagementSMSProviderRoutingModule, SharedModule],
  providers: [TagColorService],
})
export class ManagementSMSProviderModule {}
