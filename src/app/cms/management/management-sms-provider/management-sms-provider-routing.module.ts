import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SMSProviderViewComponent } from './sms-provider-view/sms-provider-view.component';
import { SMSProviderViewResolver } from './sms-provider-view/sms-provider-view.resolver';
import { SMSProviderListResolver } from './sms-provider-list/sms-provider-list.resolver';
import { SMSProviderListComponent } from './sms-provider-list/sms-provider-list.component';

const routes: Routes = [
  {
    path: '',
    component: SMSProviderListComponent,
    resolve: { smsProviders: SMSProviderListResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: 'view/:id',
    component: SMSProviderViewComponent,
    resolve: { smsProvider: SMSProviderViewResolver },
  },
  { path: 'new', component: SMSProviderViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SMSProviderListResolver, SMSProviderViewResolver],
})
export class ManagementSMSProviderRoutingModule {}
