import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CreatePayoutSessionFieldsGQL,
  CreatePayoutSessionFieldsQuery,
  CreatePayoutSessionGQL,
} from '@ridy/admin-panel/generated/graphql';
import { RouterHelperService } from '../../../@services/router-helper.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, firstValueFrom, map } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-create-payout-session',
  templateUrl: './create-payout-session.component.html',
  styleUrls: ['./create-payout-session.component.scss'],
})
export class CreatePayoutSessionComponent {
  form: FormGroup = this.fb.group({
    minimumAmount: [0, Validators.required],
    currency: [null, Validators.required],
    payoutMethodIds: [[], Validators.required],
    description: [null, Validators.required],
  });

  query: Observable<ApolloQueryResult<CreatePayoutSessionFieldsQuery>> =
    this.route.data.pipe(map((data) => data.fields));

  constructor(
    private fb: FormBuilder,
    private createGQL: CreatePayoutSessionGQL,
    private routerHelper: RouterHelperService,
    private route: ActivatedRoute,
    private msg: NzMessageService,
  ) {}

  async submitForm() {
    try {
      await firstValueFrom(
        this.createGQL.mutate({
          input: this.form.value,
        }),
      );
      this.routerHelper.goToParent(this.route);
    } catch (e: any) {
      this.msg.error(e.message);
    }
  }
}
