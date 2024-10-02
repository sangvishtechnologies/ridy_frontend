import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  ViewPayoutSessionGQL,
  ViewPayoutSessionQuery,
} from '@ridy/admin-panel/generated/graphql';

export const viewPayoutSessionResolver: ResolveFn<
  ApolloQueryResult<ViewPayoutSessionQuery>
> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const gql = inject(ViewPayoutSessionGQL);
  return gql.fetch({ id: route.params.id });
};
