import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  RegionViewGQL,
  RegionViewQuery,
  ViewRiderQuery,
} from '@ridy/admin-panel/generated/graphql';
import { Observable } from 'rxjs';

@Injectable()
export class RegionViewResolver
  
{
  constructor(private gql: RegionViewGQL) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<ApolloQueryResult<RegionViewQuery>> {
    return this.gql.fetch({ id: route.params.id });
  }
}
