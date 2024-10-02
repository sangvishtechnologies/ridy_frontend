import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  GiftCodeListGQL,
  GiftCodeListQuery,
} from '@ridy/admin-panel/generated/graphql';
import { TableService } from '@ridy/admin-panel/src/app/@services/table-service';

export const GiftCodeListResolver: ResolveFn<
  ApolloQueryResult<GiftCodeListQuery>
> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const paging = inject(TableService).deserializeQueryParams(route.queryParams);
  return inject(GiftCodeListGQL).fetch({
    giftBatchId: route.params.id,
    paging: paging.paging,
  });
};
