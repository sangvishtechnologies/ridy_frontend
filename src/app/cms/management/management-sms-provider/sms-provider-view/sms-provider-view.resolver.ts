import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  ViewSmsProviderGQL,
  ViewSmsProviderQuery,
} from '@ridy/admin-panel/generated/graphql';
import { Observable } from 'rxjs';

@Injectable()
export class SMSProviderViewResolver {
  constructor(private gql: ViewSmsProviderGQL) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<ApolloQueryResult<ViewSmsProviderQuery>> {
    return this.gql.fetch({ id: route.params.id });
  }
}
