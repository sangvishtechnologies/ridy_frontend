import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  CreatePayoutMethodGQL,
  PayoutMethodType,
  UpdatePayoutMethodGQL,
  ViewPayoutMethodQuery,
} from '@ridy/admin-panel/generated/graphql';
import { RouterHelperService } from '@ridy/admin-panel/src/app/@services/router-helper.service';
import { CURRENCY_LIST } from '@ridy/admin-panel/src/app/currencies';
import { environment } from '@ridy/admin-panel/src/environments/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { firstValueFrom, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-payout-methods-view',
  templateUrl: './payout-methods-view.component.html',
  styleUrls: ['./payout-methods-view.component.css'],
})
export class PayoutMethodsViewComponent {
  form = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    currency: [null, Validators.required],
    description: [null],
    type: [null, Validators.required],
    enabled: [true, Validators.required],
    privateKey: [null],
    publicKey: [null],
    saltKey: [null],
    merchantId: [null],
    mediaId: [null],
  });
  subscription?: Subscription;
  methodTypes = Object.keys(PayoutMethodType);
  root = environment.root;
  jwt = localStorage.getItem('ridy_admin_token');
  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]) =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = (file.size ?? 0) / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  avatarUrl?: string;
  loadingUpload = false;
  currencies = CURRENCY_LIST;

  constructor(
    private route: ActivatedRoute,
    private fb: UntypedFormBuilder,
    private updateGQL: UpdatePayoutMethodGQL,
    private createGQL: CreatePayoutMethodGQL,
    private routerHelper: RouterHelperService,
    private msg: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data) => {
      const gateway: ApolloQueryResult<ViewPayoutMethodQuery> =
        data.payoutMethod;
      this.form.patchValue(gateway.data.payoutMethod as any);
      this.avatarUrl = gateway.data.payoutMethod?.media?.address;
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  async onSubmit() {
    const { id, ...input } = this.form.value;
    if (id == null) {
      await firstValueFrom(this.createGQL.mutate({ input }));
    } else {
      await firstValueFrom(this.updateGQL.mutate({ id, update: input }));
    }
    this.routerHelper.goToParent(this.route);
  }

  handleUploadChange(event: { file: NzUploadFile }) {
    switch (event.file.status) {
      case 'uploading':
        this.loadingUpload = true;
        break;
      case 'done':
        this.loadingUpload = false;
        this.form.patchValue({ mediaId: event.file.response.id });
        this.avatarUrl = event.file.response.address;
        break;
      case 'error':
        this.msg.error('Network error');
        this.loadingUpload = false;
        break;
    }
  }

  getPaymentGatewayAPIRequirements(
    type?: PayoutMethodType,
  ): GatewayAPIKeyObj | null {
    if (type == null) return null;
    switch (type) {
      case PayoutMethodType.Stripe:
        return {
          privateKey: 'API key',
        };

      case PayoutMethodType.BankTransfer:
        return null;
    }
  }
}
class GatewayAPIKeyObj {
  privateKey?: string;
  publicKey?: string;
  saltKey?: string;
  merchantId?: string;
}
