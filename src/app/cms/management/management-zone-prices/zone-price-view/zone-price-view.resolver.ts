import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  ZonePriceViewGQL,
  ZonePriceViewQuery,
} from '@ridy/admin-panel/generated/graphql';
import { Observable } from 'rxjs';

@Injectable()
export class ZonePriceViewResolver
  
{
  constructor(private gql: ZonePriceViewGQL) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ApolloQueryResult<ZonePriceViewQuery>> {
    return this.gql.fetch({ id: route.params.id });
  }
}
