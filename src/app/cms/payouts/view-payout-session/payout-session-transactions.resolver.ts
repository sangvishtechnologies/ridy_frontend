import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  PayooutSessionTransactionsGQL,
  PayooutSessionTransactionsQuery,
  ViewPayoutSessionGQL,
  ViewPayoutSessionQuery,
} from '@ridy/admin-panel/generated/graphql';
import { TableService } from '../../../@services/table-service';

export const payoutSessionTransactionsResolver: ResolveFn<
  ApolloQueryResult<PayooutSessionTransactionsQuery>
> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const gql = inject(PayooutSessionTransactionsGQL);
  const tableService = inject(TableService);
  const { paging } = tableService.deserializeQueryParams(route.queryParams);
  return gql.fetch({ id: route.params.id, paging: paging });
};
