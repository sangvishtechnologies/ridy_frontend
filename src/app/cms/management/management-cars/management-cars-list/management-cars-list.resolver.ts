import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { CarModelFilter, CarModelSortFields, CarsListGQL, CarsListQuery } from '@ridy/admin-panel/generated/graphql';
import { TableService } from '@ridy/admin-panel/src/app/@services/table-service';
import { Observable } from 'rxjs';

@Injectable()
export class CarsListResolver  {
  constructor(
    private paging: TableService,
    private gql: CarsListGQL
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ApolloQueryResult<CarsListQuery>> {
    const params = this.paging.deserializeQueryParams<CarModelSortFields, CarModelFilter>(route.queryParams);
    return this.gql.fetch({});
  }
}
