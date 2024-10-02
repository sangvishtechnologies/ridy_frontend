import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  SmsProviderFilter,
  SmsProvidersGQL,
  SmsProviderSortFields,
  SmsProvidersQuery,
} from '@ridy/admin-panel/generated/graphql';
import { TableService } from '@ridy/admin-panel/src/app/@services/table-service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';

@Injectable()
export class SMSProviderListResolver {
  constructor(
    private paging: TableService,
    private gql: SmsProvidersGQL,
    private messageService: NzMessageService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<ApolloQueryResult<SmsProvidersQuery>> {
    const params = this.paging.deserializeQueryParams<
      SmsProviderSortFields,
      SmsProviderFilter
    >(route.queryParams);
    const result = this.gql.fetch(params);
    result.subscribe({
      error: (error) => {
        this.messageService.error(
          'This role does not have the permission to access this menu.',
        );
      },
    });

    return result;
  }
}
