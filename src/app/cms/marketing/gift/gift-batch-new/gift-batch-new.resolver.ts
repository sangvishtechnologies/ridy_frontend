import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RegionListGQL } from '@ridy/admin-panel/generated/graphql';
import { Observable, distinct, map } from 'rxjs';

@Injectable()
export class GiftBatchNewResolver {
  constructor(private gql: RegionListGQL) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<string[]> {
    return this.gql.fetch().pipe(
      map((result) =>
        result.data.regions.nodes.map((region) => region.currency),
      ),
      distinct(),
    );
  }
}
