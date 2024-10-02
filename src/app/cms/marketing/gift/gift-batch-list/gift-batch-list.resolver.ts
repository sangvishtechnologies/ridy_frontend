import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  CouponFilter,
  CouponSortFields,
  GiftBatchListGQL,
  GiftBatchListQuery,
} from '@ridy/admin-panel/generated/graphql';
import { TableService } from '@ridy/admin-panel/src/app/@services/table-service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';

@Injectable()
export class GiftBatchListResolver {
  subscription?: any;

  constructor(
    private paging: TableService,
    private gql: GiftBatchListGQL,
    private message: NzMessageService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<ApolloQueryResult<GiftBatchListQuery>> {
    const params = this.paging.deserializeQueryParams<
      CouponSortFields,
      CouponFilter
    >(route.queryParams);
    const result = this.gql.fetch(params);
    this.subscription = result.subscribe({
      error: (error) => {
        this.message.error(
          'This role does not have sufficient permission to access this menu.',
        );
      },
    });
    return result;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
