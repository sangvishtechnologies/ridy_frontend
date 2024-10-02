import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  RegionFilter,
  RegionListGQL,
  RegionListQuery,
  RegionSortFields,
} from '@ridy/admin-panel/generated/graphql';
import { TableService } from '@ridy/admin-panel/src/app/@services/table-service';
import { Observable } from 'rxjs';

@Injectable()
export class RegionsListResolver {
  constructor(
    private paging: TableService,
    private gql: RegionListGQL,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<ApolloQueryResult<RegionListQuery>> {
    const params = this.paging.deserializeQueryParams<
      RegionSortFields,
      RegionFilter
    >(route.queryParams);
    return this.gql.fetch(params);
  }
}
