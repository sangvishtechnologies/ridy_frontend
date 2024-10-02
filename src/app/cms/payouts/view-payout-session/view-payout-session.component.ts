import { Component, OnInit } from '@angular/core';
import { RouterHelperService } from '../../../@services/router-helper.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, first, firstValueFrom, map } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  ExportToCsvGQL,
  PayooutSessionTransactionsQuery,
  PayoutMethodType,
  PayoutSession,
  PayoutSessionStatus,
  RunAutoPayoutGQL,
  SaveManualPayoutItemGQL,
  TransactionStatus,
  UpdatePayoutSessionGQL,
  ViewPayoutSessionQuery,
} from '@ridy/admin-panel/generated/graphql';
import { TableService } from '../../../@services/table-service';
import { environment } from '@ridy/admin-panel/src/environments/environment';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-payout-session',
  templateUrl: './view-payout-session.component.html',
  styleUrls: ['./view-payout-session.component.scss'],
})
export class ViewPayoutSessionComponent {
  id = this.route.snapshot.params.id;
  serverUrl = environment.root;

  formGroupManualPayout = this.fb.group({
    transactionNumber: ['', Validators.required],
    description: [null],
  });

  query: Observable<ApolloQueryResult<ViewPayoutSessionQuery>> =
    this.route.data.pipe(map((data) => data.payoutSession));

  transactions: Observable<ApolloQueryResult<PayooutSessionTransactionsQuery>> =
    this.route.data.pipe(map((data) => data.transactions));

  transactionStatus = TransactionStatus;
  payoutMethodType = PayoutMethodType;
  payoutSessionStatus = PayoutSessionStatus;

  manualPayoutDialog?: NzModalRef;

  payoutDialogVisible = false;
  payoutDialogLoading = false;
  payoutDialogData?: PayooutSessionTransactionsQuery['payoutSession']['driverTransactions']['nodes'][0];

  constructor(
    private fb: FormBuilder,
    public tableService: TableService,
    private route: ActivatedRoute,
    private routerHelper: RouterHelperService,
    private messageService: NzMessageService,
    private runAutoPayoutGql: RunAutoPayoutGQL,
    private exportToCsvGql: ExportToCsvGQL,
    private saveManualPayoutGql: SaveManualPayoutItemGQL,
    private updatePayoutSessionStatusGql: UpdatePayoutSessionGQL,
  ) {}

  async exportToCSV(payoutMethodId: string) {
    try {
      let result = await firstValueFrom(
        this.exportToCsvGql.mutate({
          input: {
            payoutSessionId: this.id,
            payoutMethodId,
          },
        }),
      );
      window.open(this.serverUrl + result.data?.exportSessionToCsv);
    } catch (error: any) {
      this.messageService.error(error.message);
    }
  }

  getAmountToBePaid(
    list: ViewPayoutSessionQuery['payoutSession']['amountToBePaidByPayoutMethod'],
    payoutMethodId: string,
  ): number {
    return (
      list.find((item) => item.groupBy?.payoutMethodId == payoutMethodId)?.sum
        ?.amount ?? 0
    );
  }

  async payoutStripe(payoutMethodId: string) {
    try {
      await firstValueFrom(
        this.runAutoPayoutGql.mutate({
          input: {
            payoutSessionId: this.id,
            payoutMethodId,
          },
        }),
      );
      this.routerHelper.refresh(this.route);
      this.messageService.success('Payout completed successfully');
    } catch (error: any) {
      this.messageService.error(error.message);
    }
  }

  showPayoutDialog(
    driver: PayooutSessionTransactionsQuery['payoutSession']['driverTransactions']['nodes'][0],
  ) {
    this.payoutDialogData = driver;
    this.payoutDialogVisible = true;
  }

  async saveManualPayout(transactionId: string) {
    try {
      this.payoutDialogLoading = true;
      await firstValueFrom(
        this.saveManualPayoutGql.mutate({
          input: {
            driverTransactionId: transactionId,
            transactionNumber:
              this.formGroupManualPayout.value.transactionNumber!,
            description: this.formGroupManualPayout.value.description,
          },
        }),
      );
      this.routerHelper.refresh(this.route);
      this.messageService.success('Payout completed successfully');
      this.payoutDialogLoading = false;
      this.payoutDialogVisible = false;
    } catch (error: any) {
      this.messageService.error(error.message);
    }
  }

  async changeStatus(sessionStatus: PayoutSessionStatus) {
    try {
      await firstValueFrom(
        this.updatePayoutSessionStatusGql.mutate({
          id: this.id,
          update: {
            status: sessionStatus,
          },
        }),
      );
      this.routerHelper.refresh(this.route);
      this.messageService.success('Payout status changed successfully');
    } catch (error: any) {
      this.messageService.error(error.message);
    }
  }
}
