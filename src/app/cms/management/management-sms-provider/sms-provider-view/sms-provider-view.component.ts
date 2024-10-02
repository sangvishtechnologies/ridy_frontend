import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  CreateSmsProviderGQL,
  MarkSmsProviderAsDefaultGQL,
  SmsProviderType,
  UpdateSmsProviderGQL,
  ViewSmsProviderQuery,
} from '@ridy/admin-panel/generated/graphql';
import { RouterHelperService } from '@ridy/admin-panel/src/app/@services/router-helper.service';
import { environment } from '@ridy/admin-panel/src/environments/environment';
import { NzModalService } from 'ng-zorro-antd/modal';
import { firstValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-sms-provider-view',
  templateUrl: './sms-provider-view.component.html',
})
export class SMSProviderViewComponent implements OnInit, OnDestroy {
  constructor(
    public route: ActivatedRoute,
    private fb: UntypedFormBuilder,
    private updateGQL: UpdateSmsProviderGQL,
    private createGQL: CreateSmsProviderGQL,
    private markAsDefaultGQL: MarkSmsProviderAsDefaultGQL,
    private routerHelper: RouterHelperService,
    private modalService: NzModalService,
  ) {}

  form = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    type: [null, Validators.required],
    accountId: [null],
    authToken: [null],
    verificationTemplate: [null],
    fromNumber: [null],
    smsType: [null],
  });
  subscription?: Subscription;
  smsProviders = [
    SmsProviderType.Twilio,
    SmsProviderType.BroadNet,
    SmsProviderType.Plivo,
    SmsProviderType.Vonage,
    SmsProviderType.Pahappa,
  ];
  root = environment.root;
  jwt = localStorage.getItem('ridy_admin_token');

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data) => {
      const provider: ApolloQueryResult<ViewSmsProviderQuery> =
        data.smsProvider;
      this.form.patchValue(provider.data.smsProvider);
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  async onSubmit() {
    const { id, ...input } = this.form.value;
    if (id == null) {
      this.modalService.create({
        nzTitle: 'Default SMS Provider',
        nzContent: 'Do you want to set this as the default SMS provider?',
        nzOnOk: async () => {
          await firstValueFrom(
            this.createGQL.mutate({ input: { ...input, isDefault: true } }),
          );
          this.routerHelper.goToParent(this.route);
        },
        nzOnCancel: async () => {
          await firstValueFrom(this.createGQL.mutate({ input }));
          this.routerHelper.goToParent(this.route);
        },
      });
    } else {
      await firstValueFrom(this.updateGQL.mutate({ id, input }));
      this.routerHelper.goToParent(this.route);
    }
  }

  getProviderAPIRequirements(
    type?: SmsProviderType,
  ): SMSProviderAPIKeyObj | null {
    if (type == null) return null;
    switch (type) {
      case SmsProviderType.Twilio:
        return {
          accountId: 'Account SID',
          authToken: 'Auth Token',
          fromNumber: 'From Number',
          verificationTemplate: 'Verification Template',
        };

      case SmsProviderType.BroadNet:
        return {
          accountId: 'Username',
          authToken: 'Password',
          fromNumber: 'From Number',
          smsType: 'SMS Type',
          verificationTemplate: 'Verification Template',
        };

      case SmsProviderType.Plivo:
        return {
          accountId: 'Auth ID',
          authToken: 'Auth Token',
          fromNumber: 'Sender ID',
          verificationTemplate: 'Verification Template',
        };

      case SmsProviderType.Vonage:
        return {
          accountId: 'API Key',
          authToken: 'API Secret',
          fromNumber: 'From Number',
          verificationTemplate: 'Verification Template',
        };

      case SmsProviderType.Pahappa:
        return {
          accountId: 'Username',
          authToken: 'Password',
          fromNumber: 'Sender',
          verificationTemplate: 'Verification Template',
        };

      default:
        return null;
    }
  }

  async markAsDefault() {
    const id = this.form.get('id')?.value;
    if (id == null) return;
    await firstValueFrom(this.markAsDefaultGQL.mutate({ id }));
    this.routerHelper.goToParent(this.route);
  }
}
class SMSProviderAPIKeyObj {
  accountId?: string;
  authToken?: string;
  fromNumber?: string;
  verificationTemplate?: string;
  smsType?: string;
}
