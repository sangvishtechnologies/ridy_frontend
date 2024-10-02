import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { PaymentGatewaysQuery } from '@ridy/admin-panel/generated/graphql';
import { TableService } from '@ridy/admin-panel/src/app/@services/table-service';
import { environment } from '@ridy/admin-panel/src/environments/environment';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-payment-gateways-list',
  templateUrl: './payment-gateways-list.component.html',
})
export class PaymentGatewaysListComponent implements OnInit {
  query?: Observable<ApolloQueryResult<PaymentGatewaysQuery>>;
  serverUrl = environment.root;

  constructor(
    private route: ActivatedRoute,
    public tableService: TableService,
  ) {}

  ngOnInit(): void {
    this.query = this.route.data.pipe(map((data) => data.paymentGateways));
  }
}
