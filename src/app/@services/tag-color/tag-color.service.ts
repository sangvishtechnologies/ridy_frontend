import { Injectable } from '@angular/core';
import {
  ComplaintStatus,
  DriverStatus,
  OrderStatus,
  RiderStatus,
  SosStatus,
  TransactionStatus,
} from '@ridy/admin-panel/generated/graphql';
import { NzPresetColor, NzStatusColor } from 'ng-zorro-antd/core/color';

@Injectable()
export class TagColorService {
  getTransactionStatusStatusColor(
    status: TransactionStatus,
  ): NzStatusColor | NzPresetColor {
    switch (status) {
      case TransactionStatus.Processing:
        return 'blue';
      case TransactionStatus.Canceled:
        return 'orange';
      case TransactionStatus.Done:
        return 'green';
      case TransactionStatus.Rejected:
        return 'red';
    }
  }

  orderStatus(value: OrderStatus): NzStatusColor | NzPresetColor {
    switch (value) {
      case OrderStatus.Expired:
        return 'default';

      case OrderStatus.RiderCanceled:
      case OrderStatus.DriverCanceled:
      case OrderStatus.NotFound:
      case OrderStatus.NoCloseFound:
        return 'red';

      case OrderStatus.Booked:
        return 'orange';

      case OrderStatus.Finished:
        return 'green';

      default:
        return 'blue';
    }
  }

  boolean(value: boolean): NzStatusColor | NzPresetColor {
    return value ? 'green' : 'red';
  }

  driver(value: DriverStatus): NzStatusColor | NzPresetColor {
    switch (value) {
      case DriverStatus.Blocked:
      case DriverStatus.HardReject:
        return 'red';

      case DriverStatus.Online:
        return 'blue';

      case DriverStatus.InService:
        return 'green';

      case DriverStatus.WaitingDocuments:
      case DriverStatus.SoftReject:
      case DriverStatus.Offline:
        return 'default';

      case DriverStatus.PendingApproval:
        return 'orange';
    }
  }

  rider(value: RiderStatus): NzStatusColor | NzPresetColor {
    switch (value) {
      case RiderStatus.Disabled:
        return 'red';

      case RiderStatus.Enabled:
        return 'green';
    }
  }

  complaintStatus(status: ComplaintStatus): NzStatusColor | NzPresetColor {
    switch (status) {
      case ComplaintStatus.Resolved:
        return 'green';

      case ComplaintStatus.Submitted:
        return 'orange';

      case ComplaintStatus.UnderInvestigation:
        return 'blue';
    }
  }

  sosStatus(status: SosStatus): NzStatusColor | NzPresetColor {
    switch (status) {
      case SosStatus.Resolved:
        return 'green';

      case SosStatus.Submitted:
        return 'orange';

      case SosStatus.FalseAlarm:
        return 'default';

      case SosStatus.UnderReview:
        return 'blue';
    }
  }

  // requestBadge(value: RequestStatus) {
  //   switch (value) {
  //     case (RequestStatus.RiderCanceled):
  //     case (RequestStatus.DriverCanceled):
  //     case (RequestStatus.NotFound):
  //     case (RequestStatus.NoCloseFound):
  //     case (RequestStatus.Expired):
  //       return 'error';

  //     case (RequestStatus.Booked):
  //     case (RequestStatus.Started):
  //     case (RequestStatus.WaitingForPostPay):
  //     case (RequestStatus.WaitingForReview):
  //       return 'processing';

  //     case (RequestStatus.Finished):
  //       return 'success';

  //     default:
  //       return 'default';
  //   }

  // }
}
