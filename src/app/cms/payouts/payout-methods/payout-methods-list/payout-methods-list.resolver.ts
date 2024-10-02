import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  PayoutMethodsGQL,
  PayoutMethodsQuery,
} from '@ridy/admin-panel/generated/graphql';
import { NzMessageService } from 'ng-zorro-antd/message';

export const payoutMethodsListResolver: ResolveFn<
  ApolloQueryResult<PayoutMethodsQuery>
> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const gql = inject(PayoutMethodsGQL);
  const result = gql.fetch();
  const message = inject(NzMessageService);
  result.subscribe({
    error: (error) => {
      message.error(
        'This role does not have the permission to access this menu.',
      );
    },
  });
  return result;
};
