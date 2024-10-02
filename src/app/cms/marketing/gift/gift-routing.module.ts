import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftBatchViewResolver } from './gift-batch-view/gift-batch-view.resolver';
import { GiftBatchListResolver } from './gift-batch-list/gift-batch-list.resolver';
import { GiftBatchListComponent } from './gift-batch-list/gift-batch-list.component';
import { GiftBatchViewComponent } from './gift-batch-view/gift-batch-view.component';
import { GiftBatchNewComponent } from './gift-batch-new/gift-batch-new.component';
import { GiftBatchNewResolver } from './gift-batch-new/gift-batch-new.resolver';
import { GiftCodeListResolver } from './gift-batch-view/gift-batch-code-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: GiftBatchListComponent,
    resolve: { giftBatches: GiftBatchListResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
  {
    path: 'new',
    component: GiftBatchNewComponent,
    resolve: { query: GiftBatchNewResolver },
  },
  {
    path: 'view/:id',
    component: GiftBatchViewComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    resolve: {
      giftBatch: GiftBatchViewResolver,
      codeList: GiftCodeListResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    GiftBatchListResolver,
    GiftBatchViewResolver,
    GiftBatchNewResolver,
  ],
})
export class GiftRoutingModule {}
