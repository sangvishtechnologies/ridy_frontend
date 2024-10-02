import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  ViewCouponGQL,
  ViewCouponQuery,
  ViewGiftBatchGQL,
  ViewGiftBatchQuery,
} from '@ridy/admin-panel/generated/graphql';
import { Observable } from 'rxjs';

@Injectable()
export class GiftBatchViewResolver {
  constructor(private gql: ViewGiftBatchGQL) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<ApolloQueryResult<ViewGiftBatchQuery>> {
    return this.gql.fetch({ id: route.params.id });
  }
}
