import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreateGiftBachGQL } from '@ridy/admin-panel/generated/graphql';
import { RouterHelperService } from '@ridy/admin-panel/src/app/@services/router-helper.service';
import { CURRENCY_LIST } from '@ridy/admin-panel/src/app/currencies';
import { NzMessageService } from 'ng-zorro-antd/message';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-gift-batch-new',
  templateUrl: './gift-batch-new.component.html',
})
export class GiftBatchNewComponent {
  form = this.fb.group({
    id: [null],
    name: [null, Validators.required],
    currency: [null, Validators.required],
    amount: [0, Validators.required],
    quantity: [0, Validators.required],
    dates: [null],
  });
  currencies = CURRENCY_LIST;

  constructor(
    public route: ActivatedRoute,
    private message: NzMessageService,
    private fb: UntypedFormBuilder,
    private routerHelper: RouterHelperService,
    private createGQL: CreateGiftBachGQL,
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (data.coupon == null) return;
      data.coupon.data.coupon.dates = [
        data.coupon.data.coupon.startAt,
        data.coupon.data.coupon.expireAt,
      ];
      this.form.patchValue(data.coupon.data.coupon);
    });
  }

  async onSubmit() {
    const { id, dates, ..._input } = this.form.value;
    const availableFrom = dates[0].getTime();
    const expireAt = dates[1].getTime();
    const input = { ..._input };
    try {
      await firstValueFrom(
        this.createGQL.mutate({ input: { ...input, availableFrom, expireAt } }),
      );
      this.routerHelper.goToParent(this.route);
    } catch (error: any) {
      this.message.error(error.message);
    }
  }
}
