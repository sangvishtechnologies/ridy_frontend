import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  ViewPayoutMethodGQL,
  ViewPayoutMethodQuery,
} from '@ridy/admin-panel/generated/graphql';

export const viewPayoutMethodResolver: ResolveFn<
  ApolloQueryResult<ViewPayoutMethodQuery>
> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const gql = inject(ViewPayoutMethodGQL);
  return gql.fetch({ id: route.params.id });
};
