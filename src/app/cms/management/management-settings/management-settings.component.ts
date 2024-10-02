import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';
import {
  UpdateConfigGQL,
  UpdatePasswordGQL,
} from '@ridy/admin-panel/generated/graphql';
import { Subscription, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-management-settings',
  templateUrl: './management-settings.component.html',
})
export class ManagementSettingsComponent implements OnInit, OnDestroy {
  form = this.fb.group({
    oldPassword: [null, Validators.required],
    newPassword: [null, Validators.required],
    newPasswordRepeat: [null, Validators.required],
  });

  formApiKey = this.fb.group({
    backendMapsAPIKey: [null, Validators.required],
    // adminPanelAPIKey: [null, Validators.required],
    twilioAccountSid: [null, Validators.required],
    twilioAuthToken: [null, Validators.required],
    twilioFromNumber: [null, Validators.required],
    twilioVerificationCodeSMSTemplate: [null, Validators.required],
  });

  subscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private message: NzMessageService,
    private updatePasswordGql: UpdatePasswordGQL,
    private updateConfigGql: UpdateConfigGQL,
    private fb: UntypedFormBuilder,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data) => {
      this.formApiKey.patchValue(data.data.data.currentConfiguration);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  async onSubmit() {
    if (this.form.value.newPassword != this.form.value.newPasswordRepeat) {
      this.message.error("Passwords don't match.");
      return;
    }
    try {
      await firstValueFrom(
        this.updatePasswordGql.mutate({
          input: {
            oldPassword: this.form.value.oldPassword,
            newPasswod: this.form.value.newPassword,
          },
        }),
      );
      this.message.success('Password Updated Successfully.');
      this.form.reset();
    } catch (error) {
      this.message.error('Action is not allowed.');
    }
  }

  async onSubmitApiKey() {
    try {
      await firstValueFrom(
        this.updateConfigGql.mutate({
          input: this.formApiKey.value,
        }),
      );
      this.message.success('API Key Updated Successfully.');
    } catch (error: any) {
      this.message.error(error.message);
    }
  }
}
