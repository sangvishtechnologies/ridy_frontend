import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { PayoutMethodsQuery } from '@ridy/admin-panel/generated/graphql';
import { TableService } from '@ridy/admin-panel/src/app/@services/table-service';
import { environment } from '@ridy/admin-panel/src/environments/environment';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-payout-methods-list',
  templateUrl: './payout-methods-list.component.html',
  styleUrls: ['./payout-methods-list.component.css'],
})
export class PayoutMethodsListComponent {
  query?: Observable<ApolloQueryResult<PayoutMethodsQuery>>;
  serverUrl = environment.root;

  constructor(
    private route: ActivatedRoute,
    public tableService: TableService,
  ) {}

  ngOnInit(): void {
    this.query = this.route.data.pipe(map((data) => data.payoutMethods));
  }
}
