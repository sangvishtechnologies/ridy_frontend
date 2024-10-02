import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { PayoutsGQL, PayoutsQuery } from '@ridy/admin-panel/generated/graphql';
import { TableService } from '@ridy/admin-panel/src/app/@services/table-service';
import { NzMessageService } from 'ng-zorro-antd/message';

export const payoutsResolver: ResolveFn<ApolloQueryResult<PayoutsQuery>> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const tableService = inject(TableService);
  const gql = inject(PayoutsGQL);
  const params = tableService.deserializeQueryParams(route.queryParams);
  const result = gql.fetch({
    sessionsPaging: params.paging,
    currency: route.queryParams.currency,
  });
  const message = inject(NzMessageService);
  result.subscribe({
    error: (error) => {
      message.error(
        'This role does not have sufficient permission to access this menu.',
      );
    },
  });
  return result;
};
