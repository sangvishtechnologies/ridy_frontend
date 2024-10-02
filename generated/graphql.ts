import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Cursor for paging through collections */
  ConnectionCursor: { input: any; output: any; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AddEnabledServicesToDriverInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddFleetsToZonePriceInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddOptionsToServiceInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddRegionsToServiceInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AddServicesToZonePriceInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type Address = {
  __typename?: 'Address';
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location: Point;
  title: Scalars['String']['output'];
};

export type AddressConnection = {
  __typename?: 'AddressConnection';
  /** Array of edges. */
  edges: Array<AddressEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type AddressEdge = {
  __typename?: 'AddressEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Address */
  node: Address;
};

export type AddressFilter = {
  and?: InputMaybe<Array<AddressFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AddressFilter>>;
};

export type AddressSort = {
  direction: SortDirection;
  field: AddressSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AddressSortFields {
  Id = 'id'
}

export type Announcement = {
  __typename?: 'Announcement';
  description: Scalars['String']['output'];
  expireAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  startAt: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
  userType: Array<AnnouncementUserType>;
};

export type AnnouncementConnection = {
  __typename?: 'AnnouncementConnection';
  /** Array of nodes. */
  nodes: Array<Announcement>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type AnnouncementDeleteResponse = {
  __typename?: 'AnnouncementDeleteResponse';
  description?: Maybe<Scalars['String']['output']>;
  expireAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  startAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userType?: Maybe<Array<AnnouncementUserType>>;
};

export type AnnouncementFilter = {
  and?: InputMaybe<Array<AnnouncementFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AnnouncementFilter>>;
};

export type AnnouncementInput = {
  description: Scalars['String']['input'];
  expireAt: Scalars['DateTime']['input'];
  startAt: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
  userType: Array<AnnouncementUserType>;
};

export type AnnouncementSort = {
  direction: SortDirection;
  field: AnnouncementSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AnnouncementSortFields {
  Id = 'id'
}

export enum AnnouncementUserType {
  Driver = 'Driver',
  Operator = 'Operator',
  Rider = 'Rider'
}

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CalculateFareDto = {
  __typename?: 'CalculateFareDTO';
  currency: Scalars['String']['output'];
  distance: Scalars['Float']['output'];
  duration: Scalars['Float']['output'];
  error?: Maybe<CalculateFareError>;
  services: Array<ServiceCategoryWithCost>;
};

export enum CalculateFareError {
  NoServiceInRegion = 'NoServiceInRegion',
  RegionUnsupported = 'RegionUnsupported'
}

export type CalculateFareInput = {
  points: Array<PointInput>;
  riderId: Scalars['ID']['input'];
};

export type CarColor = {
  __typename?: 'CarColor';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CarColorDeleteResponse = {
  __typename?: 'CarColorDeleteResponse';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CarColorFilter = {
  and?: InputMaybe<Array<CarColorFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CarColorFilter>>;
};

export type CarColorInput = {
  name: Scalars['String']['input'];
};

export type CarColorSort = {
  direction: SortDirection;
  field: CarColorSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CarColorSortFields {
  Id = 'id'
}

export type CarModel = {
  __typename?: 'CarModel';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CarModelConnection = {
  __typename?: 'CarModelConnection';
  /** Array of nodes. */
  nodes: Array<CarModel>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CarModelDeleteResponse = {
  __typename?: 'CarModelDeleteResponse';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CarModelFilter = {
  and?: InputMaybe<Array<CarModelFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CarModelFilter>>;
};

export type CarModelInput = {
  name: Scalars['String']['input'];
};

export type CarModelSort = {
  direction: SortDirection;
  field: CarModelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CarModelSortFields {
  Id = 'id'
}

export enum ChartTimeframe {
  Daily = 'Daily',
  Monthly = 'Monthly',
  Weekly = 'Weekly',
  Yearly = 'Yearly'
}

export type Complaint = {
  __typename?: 'Complaint';
  activities: Array<ComplaintActivity>;
  activitiesAggregate: Array<ComplaintActivitiesAggregateResponse>;
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inscriptionTimestamp: Scalars['DateTime']['output'];
  order: Order;
  requestId: Scalars['ID']['output'];
  requestedByDriver: Scalars['Boolean']['output'];
  status: ComplaintStatus;
  subject: Scalars['String']['output'];
};


export type ComplaintActivitiesArgs = {
  filter?: ComplaintActivityFilter;
  sorting?: Array<ComplaintActivitySort>;
};


export type ComplaintActivitiesAggregateArgs = {
  filter?: InputMaybe<ComplaintActivityAggregateFilter>;
};

export type ComplaintActivitiesAggregateGroupBy = {
  __typename?: 'ComplaintActivitiesAggregateGroupBy';
  complaintId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ComplaintActivitiesAggregateResponse = {
  __typename?: 'ComplaintActivitiesAggregateResponse';
  avg?: Maybe<ComplaintActivitiesAvgAggregate>;
  count?: Maybe<ComplaintActivitiesCountAggregate>;
  groupBy?: Maybe<ComplaintActivitiesAggregateGroupBy>;
  max?: Maybe<ComplaintActivitiesMaxAggregate>;
  min?: Maybe<ComplaintActivitiesMinAggregate>;
  sum?: Maybe<ComplaintActivitiesSumAggregate>;
};

export type ComplaintActivitiesAvgAggregate = {
  __typename?: 'ComplaintActivitiesAvgAggregate';
  complaintId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type ComplaintActivitiesCountAggregate = {
  __typename?: 'ComplaintActivitiesCountAggregate';
  complaintId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type ComplaintActivitiesMaxAggregate = {
  __typename?: 'ComplaintActivitiesMaxAggregate';
  complaintId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ComplaintActivitiesMinAggregate = {
  __typename?: 'ComplaintActivitiesMinAggregate';
  complaintId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ComplaintActivitiesSumAggregate = {
  __typename?: 'ComplaintActivitiesSumAggregate';
  complaintId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type ComplaintActivity = {
  __typename?: 'ComplaintActivity';
  actor: Operator;
  assignedTo?: Maybe<Operator>;
  comment?: Maybe<Scalars['String']['output']>;
  complaintId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  type: ComplaintActivityType;
};

export type ComplaintActivityAggregateFilter = {
  and?: InputMaybe<Array<ComplaintActivityAggregateFilter>>;
  complaintId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ComplaintActivityAggregateFilter>>;
};

export type ComplaintActivityFilter = {
  and?: InputMaybe<Array<ComplaintActivityFilter>>;
  complaintId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ComplaintActivityFilter>>;
};

export type ComplaintActivitySort = {
  direction: SortDirection;
  field: ComplaintActivitySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ComplaintActivitySortFields {
  ComplaintId = 'complaintId',
  Id = 'id'
}

export enum ComplaintActivityType {
  AssignToOperator = 'AssignToOperator',
  Resolved = 'Resolved',
  Update = 'Update'
}

export type ComplaintAggregateFilter = {
  and?: InputMaybe<Array<ComplaintAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ComplaintAggregateFilter>>;
  requestId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<ComplaintStatusFilterComparison>;
};

export type ComplaintAggregateGroupBy = {
  __typename?: 'ComplaintAggregateGroupBy';
  id?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<ComplaintStatus>;
};

export type ComplaintAggregateResponse = {
  __typename?: 'ComplaintAggregateResponse';
  avg?: Maybe<ComplaintAvgAggregate>;
  count?: Maybe<ComplaintCountAggregate>;
  groupBy?: Maybe<ComplaintAggregateGroupBy>;
  max?: Maybe<ComplaintMaxAggregate>;
  min?: Maybe<ComplaintMinAggregate>;
  sum?: Maybe<ComplaintSumAggregate>;
};

export type ComplaintAvgAggregate = {
  __typename?: 'ComplaintAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  requestId?: Maybe<Scalars['Float']['output']>;
};

export type ComplaintConnection = {
  __typename?: 'ComplaintConnection';
  /** Array of nodes. */
  nodes: Array<Complaint>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ComplaintCountAggregate = {
  __typename?: 'ComplaintCountAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  requestId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type ComplaintFilter = {
  and?: InputMaybe<Array<ComplaintFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ComplaintFilter>>;
  requestId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<ComplaintStatusFilterComparison>;
};

export type ComplaintMaxAggregate = {
  __typename?: 'ComplaintMaxAggregate';
  id?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<ComplaintStatus>;
};

export type ComplaintMinAggregate = {
  __typename?: 'ComplaintMinAggregate';
  id?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<ComplaintStatus>;
};

export type ComplaintSort = {
  direction: SortDirection;
  field: ComplaintSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ComplaintSortFields {
  Id = 'id',
  RequestId = 'requestId',
  Status = 'status'
}

export enum ComplaintStatus {
  Resolved = 'Resolved',
  Submitted = 'Submitted',
  UnderInvestigation = 'UnderInvestigation'
}

export type ComplaintStatusFilterComparison = {
  eq?: InputMaybe<ComplaintStatus>;
  gt?: InputMaybe<ComplaintStatus>;
  gte?: InputMaybe<ComplaintStatus>;
  iLike?: InputMaybe<ComplaintStatus>;
  in?: InputMaybe<Array<ComplaintStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<ComplaintStatus>;
  lt?: InputMaybe<ComplaintStatus>;
  lte?: InputMaybe<ComplaintStatus>;
  neq?: InputMaybe<ComplaintStatus>;
  notILike?: InputMaybe<ComplaintStatus>;
  notIn?: InputMaybe<Array<ComplaintStatus>>;
  notLike?: InputMaybe<ComplaintStatus>;
};

export type ComplaintSumAggregate = {
  __typename?: 'ComplaintSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  requestId?: Maybe<Scalars['Float']['output']>;
};

export type Coupon = {
  __typename?: 'Coupon';
  allowedServices: Array<Service>;
  code: Scalars['String']['output'];
  creditGift: Scalars['Float']['output'];
  description: Scalars['String']['output'];
  discountFlat: Scalars['Int']['output'];
  discountPercent: Scalars['Int']['output'];
  expireAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  isFirstTravelOnly: Scalars['Boolean']['output'];
  manyTimesUserCanUse: Scalars['Int']['output'];
  manyUsersCanUse: Scalars['Int']['output'];
  maximumCost: Scalars['Float']['output'];
  minimumCost: Scalars['Float']['output'];
  startAt: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};


export type CouponAllowedServicesArgs = {
  filter?: ServiceFilter;
  sorting?: Array<ServiceSort>;
};

export type CouponConnection = {
  __typename?: 'CouponConnection';
  /** Array of nodes. */
  nodes: Array<Coupon>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type CouponDeleteResponse = {
  __typename?: 'CouponDeleteResponse';
  code?: Maybe<Scalars['String']['output']>;
  creditGift?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountFlat?: Maybe<Scalars['Int']['output']>;
  discountPercent?: Maybe<Scalars['Int']['output']>;
  expireAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  isFirstTravelOnly?: Maybe<Scalars['Boolean']['output']>;
  manyTimesUserCanUse?: Maybe<Scalars['Int']['output']>;
  manyUsersCanUse?: Maybe<Scalars['Int']['output']>;
  maximumCost?: Maybe<Scalars['Float']['output']>;
  minimumCost?: Maybe<Scalars['Float']['output']>;
  startAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CouponFilter = {
  and?: InputMaybe<Array<CouponFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CouponFilter>>;
};

export type CouponInput = {
  code: Scalars['String']['input'];
  creditGift: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  discountFlat: Scalars['Int']['input'];
  discountPercent: Scalars['Int']['input'];
  expireAt: Scalars['DateTime']['input'];
  isEnabled: Scalars['Boolean']['input'];
  isFirstTravelOnly: Scalars['Boolean']['input'];
  manyTimesUserCanUse: Scalars['Int']['input'];
  manyUsersCanUse: Scalars['Int']['input'];
  maximumCost: Scalars['Float']['input'];
  minimumCost: Scalars['Float']['input'];
  startAt: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
};

export type CouponSort = {
  direction: SortDirection;
  field: CouponSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CouponSortFields {
  Id = 'id'
}

export type CreateComplaintActivity = {
  comment?: InputMaybe<Scalars['String']['input']>;
  complaintId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  type: ComplaintActivityType;
};

export type CreateGiftBatchInput = {
  amount: Scalars['Float']['input'];
  availableFrom?: InputMaybe<Scalars['DateTime']['input']>;
  currency: Scalars['String']['input'];
  expireAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};

export type CreateManyComplaintActivitiesInput = {
  /** Array of records to create */
  complaintActivities: Array<CreateComplaintActivity>;
};

export type CreateManySmsProvidersInput = {
  /** Array of records to create */
  sMSProviders: Array<SmsProviderInput>;
};

export type CreateOneAnnouncementInput = {
  /** The record to create */
  announcement: AnnouncementInput;
};

export type CreateOneCarColorInput = {
  /** The record to create */
  carColor: CarColorInput;
};

export type CreateOneCarModelInput = {
  /** The record to create */
  carModel: CarModelInput;
};

export type CreateOneComplaintActivityInput = {
  /** The record to create */
  complaintActivity: CreateComplaintActivity;
};

export type CreateOneCouponInput = {
  /** The record to create */
  coupon: CouponInput;
};

export type CreateOneDriverInput = {
  /** The record to create */
  driver: UpdateDriverInput;
};

export type CreateOneDriverTransactionInput = {
  /** The record to create */
  driverTransaction: DriverTransactionInput;
};

export type CreateOneFeedbackParameterInput = {
  /** The record to create */
  feedbackParameter: FeedbackParameterInput;
};

export type CreateOneFleetInput = {
  /** The record to create */
  fleet: FleetInput;
};

export type CreateOneOperatorInput = {
  /** The record to create */
  operator: CreateOperatorInput;
};

export type CreateOneOperatorRoleInput = {
  /** The record to create */
  operatorRole: OperatorRoleInput;
};

export type CreateOneOrderCancelReasonInput = {
  /** The record to create */
  orderCancelReason: OrderCancelReasonInput;
};

export type CreateOnePaymentGatewayInput = {
  /** The record to create */
  paymentGateway: PaymentGatewayInput;
};

export type CreateOnePayoutMethodInput = {
  /** The record to create */
  payoutMethod: CreatePayoutMethodInput;
};

export type CreateOneProviderTransactionInput = {
  /** The record to create */
  providerTransaction: ProviderTransactionInput;
};

export type CreateOneRegionInput = {
  /** The record to create */
  region: RegionInput;
};

export type CreateOneRewardInput = {
  /** The record to create */
  reward: CreateReward;
};

export type CreateOneRiderAddressInput = {
  /** The record to create */
  riderAddress: CreateRiderAddress;
};

export type CreateOneRiderInput = {
  /** The record to create */
  rider: RiderInput;
};

export type CreateOneRiderTransactionInput = {
  /** The record to create */
  riderTransaction: CreateRiderTransaction;
};

export type CreateOneSmsProviderInput = {
  /** The record to create */
  sMSProvider: SmsProviderInput;
};

export type CreateOneSosActivityInput = {
  /** The record to create */
  sOSActivity: CreateSosAcitivtyInput;
};

export type CreateOneServiceCategoryInput = {
  /** The record to create */
  serviceCategory: ServiceCategoryInput;
};

export type CreateOneServiceInput = {
  /** The record to create */
  service: ServiceInput;
};

export type CreateOneServiceOptionInput = {
  /** The record to create */
  serviceOption: ServiceOptionInput;
};

export type CreateOneZonePriceInput = {
  /** The record to create */
  zonePrice: ZonePriceInput;
};

export type CreateOperatorInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleId: Scalars['ID']['input'];
  userName: Scalars['String']['input'];
};

export type CreateOrderInput = {
  addresses: Array<Scalars['String']['input']>;
  intervalMinutes: Scalars['Int']['input'];
  points: Array<PointInput>;
  riderId: Scalars['ID']['input'];
  serviceId: Scalars['ID']['input'];
};

export type CreatePayoutMethodInput = {
  currency: Scalars['String']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  mediaId?: InputMaybe<Scalars['Float']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  privateKey?: InputMaybe<Scalars['String']['input']>;
  publicKey?: InputMaybe<Scalars['String']['input']>;
  saltKey?: InputMaybe<Scalars['String']['input']>;
  type: PayoutMethodType;
};

export type CreatePayoutSessionInput = {
  currency: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  minimumAmount: Scalars['Float']['input'];
  payoutMethodIds: Array<Scalars['ID']['input']>;
};

export type CreateReward = {
  appType: RewardAppType;
  beneficiary: RewardBeneficiary;
  conditionTripCountsLessThan?: InputMaybe<Scalars['Float']['input']>;
  conditionUserNumberFirstDigits?: InputMaybe<Array<Scalars['String']['input']>>;
  creditCurrency?: InputMaybe<Scalars['String']['input']>;
  creditGift: Scalars['Float']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  event: RewardEvent;
  id: Scalars['ID']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  tripFeePercentGift?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateRiderAddress = {
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  location: PointInput;
  riderId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  type: RiderAddressType;
};

export type CreateRiderTransaction = {
  action: TransactionAction;
  amount: Scalars['Float']['input'];
  createdAt: Scalars['DateTime']['input'];
  currency: Scalars['String']['input'];
  deductType?: InputMaybe<RiderDeductTransactionType>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  operatorId?: InputMaybe<Scalars['ID']['input']>;
  paymentGatewayId?: InputMaybe<Scalars['ID']['input']>;
  rechargeType?: InputMaybe<RiderRechargeTransactionType>;
  refrenceNumber?: InputMaybe<Scalars['String']['input']>;
  requestId?: InputMaybe<Scalars['ID']['input']>;
  riderId: Scalars['ID']['input'];
  status: TransactionStatus;
};

export type CreateSosAcitivtyInput = {
  action: SosActivityAction;
  note?: InputMaybe<Scalars['String']['input']>;
  sosId: Scalars['ID']['input'];
};

export type CurrentConfiguration = {
  __typename?: 'CurrentConfiguration';
  adminPanelAPIKey?: Maybe<Scalars['String']['output']>;
  backendMapsAPIKey?: Maybe<Scalars['String']['output']>;
  firebaseProjectPrivateKey?: Maybe<Scalars['String']['output']>;
  purchaseCode?: Maybe<Scalars['String']['output']>;
  twilioAccountSid?: Maybe<Scalars['String']['output']>;
  twilioAuthToken?: Maybe<Scalars['String']['output']>;
  twilioFromNumber?: Maybe<Scalars['String']['output']>;
  twilioVerificationCodeSMSTemplate?: Maybe<Scalars['String']['output']>;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']['input']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']['input'];
  upper: Scalars['DateTime']['input'];
};

export type DateRangeMultiplier = {
  __typename?: 'DateRangeMultiplier';
  endDate: Scalars['Float']['output'];
  multiply: Scalars['Float']['output'];
  startDate: Scalars['Float']['output'];
};

export type DateRangeMultiplierInput = {
  endDate: Scalars['Float']['input'];
  multiply: Scalars['Float']['input'];
  startDate: Scalars['Float']['input'];
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int']['output'];
};

export type DeleteManySmsProvidersInput = {
  /** Filter to find records to delete */
  filter: SmsProviderDeleteFilter;
};

export type DeleteOneAnnouncementInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneCarColorInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneCarModelInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneCouponInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneFeedbackParameterInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneOrderCancelReasonInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOnePayoutMethodInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneRegionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneRewardInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneSmsProviderInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneServiceCategoryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneServiceInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneServiceOptionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneZonePriceInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DistanceMultiplier = {
  __typename?: 'DistanceMultiplier';
  distanceFrom: Scalars['Float']['output'];
  distanceTo: Scalars['Float']['output'];
  multiply: Scalars['Float']['output'];
};

export type DistanceMultiplierInput = {
  distanceFrom: Scalars['Float']['input'];
  distanceTo: Scalars['Float']['input'];
  multiply: Scalars['Float']['input'];
};

export type DistressSignal = {
  __typename?: 'DistressSignal';
  activities: Array<SosActivity>;
  activitiesAggregate: Array<DistressSignalActivitiesAggregateResponse>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  location?: Maybe<Point>;
  order: Order;
  requestId: Scalars['Float']['output'];
  status: SosStatus;
  submittedByRider: Scalars['Boolean']['output'];
};


export type DistressSignalActivitiesArgs = {
  filter?: SosActivityFilter;
  sorting?: Array<SosActivitySort>;
};


export type DistressSignalActivitiesAggregateArgs = {
  filter?: InputMaybe<SosActivityAggregateFilter>;
};

export type DistressSignalActivitiesAggregateGroupBy = {
  __typename?: 'DistressSignalActivitiesAggregateGroupBy';
  id?: Maybe<Scalars['ID']['output']>;
};

export type DistressSignalActivitiesAggregateResponse = {
  __typename?: 'DistressSignalActivitiesAggregateResponse';
  avg?: Maybe<DistressSignalActivitiesAvgAggregate>;
  count?: Maybe<DistressSignalActivitiesCountAggregate>;
  groupBy?: Maybe<DistressSignalActivitiesAggregateGroupBy>;
  max?: Maybe<DistressSignalActivitiesMaxAggregate>;
  min?: Maybe<DistressSignalActivitiesMinAggregate>;
  sum?: Maybe<DistressSignalActivitiesSumAggregate>;
};

export type DistressSignalActivitiesAvgAggregate = {
  __typename?: 'DistressSignalActivitiesAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type DistressSignalActivitiesCountAggregate = {
  __typename?: 'DistressSignalActivitiesCountAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type DistressSignalActivitiesMaxAggregate = {
  __typename?: 'DistressSignalActivitiesMaxAggregate';
  id?: Maybe<Scalars['ID']['output']>;
};

export type DistressSignalActivitiesMinAggregate = {
  __typename?: 'DistressSignalActivitiesMinAggregate';
  id?: Maybe<Scalars['ID']['output']>;
};

export type DistressSignalActivitiesSumAggregate = {
  __typename?: 'DistressSignalActivitiesSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type DistressSignalAggregateFilter = {
  and?: InputMaybe<Array<DistressSignalAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<DistressSignalAggregateFilter>>;
  status?: InputMaybe<SosStatusFilterComparison>;
};

export type DistressSignalAggregateGroupBy = {
  __typename?: 'DistressSignalAggregateGroupBy';
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<SosStatus>;
};

export type DistressSignalAggregateResponse = {
  __typename?: 'DistressSignalAggregateResponse';
  avg?: Maybe<DistressSignalAvgAggregate>;
  count?: Maybe<DistressSignalCountAggregate>;
  groupBy?: Maybe<DistressSignalAggregateGroupBy>;
  max?: Maybe<DistressSignalMaxAggregate>;
  min?: Maybe<DistressSignalMinAggregate>;
  sum?: Maybe<DistressSignalSumAggregate>;
};

export type DistressSignalAvgAggregate = {
  __typename?: 'DistressSignalAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type DistressSignalConnection = {
  __typename?: 'DistressSignalConnection';
  /** Array of nodes. */
  nodes: Array<DistressSignal>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DistressSignalCountAggregate = {
  __typename?: 'DistressSignalCountAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type DistressSignalFilter = {
  and?: InputMaybe<Array<DistressSignalFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<DistressSignalFilter>>;
  status?: InputMaybe<SosStatusFilterComparison>;
};

export type DistressSignalMaxAggregate = {
  __typename?: 'DistressSignalMaxAggregate';
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<SosStatus>;
};

export type DistressSignalMinAggregate = {
  __typename?: 'DistressSignalMinAggregate';
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<SosStatus>;
};

export type DistressSignalSort = {
  direction: SortDirection;
  field: DistressSignalSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DistressSignalSortFields {
  Id = 'id',
  Status = 'status'
}

export type DistressSignalSumAggregate = {
  __typename?: 'DistressSignalSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Driver = {
  __typename?: 'Driver';
  accountNumber?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  bankRoutingNumber?: Maybe<Scalars['String']['output']>;
  bankSwift?: Maybe<Scalars['String']['output']>;
  carColorId?: Maybe<Scalars['ID']['output']>;
  carId?: Maybe<Scalars['ID']['output']>;
  carPlate?: Maybe<Scalars['String']['output']>;
  carProductionYear?: Maybe<Scalars['Int']['output']>;
  certificateNumber?: Maybe<Scalars['String']['output']>;
  documents: Array<Media>;
  documentsAggregate: Array<DriverDocumentsAggregateResponse>;
  email?: Maybe<Scalars['String']['output']>;
  enabledServices: Array<Service>;
  enabledServicesAggregate: Array<DriverEnabledServicesAggregateResponse>;
  feedbacks: DriverFeedbacksConnection;
  feedbacksAggregate: Array<DriverFeedbacksAggregateResponse>;
  firstName?: Maybe<Scalars['String']['output']>;
  fleetId?: Maybe<Scalars['ID']['output']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lastSeenTimestamp?: Maybe<Scalars['DateTime']['output']>;
  media?: Maybe<Media>;
  mediaId?: Maybe<Scalars['ID']['output']>;
  mobileNumber: Scalars['String']['output'];
  orders: DriverOrdersConnection;
  ordersAggregate: Array<DriverOrdersAggregateResponse>;
  payoutAccounts: DriverPayoutAccountsConnection;
  payoutAccountsAggregate: Array<DriverPayoutAccountsAggregateResponse>;
  rating?: Maybe<Scalars['Float']['output']>;
  registrationTimestamp: Scalars['DateTime']['output'];
  reviewCount: Scalars['Float']['output'];
  softRejectionNote?: Maybe<Scalars['String']['output']>;
  status: DriverStatus;
  transactions: DriverTransactionsConnection;
  transactionsAggregate: Array<DriverTransactionsAggregateResponse>;
  wallets: Array<DriverWallet>;
  walletsAggregate: Array<DriverWalletsAggregateResponse>;
};


export type DriverDocumentsArgs = {
  filter?: MediaFilter;
  sorting?: Array<MediaSort>;
};


export type DriverDocumentsAggregateArgs = {
  filter?: InputMaybe<MediaAggregateFilter>;
};


export type DriverEnabledServicesArgs = {
  filter?: ServiceFilter;
  sorting?: Array<ServiceSort>;
};


export type DriverEnabledServicesAggregateArgs = {
  filter?: InputMaybe<ServiceAggregateFilter>;
};


export type DriverFeedbacksArgs = {
  filter?: FeedbackFilter;
  paging?: OffsetPaging;
  sorting?: Array<FeedbackSort>;
};


export type DriverFeedbacksAggregateArgs = {
  filter?: InputMaybe<FeedbackAggregateFilter>;
};


export type DriverOrdersArgs = {
  filter?: OrderFilter;
  paging?: OffsetPaging;
  sorting?: Array<OrderSort>;
};


export type DriverOrdersAggregateArgs = {
  filter?: InputMaybe<OrderAggregateFilter>;
};


export type DriverPayoutAccountsArgs = {
  filter?: PayoutAccountFilter;
  paging?: OffsetPaging;
  sorting?: Array<PayoutAccountSort>;
};


export type DriverPayoutAccountsAggregateArgs = {
  filter?: InputMaybe<PayoutAccountAggregateFilter>;
};


export type DriverTransactionsArgs = {
  filter?: DriverTransactionFilter;
  paging?: OffsetPaging;
  sorting?: Array<DriverTransactionSort>;
};


export type DriverTransactionsAggregateArgs = {
  filter?: InputMaybe<DriverTransactionAggregateFilter>;
};


export type DriverWalletsArgs = {
  filter?: DriverWalletFilter;
  sorting?: Array<DriverWalletSort>;
};


export type DriverWalletsAggregateArgs = {
  filter?: InputMaybe<DriverWalletAggregateFilter>;
};

export type DriverAggregateFilter = {
  and?: InputMaybe<Array<DriverAggregateFilter>>;
  fleetId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  mobileNumber?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DriverAggregateFilter>>;
  status?: InputMaybe<DriverStatusFilterComparison>;
};

export type DriverAggregateGroupBy = {
  __typename?: 'DriverAggregateGroupBy';
  fleetId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<DriverStatus>;
};

export type DriverAggregateResponse = {
  __typename?: 'DriverAggregateResponse';
  avg?: Maybe<DriverAvgAggregate>;
  count?: Maybe<DriverCountAggregate>;
  groupBy?: Maybe<DriverAggregateGroupBy>;
  max?: Maybe<DriverMaxAggregate>;
  min?: Maybe<DriverMinAggregate>;
  sum?: Maybe<DriverSumAggregate>;
};

export type DriverAvgAggregate = {
  __typename?: 'DriverAvgAggregate';
  fleetId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type DriverConnection = {
  __typename?: 'DriverConnection';
  /** Array of nodes. */
  nodes: Array<Driver>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DriverCountAggregate = {
  __typename?: 'DriverCountAggregate';
  fleetId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['Int']['output']>;
  mobileNumber?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export enum DriverDeductTransactionType {
  Commission = 'Commission',
  Correction = 'Correction',
  Withdraw = 'Withdraw'
}

export type DriverDocumentsAggregateGroupBy = {
  __typename?: 'DriverDocumentsAggregateGroupBy';
  id?: Maybe<Scalars['ID']['output']>;
};

export type DriverDocumentsAggregateResponse = {
  __typename?: 'DriverDocumentsAggregateResponse';
  avg?: Maybe<DriverDocumentsAvgAggregate>;
  count?: Maybe<DriverDocumentsCountAggregate>;
  groupBy?: Maybe<DriverDocumentsAggregateGroupBy>;
  max?: Maybe<DriverDocumentsMaxAggregate>;
  min?: Maybe<DriverDocumentsMinAggregate>;
  sum?: Maybe<DriverDocumentsSumAggregate>;
};

export type DriverDocumentsAvgAggregate = {
  __typename?: 'DriverDocumentsAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type DriverDocumentsCountAggregate = {
  __typename?: 'DriverDocumentsCountAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type DriverDocumentsMaxAggregate = {
  __typename?: 'DriverDocumentsMaxAggregate';
  id?: Maybe<Scalars['ID']['output']>;
};

export type DriverDocumentsMinAggregate = {
  __typename?: 'DriverDocumentsMinAggregate';
  id?: Maybe<Scalars['ID']['output']>;
};

export type DriverDocumentsSumAggregate = {
  __typename?: 'DriverDocumentsSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type DriverEnabledServicesAggregateGroupBy = {
  __typename?: 'DriverEnabledServicesAggregateGroupBy';
  categoryId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DriverEnabledServicesAggregateResponse = {
  __typename?: 'DriverEnabledServicesAggregateResponse';
  avg?: Maybe<DriverEnabledServicesAvgAggregate>;
  count?: Maybe<DriverEnabledServicesCountAggregate>;
  groupBy?: Maybe<DriverEnabledServicesAggregateGroupBy>;
  max?: Maybe<DriverEnabledServicesMaxAggregate>;
  min?: Maybe<DriverEnabledServicesMinAggregate>;
  sum?: Maybe<DriverEnabledServicesSumAggregate>;
};

export type DriverEnabledServicesAvgAggregate = {
  __typename?: 'DriverEnabledServicesAvgAggregate';
  categoryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type DriverEnabledServicesCountAggregate = {
  __typename?: 'DriverEnabledServicesCountAggregate';
  categoryId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type DriverEnabledServicesMaxAggregate = {
  __typename?: 'DriverEnabledServicesMaxAggregate';
  categoryId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DriverEnabledServicesMinAggregate = {
  __typename?: 'DriverEnabledServicesMinAggregate';
  categoryId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DriverEnabledServicesSumAggregate = {
  __typename?: 'DriverEnabledServicesSumAggregate';
  categoryId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type DriverFeedbacksAggregateGroupBy = {
  __typename?: 'DriverFeedbacksAggregateGroupBy';
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
};

export type DriverFeedbacksAggregateResponse = {
  __typename?: 'DriverFeedbacksAggregateResponse';
  avg?: Maybe<DriverFeedbacksAvgAggregate>;
  count?: Maybe<DriverFeedbacksCountAggregate>;
  groupBy?: Maybe<DriverFeedbacksAggregateGroupBy>;
  max?: Maybe<DriverFeedbacksMaxAggregate>;
  min?: Maybe<DriverFeedbacksMinAggregate>;
  sum?: Maybe<DriverFeedbacksSumAggregate>;
};

export type DriverFeedbacksAvgAggregate = {
  __typename?: 'DriverFeedbacksAvgAggregate';
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  requestId?: Maybe<Scalars['Float']['output']>;
};

export type DriverFeedbacksConnection = {
  __typename?: 'DriverFeedbacksConnection';
  /** Array of nodes. */
  nodes: Array<Feedback>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DriverFeedbacksCountAggregate = {
  __typename?: 'DriverFeedbacksCountAggregate';
  driverId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  requestId?: Maybe<Scalars['Int']['output']>;
};

export type DriverFeedbacksMaxAggregate = {
  __typename?: 'DriverFeedbacksMaxAggregate';
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
};

export type DriverFeedbacksMinAggregate = {
  __typename?: 'DriverFeedbacksMinAggregate';
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
};

export type DriverFeedbacksSumAggregate = {
  __typename?: 'DriverFeedbacksSumAggregate';
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  requestId?: Maybe<Scalars['Float']['output']>;
};

export type DriverFilter = {
  and?: InputMaybe<Array<DriverFilter>>;
  fleetId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  mobileNumber?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DriverFilter>>;
  status?: InputMaybe<DriverStatusFilterComparison>;
};

export type DriverMaxAggregate = {
  __typename?: 'DriverMaxAggregate';
  fleetId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<DriverStatus>;
};

export type DriverMinAggregate = {
  __typename?: 'DriverMinAggregate';
  fleetId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  status?: Maybe<DriverStatus>;
};

export type DriverOrdersAggregateGroupBy = {
  __typename?: 'DriverOrdersAggregateGroupBy';
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  riderId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<OrderStatus>;
};

export type DriverOrdersAggregateResponse = {
  __typename?: 'DriverOrdersAggregateResponse';
  avg?: Maybe<DriverOrdersAvgAggregate>;
  count?: Maybe<DriverOrdersCountAggregate>;
  groupBy?: Maybe<DriverOrdersAggregateGroupBy>;
  max?: Maybe<DriverOrdersMaxAggregate>;
  min?: Maybe<DriverOrdersMinAggregate>;
  sum?: Maybe<DriverOrdersSumAggregate>;
};

export type DriverOrdersAvgAggregate = {
  __typename?: 'DriverOrdersAvgAggregate';
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  riderId?: Maybe<Scalars['Float']['output']>;
};

export type DriverOrdersConnection = {
  __typename?: 'DriverOrdersConnection';
  /** Array of nodes. */
  nodes: Array<Order>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DriverOrdersCountAggregate = {
  __typename?: 'DriverOrdersCountAggregate';
  createdOn?: Maybe<Scalars['Int']['output']>;
  driverId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  riderId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type DriverOrdersMaxAggregate = {
  __typename?: 'DriverOrdersMaxAggregate';
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  riderId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<OrderStatus>;
};

export type DriverOrdersMinAggregate = {
  __typename?: 'DriverOrdersMinAggregate';
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  riderId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<OrderStatus>;
};

export type DriverOrdersSumAggregate = {
  __typename?: 'DriverOrdersSumAggregate';
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  riderId?: Maybe<Scalars['Float']['output']>;
};

export type DriverPayoutAccountsAggregateGroupBy = {
  __typename?: 'DriverPayoutAccountsAggregateGroupBy';
  id?: Maybe<Scalars['ID']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
};

export type DriverPayoutAccountsAggregateResponse = {
  __typename?: 'DriverPayoutAccountsAggregateResponse';
  avg?: Maybe<DriverPayoutAccountsAvgAggregate>;
  count?: Maybe<DriverPayoutAccountsCountAggregate>;
  groupBy?: Maybe<DriverPayoutAccountsAggregateGroupBy>;
  max?: Maybe<DriverPayoutAccountsMaxAggregate>;
  min?: Maybe<DriverPayoutAccountsMinAggregate>;
  sum?: Maybe<DriverPayoutAccountsSumAggregate>;
};

export type DriverPayoutAccountsAvgAggregate = {
  __typename?: 'DriverPayoutAccountsAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type DriverPayoutAccountsConnection = {
  __typename?: 'DriverPayoutAccountsConnection';
  /** Array of nodes. */
  nodes: Array<PayoutAccount>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DriverPayoutAccountsCountAggregate = {
  __typename?: 'DriverPayoutAccountsCountAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  isDefault?: Maybe<Scalars['Int']['output']>;
};

export type DriverPayoutAccountsMaxAggregate = {
  __typename?: 'DriverPayoutAccountsMaxAggregate';
  id?: Maybe<Scalars['ID']['output']>;
};

export type DriverPayoutAccountsMinAggregate = {
  __typename?: 'DriverPayoutAccountsMinAggregate';
  id?: Maybe<Scalars['ID']['output']>;
};

export type DriverPayoutAccountsSumAggregate = {
  __typename?: 'DriverPayoutAccountsSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export enum DriverRechargeTransactionType {
  BankTransfer = 'BankTransfer',
  Gift = 'Gift',
  InAppPayment = 'InAppPayment',
  OrderFee = 'OrderFee'
}

export type DriverSort = {
  direction: SortDirection;
  field: DriverSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DriverSortFields {
  FleetId = 'fleetId',
  Id = 'id',
  LastName = 'lastName',
  MobileNumber = 'mobileNumber',
  Status = 'status'
}

export enum DriverStatus {
  Blocked = 'Blocked',
  HardReject = 'HardReject',
  InService = 'InService',
  Offline = 'Offline',
  Online = 'Online',
  PendingApproval = 'PendingApproval',
  SoftReject = 'SoftReject',
  WaitingDocuments = 'WaitingDocuments'
}

export type DriverStatusFilterComparison = {
  eq?: InputMaybe<DriverStatus>;
  gt?: InputMaybe<DriverStatus>;
  gte?: InputMaybe<DriverStatus>;
  iLike?: InputMaybe<DriverStatus>;
  in?: InputMaybe<Array<DriverStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<DriverStatus>;
  lt?: InputMaybe<DriverStatus>;
  lte?: InputMaybe<DriverStatus>;
  neq?: InputMaybe<DriverStatus>;
  notILike?: InputMaybe<DriverStatus>;
  notIn?: InputMaybe<Array<DriverStatus>>;
  notLike?: InputMaybe<DriverStatus>;
};

export type DriverSumAggregate = {
  __typename?: 'DriverSumAggregate';
  fleetId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type DriverTransaction = {
  __typename?: 'DriverTransaction';
  action: TransactionAction;
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  deductType?: Maybe<DriverDeductTransactionType>;
  description?: Maybe<Scalars['String']['output']>;
  driver?: Maybe<Driver>;
  driverId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  operator?: Maybe<Operator>;
  operatorId?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccount?: Maybe<PayoutAccount>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  rechargeType?: Maybe<DriverRechargeTransactionType>;
  refrenceNumber?: Maybe<Scalars['String']['output']>;
  requestId?: Maybe<Scalars['Float']['output']>;
  status: TransactionStatus;
};

export type DriverTransactionAggregateFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<DriverTransactionAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  driverId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<DriverTransactionAggregateFilter>>;
  paymentGatewayId?: InputMaybe<IdFilterComparison>;
  payoutAccountId?: InputMaybe<IdFilterComparison>;
  payoutMethodId?: InputMaybe<IdFilterComparison>;
  payoutSessionId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<TransactionStatusFilterComparison>;
};

export type DriverTransactionAggregateGroupBy = {
  __typename?: 'DriverTransactionAggregateGroupBy';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<TransactionStatus>;
};


export type DriverTransactionAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};

export type DriverTransactionAggregateResponse = {
  __typename?: 'DriverTransactionAggregateResponse';
  avg?: Maybe<DriverTransactionAvgAggregate>;
  count?: Maybe<DriverTransactionCountAggregate>;
  groupBy?: Maybe<DriverTransactionAggregateGroupBy>;
  max?: Maybe<DriverTransactionMaxAggregate>;
  min?: Maybe<DriverTransactionMinAggregate>;
  sum?: Maybe<DriverTransactionSumAggregate>;
};

export type DriverTransactionAvgAggregate = {
  __typename?: 'DriverTransactionAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  paymentGatewayId?: Maybe<Scalars['Float']['output']>;
  payoutAccountId?: Maybe<Scalars['Float']['output']>;
  payoutMethodId?: Maybe<Scalars['Float']['output']>;
  payoutSessionId?: Maybe<Scalars['Float']['output']>;
};

export type DriverTransactionConnection = {
  __typename?: 'DriverTransactionConnection';
  /** Array of nodes. */
  nodes: Array<DriverTransaction>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DriverTransactionCountAggregate = {
  __typename?: 'DriverTransactionCountAggregate';
  amount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  driverId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  paymentGatewayId?: Maybe<Scalars['Int']['output']>;
  payoutAccountId?: Maybe<Scalars['Int']['output']>;
  payoutMethodId?: Maybe<Scalars['Int']['output']>;
  payoutSessionId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type DriverTransactionFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<DriverTransactionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  driverId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<DriverTransactionFilter>>;
  paymentGatewayId?: InputMaybe<IdFilterComparison>;
  payoutAccountId?: InputMaybe<IdFilterComparison>;
  payoutMethodId?: InputMaybe<IdFilterComparison>;
  payoutSessionId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<TransactionStatusFilterComparison>;
};

export type DriverTransactionInput = {
  action: TransactionAction;
  amount: Scalars['Float']['input'];
  currency: Scalars['String']['input'];
  deductType?: InputMaybe<DriverDeductTransactionType>;
  description?: InputMaybe<Scalars['String']['input']>;
  driverId: Scalars['ID']['input'];
  rechargeType?: InputMaybe<DriverRechargeTransactionType>;
  refrenceNumber?: InputMaybe<Scalars['String']['input']>;
};

export type DriverTransactionMaxAggregate = {
  __typename?: 'DriverTransactionMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<TransactionStatus>;
};

export type DriverTransactionMinAggregate = {
  __typename?: 'DriverTransactionMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<TransactionStatus>;
};

export type DriverTransactionSort = {
  direction: SortDirection;
  field: DriverTransactionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DriverTransactionSortFields {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  DriverId = 'driverId',
  Id = 'id',
  PaymentGatewayId = 'paymentGatewayId',
  PayoutAccountId = 'payoutAccountId',
  PayoutMethodId = 'payoutMethodId',
  PayoutSessionId = 'payoutSessionId',
  Status = 'status'
}

export type DriverTransactionSumAggregate = {
  __typename?: 'DriverTransactionSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  paymentGatewayId?: Maybe<Scalars['Float']['output']>;
  payoutAccountId?: Maybe<Scalars['Float']['output']>;
  payoutMethodId?: Maybe<Scalars['Float']['output']>;
  payoutSessionId?: Maybe<Scalars['Float']['output']>;
};

export type DriverTransactionsAggregateGroupBy = {
  __typename?: 'DriverTransactionsAggregateGroupBy';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<TransactionStatus>;
};

export type DriverTransactionsAggregateResponse = {
  __typename?: 'DriverTransactionsAggregateResponse';
  avg?: Maybe<DriverTransactionsAvgAggregate>;
  count?: Maybe<DriverTransactionsCountAggregate>;
  groupBy?: Maybe<DriverTransactionsAggregateGroupBy>;
  max?: Maybe<DriverTransactionsMaxAggregate>;
  min?: Maybe<DriverTransactionsMinAggregate>;
  sum?: Maybe<DriverTransactionsSumAggregate>;
};

export type DriverTransactionsAvgAggregate = {
  __typename?: 'DriverTransactionsAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  paymentGatewayId?: Maybe<Scalars['Float']['output']>;
  payoutAccountId?: Maybe<Scalars['Float']['output']>;
  payoutMethodId?: Maybe<Scalars['Float']['output']>;
  payoutSessionId?: Maybe<Scalars['Float']['output']>;
};

export type DriverTransactionsConnection = {
  __typename?: 'DriverTransactionsConnection';
  /** Array of nodes. */
  nodes: Array<DriverTransaction>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DriverTransactionsCountAggregate = {
  __typename?: 'DriverTransactionsCountAggregate';
  amount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  driverId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  paymentGatewayId?: Maybe<Scalars['Int']['output']>;
  payoutAccountId?: Maybe<Scalars['Int']['output']>;
  payoutMethodId?: Maybe<Scalars['Int']['output']>;
  payoutSessionId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type DriverTransactionsMaxAggregate = {
  __typename?: 'DriverTransactionsMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<TransactionStatus>;
};

export type DriverTransactionsMinAggregate = {
  __typename?: 'DriverTransactionsMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<TransactionStatus>;
};

export type DriverTransactionsSumAggregate = {
  __typename?: 'DriverTransactionsSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  paymentGatewayId?: Maybe<Scalars['Float']['output']>;
  payoutAccountId?: Maybe<Scalars['Float']['output']>;
  payoutMethodId?: Maybe<Scalars['Float']['output']>;
  payoutSessionId?: Maybe<Scalars['Float']['output']>;
};

export type DriverWallet = {
  __typename?: 'DriverWallet';
  balance: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  driver?: Maybe<Driver>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
};

export type DriverWalletAggregateFilter = {
  and?: InputMaybe<Array<DriverWalletAggregateFilter>>;
  balance?: InputMaybe<FloatFieldComparison>;
  currency?: InputMaybe<StringFieldComparison>;
  driverId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<DriverWalletAggregateFilter>>;
};

export type DriverWalletConnection = {
  __typename?: 'DriverWalletConnection';
  /** Array of nodes. */
  nodes: Array<DriverWallet>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type DriverWalletFilter = {
  and?: InputMaybe<Array<DriverWalletFilter>>;
  balance?: InputMaybe<FloatFieldComparison>;
  currency?: InputMaybe<StringFieldComparison>;
  driverId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<DriverWalletFilter>>;
};

export type DriverWalletSort = {
  direction: SortDirection;
  field: DriverWalletSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DriverWalletSortFields {
  Balance = 'balance',
  Currency = 'currency',
  DriverId = 'driverId',
  Id = 'id'
}

export type DriverWalletsAggregateGroupBy = {
  __typename?: 'DriverWalletsAggregateGroupBy';
  balance?: Maybe<Scalars['Float']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DriverWalletsAggregateResponse = {
  __typename?: 'DriverWalletsAggregateResponse';
  avg?: Maybe<DriverWalletsAvgAggregate>;
  count?: Maybe<DriverWalletsCountAggregate>;
  groupBy?: Maybe<DriverWalletsAggregateGroupBy>;
  max?: Maybe<DriverWalletsMaxAggregate>;
  min?: Maybe<DriverWalletsMinAggregate>;
  sum?: Maybe<DriverWalletsSumAggregate>;
};

export type DriverWalletsAvgAggregate = {
  __typename?: 'DriverWalletsAvgAggregate';
  balance?: Maybe<Scalars['Float']['output']>;
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type DriverWalletsCountAggregate = {
  __typename?: 'DriverWalletsCountAggregate';
  balance?: Maybe<Scalars['Int']['output']>;
  currency?: Maybe<Scalars['Int']['output']>;
  driverId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type DriverWalletsMaxAggregate = {
  __typename?: 'DriverWalletsMaxAggregate';
  balance?: Maybe<Scalars['Float']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DriverWalletsMinAggregate = {
  __typename?: 'DriverWalletsMinAggregate';
  balance?: Maybe<Scalars['Float']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DriverWalletsSumAggregate = {
  __typename?: 'DriverWalletsSumAggregate';
  balance?: Maybe<Scalars['Float']['output']>;
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type ExportArgs = {
  filters?: InputMaybe<Array<ExportFilterArg>>;
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
  sort?: InputMaybe<ExportSortArg>;
  table: ExportTable;
  type: ExportType;
};

export type ExportFilterArg = {
  field: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ExportResult = {
  __typename?: 'ExportResult';
  url: Scalars['String']['output'];
};

export type ExportSessionToCsvInput = {
  payoutMethodId?: InputMaybe<Scalars['ID']['input']>;
  payoutSessionId: Scalars['ID']['input'];
};

export type ExportSortArg = {
  direction: SortDirection;
  property: Scalars['String']['input'];
};

export enum ExportTable {
  DriverWallet = 'DriverWallet',
  FleetWallet = 'FleetWallet',
  ProviderWallet = 'ProviderWallet',
  RiderWallet = 'RiderWallet'
}

export enum ExportType {
  Csv = 'CSV'
}

export type Feedback = {
  __typename?: 'Feedback';
  description?: Maybe<Scalars['String']['output']>;
  driverId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  parameters: Array<FeedbackParameter>;
  parametersAggregate: Array<FeedbackParametersAggregateResponse>;
  requestId: Scalars['ID']['output'];
  reviewTimestamp: Scalars['DateTime']['output'];
  score: Scalars['Int']['output'];
};


export type FeedbackParametersArgs = {
  filter?: FeedbackParameterFilter;
  sorting?: Array<FeedbackParameterSort>;
};


export type FeedbackParametersAggregateArgs = {
  filter?: InputMaybe<FeedbackParameterAggregateFilter>;
};

export type FeedbackAggregateFilter = {
  and?: InputMaybe<Array<FeedbackAggregateFilter>>;
  driverId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<FeedbackAggregateFilter>>;
  parameters?: InputMaybe<FeedbackAggregateFilterFeedbackParameterAggregateFilter>;
  requestId?: InputMaybe<IdFilterComparison>;
};

export type FeedbackAggregateFilterFeedbackParameterAggregateFilter = {
  and?: InputMaybe<Array<FeedbackAggregateFilterFeedbackParameterAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  isGood?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<FeedbackAggregateFilterFeedbackParameterAggregateFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type FeedbackConnection = {
  __typename?: 'FeedbackConnection';
  /** Array of nodes. */
  nodes: Array<Feedback>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FeedbackFilter = {
  and?: InputMaybe<Array<FeedbackFilter>>;
  driverId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<FeedbackFilter>>;
  parameters?: InputMaybe<FeedbackFilterFeedbackParameterFilter>;
  requestId?: InputMaybe<IdFilterComparison>;
};

export type FeedbackFilterFeedbackParameterFilter = {
  and?: InputMaybe<Array<FeedbackFilterFeedbackParameterFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  isGood?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<FeedbackFilterFeedbackParameterFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type FeedbackParameter = {
  __typename?: 'FeedbackParameter';
  id: Scalars['ID']['output'];
  isGood: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type FeedbackParameterAggregate = {
  __typename?: 'FeedbackParameterAggregate';
  count: Scalars['ID']['output'];
  isGood: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type FeedbackParameterAggregateFilter = {
  and?: InputMaybe<Array<FeedbackParameterAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  isGood?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<FeedbackParameterAggregateFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type FeedbackParameterDeleteResponse = {
  __typename?: 'FeedbackParameterDeleteResponse';
  id?: Maybe<Scalars['ID']['output']>;
  isGood?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FeedbackParameterFilter = {
  and?: InputMaybe<Array<FeedbackParameterFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  isGood?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<FeedbackParameterFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type FeedbackParameterInput = {
  isGood: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type FeedbackParameterSort = {
  direction: SortDirection;
  field: FeedbackParameterSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FeedbackParameterSortFields {
  Id = 'id',
  IsGood = 'isGood',
  Title = 'title'
}

export type FeedbackParametersAggregateGroupBy = {
  __typename?: 'FeedbackParametersAggregateGroupBy';
  id?: Maybe<Scalars['ID']['output']>;
  isGood?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FeedbackParametersAggregateResponse = {
  __typename?: 'FeedbackParametersAggregateResponse';
  avg?: Maybe<FeedbackParametersAvgAggregate>;
  count?: Maybe<FeedbackParametersCountAggregate>;
  groupBy?: Maybe<FeedbackParametersAggregateGroupBy>;
  max?: Maybe<FeedbackParametersMaxAggregate>;
  min?: Maybe<FeedbackParametersMinAggregate>;
  sum?: Maybe<FeedbackParametersSumAggregate>;
};

export type FeedbackParametersAvgAggregate = {
  __typename?: 'FeedbackParametersAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type FeedbackParametersCountAggregate = {
  __typename?: 'FeedbackParametersCountAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  isGood?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type FeedbackParametersMaxAggregate = {
  __typename?: 'FeedbackParametersMaxAggregate';
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FeedbackParametersMinAggregate = {
  __typename?: 'FeedbackParametersMinAggregate';
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FeedbackParametersSumAggregate = {
  __typename?: 'FeedbackParametersSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type FeedbackSort = {
  direction: SortDirection;
  field: FeedbackSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FeedbackSortFields {
  DriverId = 'driverId',
  Id = 'id',
  RequestId = 'requestId'
}

export type Fleet = {
  __typename?: 'Fleet';
  accountNumber: Scalars['String']['output'];
  address?: Maybe<Scalars['String']['output']>;
  commissionShareFlat: Scalars['Float']['output'];
  commissionSharePercent: Scalars['Float']['output'];
  exclusivityAreas?: Maybe<Array<Array<Point>>>;
  feeMultiplier?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  mobileNumber: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber: Scalars['String']['output'];
  transactions: FleetTransactionsConnection;
  userName?: Maybe<Scalars['String']['output']>;
  wallets: Array<FleetWallet>;
  zonePrices: FleetZonePricesConnection;
};


export type FleetTransactionsArgs = {
  filter?: FleetTransactionFilter;
  paging?: OffsetPaging;
  sorting?: Array<FleetTransactionSort>;
};


export type FleetWalletsArgs = {
  filter?: FleetWalletFilter;
  sorting?: Array<FleetWalletSort>;
};


export type FleetZonePricesArgs = {
  filter?: ZonePriceFilter;
  paging?: OffsetPaging;
  sorting?: Array<ZonePriceSort>;
};

export type FleetConnection = {
  __typename?: 'FleetConnection';
  /** Array of nodes. */
  nodes: Array<Fleet>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FleetFilter = {
  and?: InputMaybe<Array<FleetFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FleetFilter>>;
};

export type FleetInput = {
  accountNumber: Scalars['String']['input'];
  address?: InputMaybe<Scalars['String']['input']>;
  commissionShareFlat: Scalars['Float']['input'];
  commissionSharePercent: Scalars['Float']['input'];
  exclusivityAreas?: InputMaybe<Array<Array<PointInput>>>;
  feeMultiplier?: InputMaybe<Scalars['Float']['input']>;
  mobileNumber: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type FleetSort = {
  direction: SortDirection;
  field: FleetSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FleetSortFields {
  Id = 'id',
  Name = 'name'
}

export type FleetTransaction = {
  __typename?: 'FleetTransaction';
  action: TransactionAction;
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  deductType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fleetId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  operator?: Maybe<Operator>;
  operatorId?: Maybe<Scalars['ID']['output']>;
  rechargeType?: Maybe<Scalars['String']['output']>;
  refrenceNumber?: Maybe<Scalars['String']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
  transactionTimestamp: Scalars['DateTime']['output'];
};

export type FleetTransactionAggregateFilter = {
  and?: InputMaybe<Array<FleetTransactionAggregateFilter>>;
  fleetId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  operatorId?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<FleetTransactionAggregateFilter>>;
  requestId?: InputMaybe<IdFilterComparison>;
};

export type FleetTransactionConnection = {
  __typename?: 'FleetTransactionConnection';
  /** Array of nodes. */
  nodes: Array<FleetTransaction>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FleetTransactionFilter = {
  and?: InputMaybe<Array<FleetTransactionFilter>>;
  fleetId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  operatorId?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<FleetTransactionFilter>>;
  requestId?: InputMaybe<IdFilterComparison>;
};

export type FleetTransactionInput = {
  action: TransactionAction;
  amount: Scalars['Float']['input'];
  currency: Scalars['String']['input'];
  deductType?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fleetId: Scalars['ID']['input'];
  rechargeType?: InputMaybe<Scalars['String']['input']>;
  refrenceNumber?: InputMaybe<Scalars['String']['input']>;
};

export type FleetTransactionSort = {
  direction: SortDirection;
  field: FleetTransactionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FleetTransactionSortFields {
  FleetId = 'fleetId',
  Id = 'id',
  OperatorId = 'operatorId',
  RequestId = 'requestId'
}

export type FleetTransactionsConnection = {
  __typename?: 'FleetTransactionsConnection';
  /** Array of nodes. */
  nodes: Array<FleetTransaction>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FleetWallet = {
  __typename?: 'FleetWallet';
  balance: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  fleet: Fleet;
  fleetId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
};

export type FleetWalletConnection = {
  __typename?: 'FleetWalletConnection';
  /** Array of nodes. */
  nodes: Array<FleetWallet>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FleetWalletFilter = {
  and?: InputMaybe<Array<FleetWalletFilter>>;
  balance?: InputMaybe<FloatFieldComparison>;
  currency?: InputMaybe<StringFieldComparison>;
  fleetId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<FleetWalletFilter>>;
};

export type FleetWalletSort = {
  direction: SortDirection;
  field: FleetWalletSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FleetWalletSortFields {
  Balance = 'balance',
  Currency = 'currency',
  FleetId = 'fleetId',
  Id = 'id'
}

export type FleetZonePricesConnection = {
  __typename?: 'FleetZonePricesConnection';
  /** Array of nodes. */
  nodes: Array<ZonePrice>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type FloatFieldComparison = {
  between?: InputMaybe<FloatFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<FloatFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatFieldComparisonBetween = {
  lower: Scalars['Float']['input'];
  upper: Scalars['Float']['input'];
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'Unknown'
}

export type GiftBatch = {
  __typename?: 'GiftBatch';
  amount: Scalars['Float']['output'];
  availableFrom?: Maybe<Scalars['DateTime']['output']>;
  currency: Scalars['String']['output'];
  expireAt?: Maybe<Scalars['DateTime']['output']>;
  giftCodes: GiftBatchGiftCodesConnection;
  giftCodesAggregate: Array<GiftBatchGiftCodesAggregateResponse>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};


export type GiftBatchGiftCodesArgs = {
  filter?: GiftCodeFilter;
  paging?: OffsetPaging;
  sorting?: Array<GiftCodeSort>;
};


export type GiftBatchGiftCodesAggregateArgs = {
  filter?: InputMaybe<GiftCodeAggregateFilter>;
};

export type GiftBatchConnection = {
  __typename?: 'GiftBatchConnection';
  /** Array of nodes. */
  nodes: Array<GiftBatch>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type GiftBatchFilter = {
  and?: InputMaybe<Array<GiftBatchFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<GiftBatchFilter>>;
};

export type GiftBatchGiftCodesAggregateGroupBy = {
  __typename?: 'GiftBatchGiftCodesAggregateGroupBy';
  id?: Maybe<Scalars['ID']['output']>;
  usedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GiftBatchGiftCodesAggregateResponse = {
  __typename?: 'GiftBatchGiftCodesAggregateResponse';
  avg?: Maybe<GiftBatchGiftCodesAvgAggregate>;
  count?: Maybe<GiftBatchGiftCodesCountAggregate>;
  groupBy?: Maybe<GiftBatchGiftCodesAggregateGroupBy>;
  max?: Maybe<GiftBatchGiftCodesMaxAggregate>;
  min?: Maybe<GiftBatchGiftCodesMinAggregate>;
  sum?: Maybe<GiftBatchGiftCodesSumAggregate>;
};

export type GiftBatchGiftCodesAvgAggregate = {
  __typename?: 'GiftBatchGiftCodesAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type GiftBatchGiftCodesConnection = {
  __typename?: 'GiftBatchGiftCodesConnection';
  /** Array of nodes. */
  nodes: Array<GiftCode>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type GiftBatchGiftCodesCountAggregate = {
  __typename?: 'GiftBatchGiftCodesCountAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  usedAt?: Maybe<Scalars['Int']['output']>;
};

export type GiftBatchGiftCodesMaxAggregate = {
  __typename?: 'GiftBatchGiftCodesMaxAggregate';
  id?: Maybe<Scalars['ID']['output']>;
  usedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GiftBatchGiftCodesMinAggregate = {
  __typename?: 'GiftBatchGiftCodesMinAggregate';
  id?: Maybe<Scalars['ID']['output']>;
  usedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GiftBatchGiftCodesSumAggregate = {
  __typename?: 'GiftBatchGiftCodesSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type GiftBatchSort = {
  direction: SortDirection;
  field: GiftBatchSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum GiftBatchSortFields {
  Id = 'id'
}

export type GiftCode = {
  __typename?: 'GiftCode';
  code: Scalars['String']['output'];
  driverTransaction?: Maybe<DriverTransaction>;
  giftId: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  riderTransaction?: Maybe<RiderTransaction>;
  usedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GiftCodeAggregateFilter = {
  and?: InputMaybe<Array<GiftCodeAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<GiftCodeAggregateFilter>>;
  usedAt?: InputMaybe<DateFieldComparison>;
};

export type GiftCodeEdge = {
  __typename?: 'GiftCodeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the GiftCode */
  node: GiftCode;
};

export type GiftCodeFilter = {
  and?: InputMaybe<Array<GiftCodeFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<GiftCodeFilter>>;
  usedAt?: InputMaybe<DateFieldComparison>;
};

export type GiftCodeSort = {
  direction: SortDirection;
  field: GiftCodeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum GiftCodeSortFields {
  Id = 'id',
  UsedAt = 'usedAt'
}

/** Group by */
export enum GroupBy {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  iLike?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  neq?: InputMaybe<Scalars['ID']['input']>;
  notILike?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  notLike?: InputMaybe<Scalars['ID']['input']>;
};

export type IncomeResultItem = {
  __typename?: 'IncomeResultItem';
  currency: Scalars['String']['output'];
  sum: Scalars['Float']['output'];
  time: Scalars['String']['output'];
};

export type ManualPayoutInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  driverTransactionId: Scalars['ID']['input'];
  transactionNumber: Scalars['String']['input'];
};

export type Media = {
  __typename?: 'Media';
  address: Scalars['String']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type MediaAggregateFilter = {
  and?: InputMaybe<Array<MediaAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MediaAggregateFilter>>;
};

export type MediaEdge = {
  __typename?: 'MediaEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Media */
  node: Media;
};

export type MediaFilter = {
  and?: InputMaybe<Array<MediaFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MediaFilter>>;
};

export type MediaSort = {
  direction: SortDirection;
  field: MediaSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MediaSortFields {
  Id = 'id'
}

export enum MessageStatus {
  Delivered = 'Delivered',
  Seen = 'Seen',
  Sent = 'Sent'
}

export type Mutation = {
  __typename?: 'Mutation';
  addEnabledServicesToDriver: Driver;
  addFleetsToZonePrice: ZonePrice;
  addOptionsToService: Service;
  addRegionsToService: Service;
  addServicesToZonePrice: ZonePrice;
  assignDriverToOrder: Order;
  cancelOrder: Order;
  createDriverTransaction: DriverWallet;
  createFleetTransaction: FleetWallet;
  createGiftCardBatch: GiftBatch;
  createManyComplaintActivities: Array<ComplaintActivity>;
  createManySMSProviders: Array<SmsProvider>;
  createOneAnnouncement: Announcement;
  createOneCarColor: CarColor;
  createOneCarModel: CarModel;
  createOneComplaintActivity: ComplaintActivity;
  createOneCoupon: Coupon;
  createOneDriver: Driver;
  createOneDriverTransaction: DriverTransaction;
  createOneFeedbackParameter: FeedbackParameter;
  createOneFleet: Fleet;
  createOneOperator: Operator;
  createOneOperatorRole: OperatorRole;
  createOneOrderCancelReason: OrderCancelReason;
  createOnePaymentGateway: PaymentGateway;
  createOnePayoutMethod: PayoutMethod;
  createOneProviderTransaction: ProviderTransaction;
  createOneRegion: Region;
  createOneReward: Reward;
  createOneRider: Rider;
  createOneRiderAddress: RiderAddress;
  createOneRiderTransaction: RiderTransaction;
  createOneSMSProvider: SmsProvider;
  createOneSOSActivity: SosActivity;
  createOneService: Service;
  createOneServiceCategory: ServiceCategory;
  createOneServiceOption: ServiceOption;
  createOneZonePrice: ZonePrice;
  createOrder: Order;
  createPayoutSession: PayoutSession;
  createRiderTransaction: RiderWallet;
  deleteManySMSProviders: DeleteManyResponse;
  deleteOneAnnouncement: AnnouncementDeleteResponse;
  deleteOneCarColor: CarColorDeleteResponse;
  deleteOneCarModel: CarModelDeleteResponse;
  deleteOneCoupon: CouponDeleteResponse;
  deleteOneDriver: Driver;
  deleteOneFeedbackParameter: FeedbackParameterDeleteResponse;
  deleteOneOrderCancelReason: OrderCancelReasonDeleteResponse;
  deleteOnePayoutMethod: PayoutMethodDeleteResponse;
  deleteOneRegion: RegionDeleteResponse;
  deleteOneReward: RewardDeleteResponse;
  deleteOneRider: Rider;
  deleteOneSMSProvider: SmsProviderDeleteResponse;
  deleteOneService: ServiceDeleteResponse;
  deleteOneServiceCategory: ServiceCategoryDeleteResponse;
  deleteOneServiceOption: ServiceOptionDeleteResponse;
  deleteOneZonePrice: ZonePriceDeleteResponse;
  disablePreviousServer: UpdateConfigResult;
  exportGiftCardBatch: Scalars['String']['output'];
  exportSessionToCsv: Scalars['String']['output'];
  manualPayout: DriverTransaction;
  markSMSProviderAsDefault: SmsProvider;
  runAutoPayout: Scalars['Boolean']['output'];
  saveConfiguration: CurrentConfiguration;
  setEnabledServicesOnDriver: Driver;
  setFleetsOnZonePrice: ZonePrice;
  setOptionsOnService: Service;
  setRegionsOnService: Service;
  setServicesOnZonePrice: ZonePrice;
  updateFirebase: UpdateConfigResult;
  updateManyRiderAddresses: UpdateManyResponse;
  updateManySMSProviders: UpdateManyResponse;
  updateMapsAPIKey: UpdateConfigResult;
  updateOneAnnouncement: Announcement;
  updateOneCarColor: CarColor;
  updateOneCarModel: CarModel;
  updateOneComplaint: Complaint;
  updateOneCoupon: Coupon;
  updateOneDriver: Driver;
  updateOneFeedback: Feedback;
  updateOneFeedbackParameter: FeedbackParameter;
  updateOneFleet: Fleet;
  updateOneOperator: Operator;
  updateOneOperatorRole: OperatorRole;
  updateOneOrderCancelReason: OrderCancelReason;
  updateOnePaymentGateway: PaymentGateway;
  updateOnePayoutMethod: PayoutMethod;
  updateOneRegion: Region;
  updateOneReward: Reward;
  updateOneRider: Rider;
  updateOneRiderAddress: RiderAddress;
  updateOneSMSProvider: SmsProvider;
  updateOneService: Service;
  updateOneServiceCategory: ServiceCategory;
  updateOneServiceOption: ServiceOption;
  updateOneZonePrice: ZonePrice;
  updatePassword: Operator;
  updatePayoutSession: PayoutSession;
  updatePurchaseCode: UpdatePurchaseCodeResult;
};


export type MutationAddEnabledServicesToDriverArgs = {
  input: AddEnabledServicesToDriverInput;
};


export type MutationAddFleetsToZonePriceArgs = {
  input: AddFleetsToZonePriceInput;
};


export type MutationAddOptionsToServiceArgs = {
  input: AddOptionsToServiceInput;
};


export type MutationAddRegionsToServiceArgs = {
  input: AddRegionsToServiceInput;
};


export type MutationAddServicesToZonePriceArgs = {
  input: AddServicesToZonePriceInput;
};


export type MutationAssignDriverToOrderArgs = {
  driverId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
};


export type MutationCancelOrderArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationCreateDriverTransactionArgs = {
  input: DriverTransactionInput;
};


export type MutationCreateFleetTransactionArgs = {
  input: FleetTransactionInput;
};


export type MutationCreateGiftCardBatchArgs = {
  input: CreateGiftBatchInput;
};


export type MutationCreateManyComplaintActivitiesArgs = {
  input: CreateManyComplaintActivitiesInput;
};


export type MutationCreateManySmsProvidersArgs = {
  input: CreateManySmsProvidersInput;
};


export type MutationCreateOneAnnouncementArgs = {
  input: CreateOneAnnouncementInput;
};


export type MutationCreateOneCarColorArgs = {
  input: CreateOneCarColorInput;
};


export type MutationCreateOneCarModelArgs = {
  input: CreateOneCarModelInput;
};


export type MutationCreateOneComplaintActivityArgs = {
  input: CreateOneComplaintActivityInput;
};


export type MutationCreateOneCouponArgs = {
  input: CreateOneCouponInput;
};


export type MutationCreateOneDriverArgs = {
  input: CreateOneDriverInput;
};


export type MutationCreateOneDriverTransactionArgs = {
  input: CreateOneDriverTransactionInput;
};


export type MutationCreateOneFeedbackParameterArgs = {
  input: CreateOneFeedbackParameterInput;
};


export type MutationCreateOneFleetArgs = {
  input: CreateOneFleetInput;
};


export type MutationCreateOneOperatorArgs = {
  input: CreateOneOperatorInput;
};


export type MutationCreateOneOperatorRoleArgs = {
  input: CreateOneOperatorRoleInput;
};


export type MutationCreateOneOrderCancelReasonArgs = {
  input: CreateOneOrderCancelReasonInput;
};


export type MutationCreateOnePaymentGatewayArgs = {
  input: CreateOnePaymentGatewayInput;
};


export type MutationCreateOnePayoutMethodArgs = {
  input: CreateOnePayoutMethodInput;
};


export type MutationCreateOneProviderTransactionArgs = {
  input: CreateOneProviderTransactionInput;
};


export type MutationCreateOneRegionArgs = {
  input: CreateOneRegionInput;
};


export type MutationCreateOneRewardArgs = {
  input: CreateOneRewardInput;
};


export type MutationCreateOneRiderArgs = {
  input: CreateOneRiderInput;
};


export type MutationCreateOneRiderAddressArgs = {
  input: CreateOneRiderAddressInput;
};


export type MutationCreateOneRiderTransactionArgs = {
  input: CreateOneRiderTransactionInput;
};


export type MutationCreateOneSmsProviderArgs = {
  input: CreateOneSmsProviderInput;
};


export type MutationCreateOneSosActivityArgs = {
  input: CreateOneSosActivityInput;
};


export type MutationCreateOneServiceArgs = {
  input: CreateOneServiceInput;
};


export type MutationCreateOneServiceCategoryArgs = {
  input: CreateOneServiceCategoryInput;
};


export type MutationCreateOneServiceOptionArgs = {
  input: CreateOneServiceOptionInput;
};


export type MutationCreateOneZonePriceArgs = {
  input: CreateOneZonePriceInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreatePayoutSessionArgs = {
  input: CreatePayoutSessionInput;
};


export type MutationCreateRiderTransactionArgs = {
  input: RiderTransactionInput;
};


export type MutationDeleteManySmsProvidersArgs = {
  input: DeleteManySmsProvidersInput;
};


export type MutationDeleteOneAnnouncementArgs = {
  input: DeleteOneAnnouncementInput;
};


export type MutationDeleteOneCarColorArgs = {
  input: DeleteOneCarColorInput;
};


export type MutationDeleteOneCarModelArgs = {
  input: DeleteOneCarModelInput;
};


export type MutationDeleteOneCouponArgs = {
  input: DeleteOneCouponInput;
};


export type MutationDeleteOneDriverArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOneFeedbackParameterArgs = {
  input: DeleteOneFeedbackParameterInput;
};


export type MutationDeleteOneOrderCancelReasonArgs = {
  input: DeleteOneOrderCancelReasonInput;
};


export type MutationDeleteOnePayoutMethodArgs = {
  input: DeleteOnePayoutMethodInput;
};


export type MutationDeleteOneRegionArgs = {
  input: DeleteOneRegionInput;
};


export type MutationDeleteOneRewardArgs = {
  input: DeleteOneRewardInput;
};


export type MutationDeleteOneRiderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOneSmsProviderArgs = {
  input: DeleteOneSmsProviderInput;
};


export type MutationDeleteOneServiceArgs = {
  input: DeleteOneServiceInput;
};


export type MutationDeleteOneServiceCategoryArgs = {
  input: DeleteOneServiceCategoryInput;
};


export type MutationDeleteOneServiceOptionArgs = {
  input: DeleteOneServiceOptionInput;
};


export type MutationDeleteOneZonePriceArgs = {
  input: DeleteOneZonePriceInput;
};


export type MutationDisablePreviousServerArgs = {
  ip: Scalars['String']['input'];
};


export type MutationExportGiftCardBatchArgs = {
  batchId: Scalars['ID']['input'];
};


export type MutationExportSessionToCsvArgs = {
  input: ExportSessionToCsvInput;
};


export type MutationManualPayoutArgs = {
  input: ManualPayoutInput;
};


export type MutationMarkSmsProviderAsDefaultArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRunAutoPayoutArgs = {
  input: RunAutoPayoutInput;
};


export type MutationSaveConfigurationArgs = {
  input: UpdateConfigInput;
};


export type MutationSetEnabledServicesOnDriverArgs = {
  input: SetEnabledServicesOnDriverInput;
};


export type MutationSetFleetsOnZonePriceArgs = {
  input: SetFleetsOnZonePriceInput;
};


export type MutationSetOptionsOnServiceArgs = {
  input: SetOptionsOnServiceInput;
};


export type MutationSetRegionsOnServiceArgs = {
  input: SetRegionsOnServiceInput;
};


export type MutationSetServicesOnZonePriceArgs = {
  input: SetServicesOnZonePriceInput;
};


export type MutationUpdateFirebaseArgs = {
  keyFileName: Scalars['String']['input'];
};


export type MutationUpdateManyRiderAddressesArgs = {
  input: UpdateManyRiderAddressesInput;
};


export type MutationUpdateManySmsProvidersArgs = {
  input: UpdateManySmsProvidersInput;
};


export type MutationUpdateMapsApiKeyArgs = {
  adminPanel: Scalars['String']['input'];
  backend: Scalars['String']['input'];
};


export type MutationUpdateOneAnnouncementArgs = {
  input: UpdateOneAnnouncementInput;
};


export type MutationUpdateOneCarColorArgs = {
  input: UpdateOneCarColorInput;
};


export type MutationUpdateOneCarModelArgs = {
  input: UpdateOneCarModelInput;
};


export type MutationUpdateOneComplaintArgs = {
  input: UpdateOneComplaintInput;
};


export type MutationUpdateOneCouponArgs = {
  input: UpdateOneCouponInput;
};


export type MutationUpdateOneDriverArgs = {
  input: UpdateOneDriverInput;
};


export type MutationUpdateOneFeedbackArgs = {
  input: UpdateOneFeedbackInput;
};


export type MutationUpdateOneFeedbackParameterArgs = {
  input: UpdateOneFeedbackParameterInput;
};


export type MutationUpdateOneFleetArgs = {
  input: UpdateOneFleetInput;
};


export type MutationUpdateOneOperatorArgs = {
  input: UpdateOneOperatorInput;
};


export type MutationUpdateOneOperatorRoleArgs = {
  input: UpdateOneOperatorRoleInput;
};


export type MutationUpdateOneOrderCancelReasonArgs = {
  input: UpdateOneOrderCancelReasonInput;
};


export type MutationUpdateOnePaymentGatewayArgs = {
  input: UpdateOnePaymentGatewayInput;
};


export type MutationUpdateOnePayoutMethodArgs = {
  input: UpdateOnePayoutMethodInput;
};


export type MutationUpdateOneRegionArgs = {
  input: UpdateOneRegionInput;
};


export type MutationUpdateOneRewardArgs = {
  input: UpdateOneRewardInput;
};


export type MutationUpdateOneRiderArgs = {
  input: UpdateOneRiderInput;
};


export type MutationUpdateOneRiderAddressArgs = {
  input: UpdateOneRiderAddressInput;
};


export type MutationUpdateOneSmsProviderArgs = {
  input: UpdateOneSmsProviderInput;
};


export type MutationUpdateOneServiceArgs = {
  input: UpdateOneServiceInput;
};


export type MutationUpdateOneServiceCategoryArgs = {
  input: UpdateOneServiceCategoryInput;
};


export type MutationUpdateOneServiceOptionArgs = {
  input: UpdateOneServiceOptionInput;
};


export type MutationUpdateOneZonePriceArgs = {
  input: UpdateOneZonePriceInput;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};


export type MutationUpdatePayoutSessionArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePayoutSessionInput;
};


export type MutationUpdatePurchaseCodeArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  purchaseCode: Scalars['String']['input'];
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float']['input'];
  upper: Scalars['Float']['input'];
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type OnlineDriver = {
  __typename?: 'OnlineDriver';
  driverId: Scalars['Float']['output'];
  lastUpdatedAt: Scalars['Float']['output'];
  location: Point;
};

export type OnlineDriverWithData = {
  __typename?: 'OnlineDriverWithData';
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  id: Scalars['Float']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  lastUpdatedAt: Scalars['Float']['output'];
  location: Point;
  mobileNumber: Scalars['String']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviewCount: Scalars['Float']['output'];
  status: DriverStatus;
};

export type Operator = {
  __typename?: 'Operator';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<OperatorRole>;
  roleId?: Maybe<Scalars['ID']['output']>;
  userName: Scalars['String']['output'];
};

export type OperatorConnection = {
  __typename?: 'OperatorConnection';
  /** Array of nodes. */
  nodes: Array<Operator>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OperatorFilter = {
  and?: InputMaybe<Array<OperatorFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OperatorFilter>>;
};

export enum OperatorPermission {
  AnnouncementsEdit = 'Announcements_Edit',
  AnnouncementsView = 'Announcements_View',
  CarsEdit = 'Cars_Edit',
  CarsView = 'Cars_View',
  ComplaintsEdit = 'Complaints_Edit',
  ComplaintsView = 'Complaints_View',
  CouponsEdit = 'Coupons_Edit',
  CouponsView = 'Coupons_View',
  DriverWalletEdit = 'DriverWallet_Edit',
  DriverWalletView = 'DriverWallet_View',
  DriversEdit = 'Drivers_Edit',
  DriversView = 'Drivers_View',
  FleetWalletEdit = 'FleetWallet_Edit',
  FleetWalletView = 'FleetWallet_View',
  FleetsEdit = 'Fleets_Edit',
  FleetsView = 'Fleets_View',
  GatewaysEdit = 'Gateways_Edit',
  GatewaysView = 'Gateways_View',
  GiftBatchCreate = 'GiftBatch_Create',
  GiftBatchView = 'GiftBatch_View',
  GiftBatchViewCodes = 'GiftBatch_ViewCodes',
  PayoutsEdit = 'Payouts_Edit',
  PayoutsView = 'Payouts_View',
  ProviderWalletEdit = 'ProviderWallet_Edit',
  ProviderWalletView = 'ProviderWallet_View',
  RegionsEdit = 'Regions_Edit',
  RegionsView = 'Regions_View',
  RequestsView = 'Requests_View',
  ReviewParameterEdit = 'ReviewParameter_Edit',
  RiderWalletEdit = 'RiderWallet_Edit',
  RiderWalletView = 'RiderWallet_View',
  RidersEdit = 'Riders_Edit',
  RidersView = 'Riders_View',
  SmsProvidersEdit = 'SMSProviders_Edit',
  SmsProvidersView = 'SMSProviders_View',
  ServicesEdit = 'Services_Edit',
  ServicesView = 'Services_View',
  UsersEdit = 'Users_Edit',
  UsersView = 'Users_View'
}

export type OperatorRole = {
  __typename?: 'OperatorRole';
  id: Scalars['ID']['output'];
  permissions: Array<OperatorPermission>;
  title: Scalars['String']['output'];
};

export type OperatorRoleFilter = {
  and?: InputMaybe<Array<OperatorRoleFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OperatorRoleFilter>>;
};

export type OperatorRoleInput = {
  permissions: Array<OperatorPermission>;
  title: Scalars['String']['input'];
};

export type OperatorRoleSort = {
  direction: SortDirection;
  field: OperatorRoleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OperatorRoleSortFields {
  Id = 'id'
}

export type OperatorSort = {
  direction: SortDirection;
  field: OperatorSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OperatorSortFields {
  Id = 'id'
}

export type Order = {
  __typename?: 'Order';
  activities: Array<RequestActivity>;
  activitiesAggregate: Array<OrderActivitiesAggregateResponse>;
  addresses: Array<Scalars['String']['output']>;
  complaints: Array<Complaint>;
  complaintsAggregate: Array<OrderComplaintsAggregateResponse>;
  conversations: Array<OrderMessage>;
  conversationsAggregate: Array<OrderConversationsAggregateResponse>;
  costAfterCoupon: Scalars['Float']['output'];
  costBest: Scalars['Float']['output'];
  coupon?: Maybe<Coupon>;
  createdOn: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  destinationArrivedTo: Scalars['Int']['output'];
  distanceBest: Scalars['Int']['output'];
  driver?: Maybe<Driver>;
  driverId?: Maybe<Scalars['ID']['output']>;
  driverTransactions: Array<DriverTransaction>;
  driverTransactionsAggregate: Array<OrderDriverTransactionsAggregateResponse>;
  durationBest: Scalars['Int']['output'];
  expectedTimestamp?: Maybe<Scalars['DateTime']['output']>;
  finishTimestamp?: Maybe<Scalars['DateTime']['output']>;
  fleetTransactions: Array<FleetTransaction>;
  fleetTransactionsAggregate: Array<OrderFleetTransactionsAggregateResponse>;
  id: Scalars['ID']['output'];
  points: Array<Point>;
  providerTransactions: Array<ProviderTransaction>;
  providerTransactionsAggregate: Array<OrderProviderTransactionsAggregateResponse>;
  rider?: Maybe<Rider>;
  riderId: Scalars['ID']['output'];
  riderTransactions: Array<RiderTransaction>;
  riderTransactionsAggregate: Array<OrderRiderTransactionsAggregateResponse>;
  service?: Maybe<Service>;
  startTimestamp?: Maybe<Scalars['DateTime']['output']>;
  status: OrderStatus;
  waitMinutes: Scalars['Float']['output'];
};


export type OrderActivitiesArgs = {
  filter?: RequestActivityFilter;
  sorting?: Array<RequestActivitySort>;
};


export type OrderActivitiesAggregateArgs = {
  filter?: InputMaybe<RequestActivityAggregateFilter>;
};


export type OrderComplaintsArgs = {
  filter?: ComplaintFilter;
  sorting?: Array<ComplaintSort>;
};


export type OrderComplaintsAggregateArgs = {
  filter?: InputMaybe<ComplaintAggregateFilter>;
};


export type OrderConversationsArgs = {
  filter?: OrderMessageFilter;
  sorting?: Array<OrderMessageSort>;
};


export type OrderConversationsAggregateArgs = {
  filter?: InputMaybe<OrderMessageAggregateFilter>;
};


export type OrderDriverTransactionsArgs = {
  filter?: DriverTransactionFilter;
  sorting?: Array<DriverTransactionSort>;
};


export type OrderDriverTransactionsAggregateArgs = {
  filter?: InputMaybe<DriverTransactionAggregateFilter>;
};


export type OrderFleetTransactionsArgs = {
  filter?: FleetTransactionFilter;
  sorting?: Array<FleetTransactionSort>;
};


export type OrderFleetTransactionsAggregateArgs = {
  filter?: InputMaybe<FleetTransactionAggregateFilter>;
};


export type OrderProviderTransactionsArgs = {
  filter?: ProviderTransactionFilter;
  sorting?: Array<ProviderTransactionSort>;
};


export type OrderProviderTransactionsAggregateArgs = {
  filter?: InputMaybe<ProviderTransactionAggregateFilter>;
};


export type OrderRiderTransactionsArgs = {
  filter?: RiderTransactionFilter;
  sorting?: Array<RiderTransactionSort>;
};


export type OrderRiderTransactionsAggregateArgs = {
  filter?: InputMaybe<RiderTransactionAggregateFilter>;
};

export type OrderActivitiesAggregateGroupBy = {
  __typename?: 'OrderActivitiesAggregateGroupBy';
  id?: Maybe<Scalars['ID']['output']>;
};

export type OrderActivitiesAggregateResponse = {
  __typename?: 'OrderActivitiesAggregateResponse';
  avg?: Maybe<OrderActivitiesAvgAggregate>;
  count?: Maybe<OrderActivitiesCountAggregate>;
  groupBy?: Maybe<OrderActivitiesAggregateGroupBy>;
  max?: Maybe<OrderActivitiesMaxAggregate>;
  min?: Maybe<OrderActivitiesMinAggregate>;
  sum?: Maybe<OrderActivitiesSumAggregate>;
};

export type OrderActivitiesAvgAggregate = {
  __typename?: 'OrderActivitiesAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type OrderActivitiesCountAggregate = {
  __typename?: 'OrderActivitiesCountAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type OrderActivitiesMaxAggregate = {
  __typename?: 'OrderActivitiesMaxAggregate';
  id?: Maybe<Scalars['ID']['output']>;
};

export type OrderActivitiesMinAggregate = {
  __typename?: 'OrderActivitiesMinAggregate';
  id?: Maybe<Scalars['ID']['output']>;
};

export type OrderActivitiesSumAggregate = {
  __typename?: 'OrderActivitiesSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type OrderAggregateFilter = {
  and?: InputMaybe<Array<OrderAggregateFilter>>;
  createdOn?: InputMaybe<DateFieldComparison>;
  driverId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderAggregateFilter>>;
  riderId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
};

export type OrderAggregateGroupBy = {
  __typename?: 'OrderAggregateGroupBy';
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  riderId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<OrderStatus>;
};


export type OrderAggregateGroupByCreatedOnArgs = {
  by?: GroupBy;
};

export type OrderAggregateResponse = {
  __typename?: 'OrderAggregateResponse';
  avg?: Maybe<OrderAvgAggregate>;
  count?: Maybe<OrderCountAggregate>;
  groupBy?: Maybe<OrderAggregateGroupBy>;
  max?: Maybe<OrderMaxAggregate>;
  min?: Maybe<OrderMinAggregate>;
  sum?: Maybe<OrderSumAggregate>;
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  riderId?: Maybe<Scalars['Float']['output']>;
};

export type OrderCancelReason = {
  __typename?: 'OrderCancelReason';
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  userType: AnnouncementUserType;
};

export type OrderCancelReasonConnection = {
  __typename?: 'OrderCancelReasonConnection';
  /** Array of nodes. */
  nodes: Array<OrderCancelReason>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrderCancelReasonDeleteResponse = {
  __typename?: 'OrderCancelReasonDeleteResponse';
  id?: Maybe<Scalars['ID']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  userType?: Maybe<AnnouncementUserType>;
};

export type OrderCancelReasonFilter = {
  and?: InputMaybe<Array<OrderCancelReasonFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderCancelReasonFilter>>;
};

export type OrderCancelReasonInput = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userType?: InputMaybe<AnnouncementUserType>;
};

export type OrderCancelReasonSort = {
  direction: SortDirection;
  field: OrderCancelReasonSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderCancelReasonSortFields {
  Id = 'id'
}

export type OrderComplaintsAggregateGroupBy = {
  __typename?: 'OrderComplaintsAggregateGroupBy';
  id?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<ComplaintStatus>;
};

export type OrderComplaintsAggregateResponse = {
  __typename?: 'OrderComplaintsAggregateResponse';
  avg?: Maybe<OrderComplaintsAvgAggregate>;
  count?: Maybe<OrderComplaintsCountAggregate>;
  groupBy?: Maybe<OrderComplaintsAggregateGroupBy>;
  max?: Maybe<OrderComplaintsMaxAggregate>;
  min?: Maybe<OrderComplaintsMinAggregate>;
  sum?: Maybe<OrderComplaintsSumAggregate>;
};

export type OrderComplaintsAvgAggregate = {
  __typename?: 'OrderComplaintsAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  requestId?: Maybe<Scalars['Float']['output']>;
};

export type OrderComplaintsCountAggregate = {
  __typename?: 'OrderComplaintsCountAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  requestId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type OrderComplaintsMaxAggregate = {
  __typename?: 'OrderComplaintsMaxAggregate';
  id?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<ComplaintStatus>;
};

export type OrderComplaintsMinAggregate = {
  __typename?: 'OrderComplaintsMinAggregate';
  id?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<ComplaintStatus>;
};

export type OrderComplaintsSumAggregate = {
  __typename?: 'OrderComplaintsSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  requestId?: Maybe<Scalars['Float']['output']>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Array of nodes. */
  nodes: Array<Order>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type OrderConversationsAggregateGroupBy = {
  __typename?: 'OrderConversationsAggregateGroupBy';
  id?: Maybe<Scalars['ID']['output']>;
};

export type OrderConversationsAggregateResponse = {
  __typename?: 'OrderConversationsAggregateResponse';
  avg?: Maybe<OrderConversationsAvgAggregate>;
  count?: Maybe<OrderConversationsCountAggregate>;
  groupBy?: Maybe<OrderConversationsAggregateGroupBy>;
  max?: Maybe<OrderConversationsMaxAggregate>;
  min?: Maybe<OrderConversationsMinAggregate>;
  sum?: Maybe<OrderConversationsSumAggregate>;
};

export type OrderConversationsAvgAggregate = {
  __typename?: 'OrderConversationsAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type OrderConversationsCountAggregate = {
  __typename?: 'OrderConversationsCountAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type OrderConversationsMaxAggregate = {
  __typename?: 'OrderConversationsMaxAggregate';
  id?: Maybe<Scalars['ID']['output']>;
};

export type OrderConversationsMinAggregate = {
  __typename?: 'OrderConversationsMinAggregate';
  id?: Maybe<Scalars['ID']['output']>;
};

export type OrderConversationsSumAggregate = {
  __typename?: 'OrderConversationsSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  createdOn?: Maybe<Scalars['Int']['output']>;
  driverId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  riderId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type OrderDriverTransactionsAggregateGroupBy = {
  __typename?: 'OrderDriverTransactionsAggregateGroupBy';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<TransactionStatus>;
};

export type OrderDriverTransactionsAggregateResponse = {
  __typename?: 'OrderDriverTransactionsAggregateResponse';
  avg?: Maybe<OrderDriverTransactionsAvgAggregate>;
  count?: Maybe<OrderDriverTransactionsCountAggregate>;
  groupBy?: Maybe<OrderDriverTransactionsAggregateGroupBy>;
  max?: Maybe<OrderDriverTransactionsMaxAggregate>;
  min?: Maybe<OrderDriverTransactionsMinAggregate>;
  sum?: Maybe<OrderDriverTransactionsSumAggregate>;
};

export type OrderDriverTransactionsAvgAggregate = {
  __typename?: 'OrderDriverTransactionsAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  paymentGatewayId?: Maybe<Scalars['Float']['output']>;
  payoutAccountId?: Maybe<Scalars['Float']['output']>;
  payoutMethodId?: Maybe<Scalars['Float']['output']>;
  payoutSessionId?: Maybe<Scalars['Float']['output']>;
};

export type OrderDriverTransactionsCountAggregate = {
  __typename?: 'OrderDriverTransactionsCountAggregate';
  amount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  driverId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  paymentGatewayId?: Maybe<Scalars['Int']['output']>;
  payoutAccountId?: Maybe<Scalars['Int']['output']>;
  payoutMethodId?: Maybe<Scalars['Int']['output']>;
  payoutSessionId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type OrderDriverTransactionsMaxAggregate = {
  __typename?: 'OrderDriverTransactionsMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<TransactionStatus>;
};

export type OrderDriverTransactionsMinAggregate = {
  __typename?: 'OrderDriverTransactionsMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<TransactionStatus>;
};

export type OrderDriverTransactionsSumAggregate = {
  __typename?: 'OrderDriverTransactionsSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  paymentGatewayId?: Maybe<Scalars['Float']['output']>;
  payoutAccountId?: Maybe<Scalars['Float']['output']>;
  payoutMethodId?: Maybe<Scalars['Float']['output']>;
  payoutSessionId?: Maybe<Scalars['Float']['output']>;
};

export type OrderFilter = {
  and?: InputMaybe<Array<OrderFilter>>;
  createdOn?: InputMaybe<DateFieldComparison>;
  driverId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFilter>>;
  riderId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
};

export type OrderFleetTransactionsAggregateGroupBy = {
  __typename?: 'OrderFleetTransactionsAggregateGroupBy';
  fleetId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  operatorId?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
};

export type OrderFleetTransactionsAggregateResponse = {
  __typename?: 'OrderFleetTransactionsAggregateResponse';
  avg?: Maybe<OrderFleetTransactionsAvgAggregate>;
  count?: Maybe<OrderFleetTransactionsCountAggregate>;
  groupBy?: Maybe<OrderFleetTransactionsAggregateGroupBy>;
  max?: Maybe<OrderFleetTransactionsMaxAggregate>;
  min?: Maybe<OrderFleetTransactionsMinAggregate>;
  sum?: Maybe<OrderFleetTransactionsSumAggregate>;
};

export type OrderFleetTransactionsAvgAggregate = {
  __typename?: 'OrderFleetTransactionsAvgAggregate';
  fleetId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  operatorId?: Maybe<Scalars['Float']['output']>;
  requestId?: Maybe<Scalars['Float']['output']>;
};

export type OrderFleetTransactionsCountAggregate = {
  __typename?: 'OrderFleetTransactionsCountAggregate';
  fleetId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  operatorId?: Maybe<Scalars['Int']['output']>;
  requestId?: Maybe<Scalars['Int']['output']>;
};

export type OrderFleetTransactionsMaxAggregate = {
  __typename?: 'OrderFleetTransactionsMaxAggregate';
  fleetId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  operatorId?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
};

export type OrderFleetTransactionsMinAggregate = {
  __typename?: 'OrderFleetTransactionsMinAggregate';
  fleetId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  operatorId?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
};

export type OrderFleetTransactionsSumAggregate = {
  __typename?: 'OrderFleetTransactionsSumAggregate';
  fleetId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  operatorId?: Maybe<Scalars['Float']['output']>;
  requestId?: Maybe<Scalars['Float']['output']>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  riderId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<OrderStatus>;
};

export type OrderMessage = {
  __typename?: 'OrderMessage';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sentAt: Scalars['DateTime']['output'];
  sentByDriver: Scalars['Boolean']['output'];
  status: MessageStatus;
};

export type OrderMessageAggregateFilter = {
  and?: InputMaybe<Array<OrderMessageAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderMessageAggregateFilter>>;
};

export type OrderMessageFilter = {
  and?: InputMaybe<Array<OrderMessageFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderMessageFilter>>;
};

export type OrderMessageSort = {
  direction: SortDirection;
  field: OrderMessageSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderMessageSortFields {
  Id = 'id'
}

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  createdOn?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  riderId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<OrderStatus>;
};

export type OrderProviderTransactionsAggregateGroupBy = {
  __typename?: 'OrderProviderTransactionsAggregateGroupBy';
  id?: Maybe<Scalars['ID']['output']>;
  operatorId?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
};

export type OrderProviderTransactionsAggregateResponse = {
  __typename?: 'OrderProviderTransactionsAggregateResponse';
  avg?: Maybe<OrderProviderTransactionsAvgAggregate>;
  count?: Maybe<OrderProviderTransactionsCountAggregate>;
  groupBy?: Maybe<OrderProviderTransactionsAggregateGroupBy>;
  max?: Maybe<OrderProviderTransactionsMaxAggregate>;
  min?: Maybe<OrderProviderTransactionsMinAggregate>;
  sum?: Maybe<OrderProviderTransactionsSumAggregate>;
};

export type OrderProviderTransactionsAvgAggregate = {
  __typename?: 'OrderProviderTransactionsAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  operatorId?: Maybe<Scalars['Float']['output']>;
  requestId?: Maybe<Scalars['Float']['output']>;
};

export type OrderProviderTransactionsCountAggregate = {
  __typename?: 'OrderProviderTransactionsCountAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  operatorId?: Maybe<Scalars['Int']['output']>;
  requestId?: Maybe<Scalars['Int']['output']>;
};

export type OrderProviderTransactionsMaxAggregate = {
  __typename?: 'OrderProviderTransactionsMaxAggregate';
  id?: Maybe<Scalars['ID']['output']>;
  operatorId?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
};

export type OrderProviderTransactionsMinAggregate = {
  __typename?: 'OrderProviderTransactionsMinAggregate';
  id?: Maybe<Scalars['ID']['output']>;
  operatorId?: Maybe<Scalars['ID']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
};

export type OrderProviderTransactionsSumAggregate = {
  __typename?: 'OrderProviderTransactionsSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  operatorId?: Maybe<Scalars['Float']['output']>;
  requestId?: Maybe<Scalars['Float']['output']>;
};

export type OrderRiderTransactionsAggregateGroupBy = {
  __typename?: 'OrderRiderTransactionsAggregateGroupBy';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  riderId?: Maybe<Scalars['ID']['output']>;
};

export type OrderRiderTransactionsAggregateResponse = {
  __typename?: 'OrderRiderTransactionsAggregateResponse';
  avg?: Maybe<OrderRiderTransactionsAvgAggregate>;
  count?: Maybe<OrderRiderTransactionsCountAggregate>;
  groupBy?: Maybe<OrderRiderTransactionsAggregateGroupBy>;
  max?: Maybe<OrderRiderTransactionsMaxAggregate>;
  min?: Maybe<OrderRiderTransactionsMinAggregate>;
  sum?: Maybe<OrderRiderTransactionsSumAggregate>;
};

export type OrderRiderTransactionsAvgAggregate = {
  __typename?: 'OrderRiderTransactionsAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  riderId?: Maybe<Scalars['Float']['output']>;
};

export type OrderRiderTransactionsCountAggregate = {
  __typename?: 'OrderRiderTransactionsCountAggregate';
  amount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  currency?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  riderId?: Maybe<Scalars['Int']['output']>;
};

export type OrderRiderTransactionsMaxAggregate = {
  __typename?: 'OrderRiderTransactionsMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  riderId?: Maybe<Scalars['ID']['output']>;
};

export type OrderRiderTransactionsMinAggregate = {
  __typename?: 'OrderRiderTransactionsMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  riderId?: Maybe<Scalars['ID']['output']>;
};

export type OrderRiderTransactionsSumAggregate = {
  __typename?: 'OrderRiderTransactionsSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  riderId?: Maybe<Scalars['Float']['output']>;
};

export type OrderSort = {
  direction: SortDirection;
  field: OrderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderSortFields {
  CreatedOn = 'createdOn',
  DriverId = 'driverId',
  Id = 'id',
  RiderId = 'riderId',
  Status = 'status'
}

export enum OrderStatus {
  Arrived = 'Arrived',
  Booked = 'Booked',
  DriverAccepted = 'DriverAccepted',
  DriverCanceled = 'DriverCanceled',
  Expired = 'Expired',
  Finished = 'Finished',
  Found = 'Found',
  NoCloseFound = 'NoCloseFound',
  NotFound = 'NotFound',
  Requested = 'Requested',
  RiderCanceled = 'RiderCanceled',
  Started = 'Started',
  WaitingForPostPay = 'WaitingForPostPay',
  WaitingForPrePay = 'WaitingForPrePay',
  WaitingForReview = 'WaitingForReview'
}

export type OrderStatusFilterComparison = {
  eq?: InputMaybe<OrderStatus>;
  gt?: InputMaybe<OrderStatus>;
  gte?: InputMaybe<OrderStatus>;
  iLike?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<OrderStatus>;
  lt?: InputMaybe<OrderStatus>;
  lte?: InputMaybe<OrderStatus>;
  neq?: InputMaybe<OrderStatus>;
  notILike?: InputMaybe<OrderStatus>;
  notIn?: InputMaybe<Array<OrderStatus>>;
  notLike?: InputMaybe<OrderStatus>;
};

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  riderId?: Maybe<Scalars['Float']['output']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
};

export type PaymentGateway = {
  __typename?: 'PaymentGateway';
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  media?: Maybe<Media>;
  mediaId?: Maybe<Scalars['Float']['output']>;
  merchantId?: Maybe<Scalars['String']['output']>;
  privateKey: Scalars['String']['output'];
  publicKey?: Maybe<Scalars['String']['output']>;
  saltKey?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: PaymentGatewayType;
};

export type PaymentGatewayConnection = {
  __typename?: 'PaymentGatewayConnection';
  /** Array of nodes. */
  nodes: Array<PaymentGateway>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PaymentGatewayFilter = {
  and?: InputMaybe<Array<PaymentGatewayFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PaymentGatewayFilter>>;
};

export type PaymentGatewayInput = {
  enabled: Scalars['Boolean']['input'];
  mediaId?: InputMaybe<Scalars['Float']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  privateKey: Scalars['String']['input'];
  publicKey?: InputMaybe<Scalars['String']['input']>;
  saltKey?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: PaymentGatewayType;
};

export type PaymentGatewaySort = {
  direction: SortDirection;
  field: PaymentGatewaySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PaymentGatewaySortFields {
  Id = 'id'
}

export enum PaymentGatewayType {
  AmazonPaymentServices = 'AmazonPaymentServices',
  BinancePay = 'BinancePay',
  BrainTree = 'BrainTree',
  CustomLink = 'CustomLink',
  Flutterwave = 'Flutterwave',
  Instamojo = 'Instamojo',
  Mips = 'MIPS',
  MercadoPago = 'MercadoPago',
  MyFatoorah = 'MyFatoorah',
  MyTMoney = 'MyTMoney',
  OpenPix = 'OpenPix',
  PayGate = 'PayGate',
  PayPal = 'PayPal',
  PayTr = 'PayTR',
  PayU = 'PayU',
  Paystack = 'Paystack',
  Paytm = 'Paytm',
  Razorpay = 'Razorpay',
  SberBank = 'SberBank',
  Stripe = 'Stripe',
  WayForPay = 'WayForPay'
}

export type PayoutAccount = {
  __typename?: 'PayoutAccount';
  accountHolderAddress?: Maybe<Scalars['String']['output']>;
  accountHolderCity?: Maybe<Scalars['String']['output']>;
  accountHolderCountry?: Maybe<Scalars['String']['output']>;
  accountHolderDateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  accountHolderName?: Maybe<Scalars['String']['output']>;
  accountHolderPhone?: Maybe<Scalars['String']['output']>;
  accountHolderState?: Maybe<Scalars['String']['output']>;
  accountHolderZip?: Maybe<Scalars['String']['output']>;
  accountNumber?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  branchName?: Maybe<Scalars['String']['output']>;
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  last4: Scalars['String']['output'];
  name: Scalars['String']['output'];
  payoutMethod: PayoutMethod;
  payoutMethodId: Scalars['Float']['output'];
  routingNumber?: Maybe<Scalars['String']['output']>;
  type: SavedPaymentMethodType;
};

export type PayoutAccountAggregateFilter = {
  and?: InputMaybe<Array<PayoutAccountAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  isDefault?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<PayoutAccountAggregateFilter>>;
};

export type PayoutAccountEdge = {
  __typename?: 'PayoutAccountEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the PayoutAccount */
  node: PayoutAccount;
};

export type PayoutAccountFilter = {
  and?: InputMaybe<Array<PayoutAccountFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  isDefault?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<PayoutAccountFilter>>;
};

export type PayoutAccountSort = {
  direction: SortDirection;
  field: PayoutAccountSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PayoutAccountSortFields {
  Id = 'id',
  IsDefault = 'isDefault'
}

export type PayoutMethod = {
  __typename?: 'PayoutMethod';
  balance?: Maybe<Scalars['Float']['output']>;
  currency: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  driverTransactions: DriverTransaction;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  media?: Maybe<Media>;
  mediaId?: Maybe<Scalars['ID']['output']>;
  merchantId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  privateKey?: Maybe<Scalars['String']['output']>;
  publicKey?: Maybe<Scalars['String']['output']>;
  saltKey?: Maybe<Scalars['String']['output']>;
  type: PayoutMethodType;
};

export type PayoutMethodDeleteResponse = {
  __typename?: 'PayoutMethodDeleteResponse';
  balance?: Maybe<Scalars['Float']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mediaId?: Maybe<Scalars['ID']['output']>;
  merchantId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  privateKey?: Maybe<Scalars['String']['output']>;
  publicKey?: Maybe<Scalars['String']['output']>;
  saltKey?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PayoutMethodType>;
};

export type PayoutMethodFilter = {
  and?: InputMaybe<Array<PayoutMethodFilter>>;
  driverTransactions?: InputMaybe<PayoutMethodFilterDriverTransactionFilter>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PayoutMethodFilter>>;
};

export type PayoutMethodFilterDriverTransactionFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<PayoutMethodFilterDriverTransactionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  driverId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PayoutMethodFilterDriverTransactionFilter>>;
  paymentGatewayId?: InputMaybe<IdFilterComparison>;
  payoutAccountId?: InputMaybe<IdFilterComparison>;
  payoutMethodId?: InputMaybe<IdFilterComparison>;
  payoutSessionId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<TransactionStatusFilterComparison>;
};

export type PayoutMethodSort = {
  direction: SortDirection;
  field: PayoutMethodSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PayoutMethodSortFields {
  Id = 'id'
}

export type PayoutMethodStats = {
  __typename?: 'PayoutMethodStats';
  payoutMethod?: Maybe<PayoutMethod>;
  totalCount: Scalars['Float']['output'];
};

/** The type of payout method */
export enum PayoutMethodType {
  BankTransfer = 'BankTransfer',
  Stripe = 'Stripe'
}

export type PayoutSession = {
  __typename?: 'PayoutSession';
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  driverTransactions: PayoutSessionDriverTransactionsConnection;
  driverTransactionsAggregate: Array<PayoutSessionDriverTransactionsAggregateResponse>;
  id: Scalars['ID']['output'];
  payoutMethods: Array<PayoutMethod>;
  processedAt?: Maybe<Scalars['DateTime']['output']>;
  status: PayoutSessionStatus;
  totalAmount: Scalars['Float']['output'];
};


export type PayoutSessionDriverTransactionsArgs = {
  filter?: DriverTransactionFilter;
  paging?: OffsetPaging;
  sorting?: Array<DriverTransactionSort>;
};


export type PayoutSessionDriverTransactionsAggregateArgs = {
  filter?: InputMaybe<DriverTransactionAggregateFilter>;
};


export type PayoutSessionPayoutMethodsArgs = {
  filter?: PayoutMethodFilter;
  sorting?: Array<PayoutMethodSort>;
};

export type PayoutSessionConnection = {
  __typename?: 'PayoutSessionConnection';
  /** Array of nodes. */
  nodes: Array<PayoutSession>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PayoutSessionDriverTransactionsAggregateGroupBy = {
  __typename?: 'PayoutSessionDriverTransactionsAggregateGroupBy';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<TransactionStatus>;
};

export type PayoutSessionDriverTransactionsAggregateResponse = {
  __typename?: 'PayoutSessionDriverTransactionsAggregateResponse';
  avg?: Maybe<PayoutSessionDriverTransactionsAvgAggregate>;
  count?: Maybe<PayoutSessionDriverTransactionsCountAggregate>;
  groupBy?: Maybe<PayoutSessionDriverTransactionsAggregateGroupBy>;
  max?: Maybe<PayoutSessionDriverTransactionsMaxAggregate>;
  min?: Maybe<PayoutSessionDriverTransactionsMinAggregate>;
  sum?: Maybe<PayoutSessionDriverTransactionsSumAggregate>;
};

export type PayoutSessionDriverTransactionsAvgAggregate = {
  __typename?: 'PayoutSessionDriverTransactionsAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  paymentGatewayId?: Maybe<Scalars['Float']['output']>;
  payoutAccountId?: Maybe<Scalars['Float']['output']>;
  payoutMethodId?: Maybe<Scalars['Float']['output']>;
  payoutSessionId?: Maybe<Scalars['Float']['output']>;
};

export type PayoutSessionDriverTransactionsConnection = {
  __typename?: 'PayoutSessionDriverTransactionsConnection';
  /** Array of nodes. */
  nodes: Array<DriverTransaction>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type PayoutSessionDriverTransactionsCountAggregate = {
  __typename?: 'PayoutSessionDriverTransactionsCountAggregate';
  amount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Int']['output']>;
  driverId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  paymentGatewayId?: Maybe<Scalars['Int']['output']>;
  payoutAccountId?: Maybe<Scalars['Int']['output']>;
  payoutMethodId?: Maybe<Scalars['Int']['output']>;
  payoutSessionId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type PayoutSessionDriverTransactionsMaxAggregate = {
  __typename?: 'PayoutSessionDriverTransactionsMaxAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<TransactionStatus>;
};

export type PayoutSessionDriverTransactionsMinAggregate = {
  __typename?: 'PayoutSessionDriverTransactionsMinAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  payoutAccountId?: Maybe<Scalars['ID']['output']>;
  payoutMethodId?: Maybe<Scalars['ID']['output']>;
  payoutSessionId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<TransactionStatus>;
};

export type PayoutSessionDriverTransactionsSumAggregate = {
  __typename?: 'PayoutSessionDriverTransactionsSumAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  driverId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  paymentGatewayId?: Maybe<Scalars['Float']['output']>;
  payoutAccountId?: Maybe<Scalars['Float']['output']>;
  payoutMethodId?: Maybe<Scalars['Float']['output']>;
  payoutSessionId?: Maybe<Scalars['Float']['output']>;
};

export type PayoutSessionFilter = {
  and?: InputMaybe<Array<PayoutSessionFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PayoutSessionFilter>>;
};

export type PayoutSessionSort = {
  direction: SortDirection;
  field: PayoutSessionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PayoutSessionSortFields {
  Id = 'id'
}

export enum PayoutSessionStatus {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type PayoutStatistics = {
  __typename?: 'PayoutStatistics';
  currency: Scalars['String']['output'];
  lastPayoutAmount: Scalars['Float']['output'];
  pendingAmount: Scalars['Float']['output'];
  usersDefaultPayoutMethodStats: Array<PayoutMethodStats>;
};

export type Point = {
  __typename?: 'Point';
  heading?: Maybe<Scalars['Int']['output']>;
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type PointInput = {
  heading?: InputMaybe<Scalars['Int']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export enum ProviderDeductTransactionType {
  Withdraw = 'Withdraw'
}

export enum ProviderRechargeTransactionType {
  Commission = 'Commission'
}

export type ProviderTransaction = {
  __typename?: 'ProviderTransaction';
  action: TransactionAction;
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  deductType?: Maybe<ProviderDeductTransactionType>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  operatorId?: Maybe<Scalars['ID']['output']>;
  rechargeType?: Maybe<ProviderRechargeTransactionType>;
  refrenceNumber?: Maybe<Scalars['String']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
};

export type ProviderTransactionAggregateFilter = {
  and?: InputMaybe<Array<ProviderTransactionAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  operatorId?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProviderTransactionAggregateFilter>>;
  requestId?: InputMaybe<IdFilterComparison>;
};

export type ProviderTransactionConnection = {
  __typename?: 'ProviderTransactionConnection';
  /** Array of nodes. */
  nodes: Array<ProviderTransaction>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProviderTransactionFilter = {
  and?: InputMaybe<Array<ProviderTransactionFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  operatorId?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProviderTransactionFilter>>;
  requestId?: InputMaybe<IdFilterComparison>;
};

export type ProviderTransactionInput = {
  action: TransactionAction;
  amount: Scalars['Float']['input'];
  createdAt: Scalars['DateTime']['input'];
  currency: Scalars['String']['input'];
  deductType?: InputMaybe<ProviderDeductTransactionType>;
  description?: InputMaybe<Scalars['String']['input']>;
  operatorId?: InputMaybe<Scalars['ID']['input']>;
  rechargeType?: InputMaybe<ProviderRechargeTransactionType>;
  refrenceNumber?: InputMaybe<Scalars['String']['input']>;
  requestId?: InputMaybe<Scalars['ID']['input']>;
};

export type ProviderTransactionSort = {
  direction: SortDirection;
  field: ProviderTransactionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProviderTransactionSortFields {
  Id = 'id',
  OperatorId = 'operatorId',
  RequestId = 'requestId'
}

export type ProviderWallet = {
  __typename?: 'ProviderWallet';
  balance: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ProviderWalletFilter = {
  and?: InputMaybe<Array<ProviderWalletFilter>>;
  balance?: InputMaybe<FloatFieldComparison>;
  currency?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProviderWalletFilter>>;
};

export type ProviderWalletSort = {
  direction: SortDirection;
  field: ProviderWalletSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProviderWalletSortFields {
  Balance = 'balance',
  Currency = 'currency',
  Id = 'id'
}

export type Query = {
  __typename?: 'Query';
  address: Address;
  addresses: AddressConnection;
  announcement: Announcement;
  announcements: AnnouncementConnection;
  calculateFare: CalculateFareDto;
  carColor: CarColor;
  carColors: Array<CarColor>;
  carModel: CarModel;
  carModels: CarModelConnection;
  complaint: Complaint;
  complaintActivities: Array<ComplaintActivity>;
  complaintActivity: ComplaintActivity;
  complaintAggregate: Array<ComplaintAggregateResponse>;
  complaints: ComplaintConnection;
  coupon: Coupon;
  coupons: CouponConnection;
  currentConfiguration: CurrentConfiguration;
  distressSignal: DistressSignal;
  distressSignalAggregate: Array<DistressSignalAggregateResponse>;
  distressSignals: DistressSignalConnection;
  driver: Driver;
  driverAggregate: Array<DriverAggregateResponse>;
  driverFeedbackParametersSummary: Array<FeedbackParameterAggregate>;
  driverRegistrations: Array<RegistrationResultItem>;
  driverTransaction: DriverTransaction;
  driverTransactionAggregate: Array<DriverTransactionAggregateResponse>;
  driverTransactions: DriverTransactionConnection;
  driverWallet: DriverWallet;
  driverWallets: DriverWalletConnection;
  drivers: DriverConnection;
  export: ExportResult;
  feedback: Feedback;
  feedbackParameter: FeedbackParameter;
  feedbackParameters: Array<FeedbackParameter>;
  feedbacks: FeedbackConnection;
  fleet: Fleet;
  fleetTransaction: FleetTransaction;
  fleetTransactions: FleetTransactionConnection;
  fleetWallet: FleetWallet;
  fleetWallets: FleetWalletConnection;
  fleets: FleetConnection;
  getDriversLocation: Array<OnlineDriver>;
  getDriversLocationWithData: Array<OnlineDriverWithData>;
  giftBatch: GiftBatch;
  giftBatches: GiftBatchConnection;
  incomeChart: Array<IncomeResultItem>;
  login: TokenObject;
  me: Operator;
  operator: Operator;
  operatorRole: OperatorRole;
  operatorRoles: Array<OperatorRole>;
  operators: OperatorConnection;
  order: Order;
  orderAggregate: Array<OrderAggregateResponse>;
  orderCancelReason: OrderCancelReason;
  orderCancelReasons: OrderCancelReasonConnection;
  orders: OrderConnection;
  paymentGateway: PaymentGateway;
  paymentGateways: PaymentGatewayConnection;
  payoutAccount: PayoutAccount;
  payoutMethod: PayoutMethod;
  payoutMethods: Array<PayoutMethod>;
  payoutSession: PayoutSession;
  payoutSessions: PayoutSessionConnection;
  payoutStatistics: PayoutStatistics;
  providerTransaction: ProviderTransaction;
  providerTransactions: ProviderTransactionConnection;
  providerWallet: ProviderWallet;
  providerWallets: Array<ProviderWallet>;
  region: Region;
  regionAggregate: Array<RegionAggregateResponse>;
  regions: RegionConnection;
  requestChart: Array<RequestResultItem>;
  reward: Reward;
  rewards: RewardConnection;
  rider: Rider;
  riderAddress: RiderAddress;
  riderAddresses: RiderAddressConnection;
  riderRegistrations: Array<RegistrationResultItem>;
  riderTransaction: RiderTransaction;
  riderTransactions: RiderTransactionConnection;
  riderWallet: RiderWallet;
  riderWallets: RiderWalletConnection;
  riders: RiderConnection;
  service: Service;
  serviceCategories: Array<ServiceCategory>;
  serviceCategory: ServiceCategory;
  serviceOption: ServiceOption;
  serviceOptions: Array<ServiceOption>;
  services: Array<Service>;
  smsProvider: SmsProvider;
  smsProviders: SmsProviderConnection;
  supportedCurrencies: Array<Scalars['String']['output']>;
  zonePrice: ZonePrice;
  zonePrices: ZonePriceConnection;
};


export type QueryAddressArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAddressesArgs = {
  filter?: AddressFilter;
  paging?: CursorPaging;
  sorting?: Array<AddressSort>;
};


export type QueryAnnouncementArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAnnouncementsArgs = {
  filter?: AnnouncementFilter;
  paging?: OffsetPaging;
  sorting?: Array<AnnouncementSort>;
};


export type QueryCalculateFareArgs = {
  input: CalculateFareInput;
};


export type QueryCarColorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCarColorsArgs = {
  filter?: CarColorFilter;
  sorting?: Array<CarColorSort>;
};


export type QueryCarModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCarModelsArgs = {
  filter?: CarModelFilter;
  paging?: OffsetPaging;
  sorting?: Array<CarModelSort>;
};


export type QueryComplaintArgs = {
  id: Scalars['ID']['input'];
};


export type QueryComplaintActivitiesArgs = {
  filter?: ComplaintActivityFilter;
  sorting?: Array<ComplaintActivitySort>;
};


export type QueryComplaintActivityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryComplaintAggregateArgs = {
  filter?: InputMaybe<ComplaintAggregateFilter>;
};


export type QueryComplaintsArgs = {
  filter?: ComplaintFilter;
  paging?: OffsetPaging;
  sorting?: Array<ComplaintSort>;
};


export type QueryCouponArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCouponsArgs = {
  filter?: CouponFilter;
  paging?: OffsetPaging;
  sorting?: Array<CouponSort>;
};


export type QueryDistressSignalArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDistressSignalAggregateArgs = {
  filter?: InputMaybe<DistressSignalAggregateFilter>;
};


export type QueryDistressSignalsArgs = {
  filter?: DistressSignalFilter;
  paging?: OffsetPaging;
  sorting?: Array<DistressSignalSort>;
};


export type QueryDriverArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDriverAggregateArgs = {
  filter?: InputMaybe<DriverAggregateFilter>;
};


export type QueryDriverFeedbackParametersSummaryArgs = {
  driverId: Scalars['ID']['input'];
};


export type QueryDriverRegistrationsArgs = {
  timeframe: ChartTimeframe;
};


export type QueryDriverTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDriverTransactionAggregateArgs = {
  filter?: InputMaybe<DriverTransactionAggregateFilter>;
};


export type QueryDriverTransactionsArgs = {
  filter?: DriverTransactionFilter;
  paging?: OffsetPaging;
  sorting?: Array<DriverTransactionSort>;
};


export type QueryDriverWalletArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDriverWalletsArgs = {
  filter?: DriverWalletFilter;
  paging?: OffsetPaging;
  sorting?: Array<DriverWalletSort>;
};


export type QueryDriversArgs = {
  filter?: DriverFilter;
  paging?: OffsetPaging;
  sorting?: Array<DriverSort>;
};


export type QueryExportArgs = {
  input: ExportArgs;
};


export type QueryFeedbackArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFeedbackParameterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFeedbackParametersArgs = {
  filter?: FeedbackParameterFilter;
  sorting?: Array<FeedbackParameterSort>;
};


export type QueryFeedbacksArgs = {
  filter?: FeedbackFilter;
  paging?: OffsetPaging;
  sorting?: Array<FeedbackSort>;
};


export type QueryFleetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFleetTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFleetTransactionsArgs = {
  filter?: FleetTransactionFilter;
  paging?: OffsetPaging;
  sorting?: Array<FleetTransactionSort>;
};


export type QueryFleetWalletArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFleetWalletsArgs = {
  filter?: FleetWalletFilter;
  paging?: OffsetPaging;
  sorting?: Array<FleetWalletSort>;
};


export type QueryFleetsArgs = {
  filter?: FleetFilter;
  paging?: OffsetPaging;
  sorting?: Array<FleetSort>;
};


export type QueryGetDriversLocationArgs = {
  center: PointInput;
  count: Scalars['Int']['input'];
};


export type QueryGetDriversLocationWithDataArgs = {
  center: PointInput;
  count: Scalars['Int']['input'];
};


export type QueryGiftBatchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGiftBatchesArgs = {
  filter?: GiftBatchFilter;
  paging?: OffsetPaging;
  sorting?: Array<GiftBatchSort>;
};


export type QueryIncomeChartArgs = {
  timeframe: ChartTimeframe;
};


export type QueryLoginArgs = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};


export type QueryOperatorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOperatorRoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOperatorRolesArgs = {
  filter?: OperatorRoleFilter;
  sorting?: Array<OperatorRoleSort>;
};


export type QueryOperatorsArgs = {
  filter?: OperatorFilter;
  paging?: OffsetPaging;
  sorting?: Array<OperatorSort>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderAggregateArgs = {
  filter?: InputMaybe<OrderAggregateFilter>;
};


export type QueryOrderCancelReasonArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderCancelReasonsArgs = {
  filter?: OrderCancelReasonFilter;
  paging?: OffsetPaging;
  sorting?: Array<OrderCancelReasonSort>;
};


export type QueryOrdersArgs = {
  filter?: OrderFilter;
  paging?: OffsetPaging;
  sorting?: Array<OrderSort>;
};


export type QueryPaymentGatewayArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentGatewaysArgs = {
  filter?: PaymentGatewayFilter;
  paging?: OffsetPaging;
  sorting?: Array<PaymentGatewaySort>;
};


export type QueryPayoutAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPayoutMethodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPayoutMethodsArgs = {
  filter?: PayoutMethodFilter;
  sorting?: Array<PayoutMethodSort>;
};


export type QueryPayoutSessionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPayoutSessionsArgs = {
  filter?: PayoutSessionFilter;
  paging?: OffsetPaging;
  sorting?: Array<PayoutSessionSort>;
};


export type QueryPayoutStatisticsArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProviderTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProviderTransactionsArgs = {
  filter?: ProviderTransactionFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProviderTransactionSort>;
};


export type QueryProviderWalletArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProviderWalletsArgs = {
  filter?: ProviderWalletFilter;
  sorting?: Array<ProviderWalletSort>;
};


export type QueryRegionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRegionAggregateArgs = {
  filter?: InputMaybe<RegionAggregateFilter>;
};


export type QueryRegionsArgs = {
  filter?: RegionFilter;
  paging?: OffsetPaging;
  sorting?: Array<RegionSort>;
};


export type QueryRequestChartArgs = {
  timeframe: ChartTimeframe;
};


export type QueryRewardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRewardsArgs = {
  filter?: RewardFilter;
  paging?: OffsetPaging;
  sorting?: Array<RewardSort>;
};


export type QueryRiderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRiderAddressArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRiderAddressesArgs = {
  filter?: RiderAddressFilter;
  paging?: OffsetPaging;
  sorting?: Array<RiderAddressSort>;
};


export type QueryRiderRegistrationsArgs = {
  timeframe: ChartTimeframe;
};


export type QueryRiderTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRiderTransactionsArgs = {
  filter?: RiderTransactionFilter;
  paging?: OffsetPaging;
  sorting?: Array<RiderTransactionSort>;
};


export type QueryRiderWalletArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRiderWalletsArgs = {
  filter?: RiderWalletFilter;
  paging?: OffsetPaging;
  sorting?: Array<RiderWalletSort>;
};


export type QueryRidersArgs = {
  filter?: RiderFilter;
  paging?: OffsetPaging;
  sorting?: Array<RiderSort>;
};


export type QueryServiceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServiceCategoriesArgs = {
  filter?: ServiceCategoryFilter;
  sorting?: Array<ServiceCategorySort>;
};


export type QueryServiceCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServiceOptionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServiceOptionsArgs = {
  filter?: ServiceOptionFilter;
  sorting?: Array<ServiceOptionSort>;
};


export type QueryServicesArgs = {
  filter?: ServiceFilter;
  sorting?: Array<ServiceSort>;
};


export type QuerySmsProviderArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySmsProvidersArgs = {
  filter?: SmsProviderFilter;
  paging?: OffsetPaging;
  sorting?: Array<SmsProviderSort>;
};


export type QueryZonePriceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryZonePricesArgs = {
  filter?: ZonePriceFilter;
  paging?: OffsetPaging;
  sorting?: Array<ZonePriceSort>;
};

export type Region = {
  __typename?: 'Region';
  currency: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  location: Array<Array<Point>>;
  name: Scalars['String']['output'];
};

export type RegionAggregateFilter = {
  and?: InputMaybe<Array<RegionAggregateFilter>>;
  currency?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RegionAggregateFilter>>;
};

export type RegionAggregateGroupBy = {
  __typename?: 'RegionAggregateGroupBy';
  currency?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RegionAggregateResponse = {
  __typename?: 'RegionAggregateResponse';
  avg?: Maybe<RegionAvgAggregate>;
  count?: Maybe<RegionCountAggregate>;
  groupBy?: Maybe<RegionAggregateGroupBy>;
  max?: Maybe<RegionMaxAggregate>;
  min?: Maybe<RegionMinAggregate>;
  sum?: Maybe<RegionSumAggregate>;
};

export type RegionAvgAggregate = {
  __typename?: 'RegionAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type RegionConnection = {
  __typename?: 'RegionConnection';
  /** Array of nodes. */
  nodes: Array<Region>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RegionCountAggregate = {
  __typename?: 'RegionCountAggregate';
  currency?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type RegionDeleteResponse = {
  __typename?: 'RegionDeleteResponse';
  currency?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Array<Array<Point>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type RegionFilter = {
  and?: InputMaybe<Array<RegionFilter>>;
  currency?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RegionFilter>>;
};

export type RegionInput = {
  currency: Scalars['String']['input'];
  enabled: Scalars['Boolean']['input'];
  location: Array<Array<PointInput>>;
  name: Scalars['String']['input'];
};

export type RegionMaxAggregate = {
  __typename?: 'RegionMaxAggregate';
  currency?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RegionMinAggregate = {
  __typename?: 'RegionMinAggregate';
  currency?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RegionSort = {
  direction: SortDirection;
  field: RegionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RegionSortFields {
  Currency = 'currency',
  Id = 'id'
}

export type RegionSumAggregate = {
  __typename?: 'RegionSumAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type RegistrationResultItem = {
  __typename?: 'RegistrationResultItem';
  count: Scalars['Int']['output'];
  time: Scalars['String']['output'];
};

export type RequestActivity = {
  __typename?: 'RequestActivity';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  type: RequestActivityType;
};

export type RequestActivityAggregateFilter = {
  and?: InputMaybe<Array<RequestActivityAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RequestActivityAggregateFilter>>;
};

export type RequestActivityFilter = {
  and?: InputMaybe<Array<RequestActivityFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RequestActivityFilter>>;
};

export type RequestActivitySort = {
  direction: SortDirection;
  field: RequestActivitySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RequestActivitySortFields {
  Id = 'id'
}

export enum RequestActivityType {
  ArrivedToDestination = 'ArrivedToDestination',
  ArrivedToPickupPoint = 'ArrivedToPickupPoint',
  BookedByOperator = 'BookedByOperator',
  BookedByRider = 'BookedByRider',
  CanceledByDriver = 'CanceledByDriver',
  CanceledByOperator = 'CanceledByOperator',
  CanceledByRider = 'CanceledByRider',
  DriverAccepted = 'DriverAccepted',
  Expired = 'Expired',
  Paid = 'Paid',
  RequestedByOperator = 'RequestedByOperator',
  RequestedByRider = 'RequestedByRider',
  Reviewed = 'Reviewed',
  Started = 'Started'
}

export type RequestResultItem = {
  __typename?: 'RequestResultItem';
  count: Scalars['Float']['output'];
  status: OrderStatus;
  time: Scalars['String']['output'];
};

export type Reward = {
  __typename?: 'Reward';
  appType: RewardAppType;
  beneficiary: RewardBeneficiary;
  conditionTripCountsLessThan?: Maybe<Scalars['Float']['output']>;
  conditionUserNumberFirstDigits?: Maybe<Array<Scalars['String']['output']>>;
  creditCurrency?: Maybe<Scalars['String']['output']>;
  creditGift: Scalars['Float']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  event: RewardEvent;
  id: Scalars['ID']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  tripFeePercentGift?: Maybe<Scalars['Float']['output']>;
};

export enum RewardAppType {
  Driver = 'Driver',
  Rider = 'Rider'
}

export enum RewardBeneficiary {
  Referrer = 'Referrer',
  Self = 'Self'
}

export type RewardConnection = {
  __typename?: 'RewardConnection';
  /** Array of nodes. */
  nodes: Array<Reward>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RewardDeleteResponse = {
  __typename?: 'RewardDeleteResponse';
  appType?: Maybe<RewardAppType>;
  beneficiary?: Maybe<RewardBeneficiary>;
  conditionTripCountsLessThan?: Maybe<Scalars['Float']['output']>;
  conditionUserNumberFirstDigits?: Maybe<Array<Scalars['String']['output']>>;
  creditCurrency?: Maybe<Scalars['String']['output']>;
  creditGift?: Maybe<Scalars['Float']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  event?: Maybe<RewardEvent>;
  id?: Maybe<Scalars['ID']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tripFeePercentGift?: Maybe<Scalars['Float']['output']>;
};

export enum RewardEvent {
  Register = 'Register',
  ServiceCompleted = 'ServiceCompleted'
}

export type RewardFilter = {
  and?: InputMaybe<Array<RewardFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RewardFilter>>;
};

export type RewardSort = {
  direction: SortDirection;
  field: RewardSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RewardSortFields {
  Id = 'id'
}

export type Rider = {
  __typename?: 'Rider';
  addresses: RiderAddressesConnection;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  idNumber?: Maybe<Scalars['String']['output']>;
  isResident?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Media>;
  mobileNumber: Scalars['String']['output'];
  orders: RiderOrdersConnection;
  registrationTimestamp: Scalars['DateTime']['output'];
  status: RiderStatus;
  transactions: RiderTransactionsConnection;
  wallets: RiderWalletsConnection;
};


export type RiderAddressesArgs = {
  filter?: RiderAddressFilter;
  paging?: OffsetPaging;
  sorting?: Array<RiderAddressSort>;
};


export type RiderOrdersArgs = {
  filter?: OrderFilter;
  paging?: OffsetPaging;
  sorting?: Array<OrderSort>;
};


export type RiderTransactionsArgs = {
  filter?: RiderTransactionFilter;
  paging?: OffsetPaging;
  sorting?: Array<RiderTransactionSort>;
};


export type RiderWalletsArgs = {
  filter?: RiderWalletFilter;
  paging?: OffsetPaging;
  sorting?: Array<RiderWalletSort>;
};

export type RiderAddress = {
  __typename?: 'RiderAddress';
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location: Point;
  riderId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  type: RiderAddressType;
};

export type RiderAddressConnection = {
  __typename?: 'RiderAddressConnection';
  /** Array of nodes. */
  nodes: Array<RiderAddress>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RiderAddressFilter = {
  and?: InputMaybe<Array<RiderAddressFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RiderAddressFilter>>;
  riderId?: InputMaybe<IdFilterComparison>;
};

export type RiderAddressSort = {
  direction: SortDirection;
  field: RiderAddressSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RiderAddressSortFields {
  Id = 'id',
  RiderId = 'riderId'
}

export enum RiderAddressType {
  Cafe = 'Cafe',
  Gym = 'Gym',
  Home = 'Home',
  Other = 'Other',
  Parent = 'Parent',
  Park = 'Park',
  Partner = 'Partner',
  Work = 'Work'
}

export type RiderAddressUpdateFilter = {
  and?: InputMaybe<Array<RiderAddressUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RiderAddressUpdateFilter>>;
  riderId?: InputMaybe<IdFilterComparison>;
};

export type RiderAddressesConnection = {
  __typename?: 'RiderAddressesConnection';
  /** Array of nodes. */
  nodes: Array<RiderAddress>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RiderConnection = {
  __typename?: 'RiderConnection';
  /** Array of nodes. */
  nodes: Array<Rider>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export enum RiderDeductTransactionType {
  CancellationFee = 'CancellationFee',
  Correction = 'Correction',
  OrderFee = 'OrderFee',
  ParkingFee = 'ParkingFee',
  Withdraw = 'Withdraw'
}

export type RiderFilter = {
  and?: InputMaybe<Array<RiderFilter>>;
  firstName?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  lastName?: InputMaybe<StringFieldComparison>;
  mobileNumber?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<RiderFilter>>;
};

export type RiderInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  idNumber?: InputMaybe<Scalars['String']['input']>;
  isResident?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  registrationTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<RiderStatus>;
};

export type RiderOrdersConnection = {
  __typename?: 'RiderOrdersConnection';
  /** Array of nodes. */
  nodes: Array<Order>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export enum RiderRechargeTransactionType {
  BankTransfer = 'BankTransfer',
  Correction = 'Correction',
  Gift = 'Gift',
  InAppPayment = 'InAppPayment'
}

export type RiderSort = {
  direction: SortDirection;
  field: RiderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RiderSortFields {
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  MobileNumber = 'mobileNumber'
}

export enum RiderStatus {
  Disabled = 'Disabled',
  Enabled = 'Enabled'
}

export type RiderTransaction = {
  __typename?: 'RiderTransaction';
  action: TransactionAction;
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  deductType?: Maybe<RiderDeductTransactionType>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  operator?: Maybe<Operator>;
  operatorId?: Maybe<Scalars['ID']['output']>;
  paymentGateway?: Maybe<PaymentGateway>;
  paymentGatewayId?: Maybe<Scalars['ID']['output']>;
  rechargeType?: Maybe<RiderRechargeTransactionType>;
  refrenceNumber?: Maybe<Scalars['String']['output']>;
  requestId?: Maybe<Scalars['ID']['output']>;
  rider: Rider;
  riderId: Scalars['ID']['output'];
  status: TransactionStatus;
};

export type RiderTransactionAggregateFilter = {
  amount?: InputMaybe<FloatFieldComparison>;
  and?: InputMaybe<Array<RiderTransactionAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RiderTransactionAggregateFilter>>;
  riderId?: InputMaybe<IdFilterComparison>;
};

export type RiderTransactionConnection = {
  __typename?: 'RiderTransactionConnection';
  /** Array of nodes. */
  nodes: Array<RiderTransaction>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RiderTransactionFilter = {
  amount?: InputMaybe<FloatFieldComparison>;
  and?: InputMaybe<Array<RiderTransactionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  currency?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RiderTransactionFilter>>;
  riderId?: InputMaybe<IdFilterComparison>;
};

export type RiderTransactionInput = {
  action: TransactionAction;
  amount: Scalars['Float']['input'];
  currency: Scalars['String']['input'];
  deductType?: InputMaybe<RiderDeductTransactionType>;
  description?: InputMaybe<Scalars['String']['input']>;
  rechargeType?: InputMaybe<RiderRechargeTransactionType>;
  refrenceNumber?: InputMaybe<Scalars['String']['input']>;
  riderId: Scalars['ID']['input'];
};

export type RiderTransactionSort = {
  direction: SortDirection;
  field: RiderTransactionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RiderTransactionSortFields {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  Currency = 'currency',
  Id = 'id',
  RiderId = 'riderId'
}

export type RiderTransactionsConnection = {
  __typename?: 'RiderTransactionsConnection';
  /** Array of nodes. */
  nodes: Array<RiderTransaction>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RiderWallet = {
  __typename?: 'RiderWallet';
  balance: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rider?: Maybe<Rider>;
  riderId?: Maybe<Scalars['ID']['output']>;
};

export type RiderWalletConnection = {
  __typename?: 'RiderWalletConnection';
  /** Array of nodes. */
  nodes: Array<RiderWallet>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RiderWalletFilter = {
  and?: InputMaybe<Array<RiderWalletFilter>>;
  balance?: InputMaybe<FloatFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RiderWalletFilter>>;
  riderId?: InputMaybe<IdFilterComparison>;
};

export type RiderWalletSort = {
  direction: SortDirection;
  field: RiderWalletSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RiderWalletSortFields {
  Balance = 'balance',
  Id = 'id',
  RiderId = 'riderId'
}

export type RiderWalletsConnection = {
  __typename?: 'RiderWalletsConnection';
  /** Array of nodes. */
  nodes: Array<RiderWallet>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type RunAutoPayoutInput = {
  payoutMethodId: Scalars['ID']['input'];
  payoutSessionId: Scalars['ID']['input'];
};

/** SMS Provider */
export type SmsProvider = {
  __typename?: 'SMSProvider';
  accountId?: Maybe<Scalars['String']['output']>;
  authToken?: Maybe<Scalars['String']['output']>;
  fromNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  smsType?: Maybe<Scalars['String']['output']>;
  type: SmsProviderType;
  verificationTemplate?: Maybe<Scalars['String']['output']>;
};

export type SmsProviderConnection = {
  __typename?: 'SMSProviderConnection';
  /** Array of nodes. */
  nodes: Array<SmsProvider>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type SmsProviderDeleteFilter = {
  and?: InputMaybe<Array<SmsProviderDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SmsProviderDeleteFilter>>;
};

export type SmsProviderDeleteResponse = {
  __typename?: 'SMSProviderDeleteResponse';
  accountId?: Maybe<Scalars['String']['output']>;
  authToken?: Maybe<Scalars['String']['output']>;
  fromNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  smsType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SmsProviderType>;
  verificationTemplate?: Maybe<Scalars['String']['output']>;
};

export type SmsProviderFilter = {
  and?: InputMaybe<Array<SmsProviderFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SmsProviderFilter>>;
};

export type SmsProviderInput = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  authToken?: InputMaybe<Scalars['String']['input']>;
  fromNumber?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  smsType?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SmsProviderType>;
  verificationTemplate?: InputMaybe<Scalars['String']['input']>;
};

export type SmsProviderSort = {
  direction: SortDirection;
  field: SmsProviderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SmsProviderSortFields {
  Id = 'id'
}

/** The type of the SMS provider */
export enum SmsProviderType {
  BroadNet = 'BroadNet',
  ClickSend = 'ClickSend',
  Firebase = 'Firebase',
  Infobip = 'Infobip',
  MessageBird = 'MessageBird',
  Pahappa = 'Pahappa',
  Plivo = 'Plivo',
  Twilio = 'Twilio',
  Vonage = 'Vonage'
}

export type SmsProviderUpdateFilter = {
  and?: InputMaybe<Array<SmsProviderUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SmsProviderUpdateFilter>>;
};

export type SosActivity = {
  __typename?: 'SOSActivity';
  action: SosActivityAction;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  operator: Operator;
  operatorId?: Maybe<Scalars['Float']['output']>;
};

export enum SosActivityAction {
  ContactAuthorities = 'ContactAuthorities',
  ContactDriver = 'ContactDriver',
  MarkedAsFalseAlarm = 'MarkedAsFalseAlarm',
  MarkedAsResolved = 'MarkedAsResolved',
  Seen = 'Seen',
  Submitted = 'Submitted'
}

export type SosActivityAggregateFilter = {
  and?: InputMaybe<Array<SosActivityAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SosActivityAggregateFilter>>;
};

export type SosActivityFilter = {
  and?: InputMaybe<Array<SosActivityFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SosActivityFilter>>;
};

export type SosActivitySort = {
  direction: SortDirection;
  field: SosActivitySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SosActivitySortFields {
  Id = 'id'
}

export enum SosStatus {
  FalseAlarm = 'FalseAlarm',
  Resolved = 'Resolved',
  Submitted = 'Submitted',
  UnderReview = 'UnderReview'
}

export type SosStatusFilterComparison = {
  eq?: InputMaybe<SosStatus>;
  gt?: InputMaybe<SosStatus>;
  gte?: InputMaybe<SosStatus>;
  iLike?: InputMaybe<SosStatus>;
  in?: InputMaybe<Array<SosStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<SosStatus>;
  lt?: InputMaybe<SosStatus>;
  lte?: InputMaybe<SosStatus>;
  neq?: InputMaybe<SosStatus>;
  notILike?: InputMaybe<SosStatus>;
  notIn?: InputMaybe<Array<SosStatus>>;
  notLike?: InputMaybe<SosStatus>;
};

/** Saved payment method type */
export enum SavedPaymentMethodType {
  BankAccount = 'BANK_ACCOUNT',
  Card = 'CARD'
}

export type Service = {
  __typename?: 'Service';
  baseFare: Scalars['Float']['output'];
  cancellationDriverShare: Scalars['Float']['output'];
  cancellationTotalFee: Scalars['Float']['output'];
  categoryId: Scalars['ID']['output'];
  dateRangeMultipliers: Array<DateRangeMultiplier>;
  description?: Maybe<Scalars['String']['output']>;
  distanceMultipliers: Array<DistanceMultiplier>;
  id: Scalars['ID']['output'];
  maximumDestinationDistance: Scalars['Int']['output'];
  media: Media;
  mediaId: Scalars['ID']['output'];
  minimumFee: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  options: Array<ServiceOption>;
  paymentMethod: ServicePaymentMethod;
  perHundredMeters: Scalars['Float']['output'];
  perMinuteDrive: Scalars['Float']['output'];
  perMinuteWait: Scalars['Float']['output'];
  personCapacity?: Maybe<Scalars['Int']['output']>;
  prepayPercent: Scalars['Float']['output'];
  providerShareFlat: Scalars['Float']['output'];
  providerSharePercent: Scalars['Int']['output'];
  regions: Array<Region>;
  roundingFactor?: Maybe<Scalars['Float']['output']>;
  searchRadius: Scalars['Int']['output'];
  timeMultipliers: Array<TimeMultiplier>;
  twoWayAvailable: Scalars['Boolean']['output'];
  weekdayMultipliers: Array<WeekdayMultiplier>;
};


export type ServiceOptionsArgs = {
  filter?: ServiceOptionFilter;
  sorting?: Array<ServiceOptionSort>;
};


export type ServiceRegionsArgs = {
  filter?: RegionFilter;
  sorting?: Array<RegionSort>;
};

export type ServiceAggregateFilter = {
  and?: InputMaybe<Array<ServiceAggregateFilter>>;
  categoryId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceAggregateFilter>>;
};

export type ServiceCategory = {
  __typename?: 'ServiceCategory';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  services: Array<Service>;
};


export type ServiceCategoryServicesArgs = {
  filter?: ServiceFilter;
  sorting?: Array<ServiceSort>;
};

export type ServiceCategoryDeleteResponse = {
  __typename?: 'ServiceCategoryDeleteResponse';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ServiceCategoryFilter = {
  and?: InputMaybe<Array<ServiceCategoryFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceCategoryFilter>>;
};

export type ServiceCategoryInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type ServiceCategorySort = {
  direction: SortDirection;
  field: ServiceCategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ServiceCategorySortFields {
  Id = 'id'
}

export type ServiceCategoryWithCost = {
  __typename?: 'ServiceCategoryWithCost';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  services: Array<ServiceWithCost>;
};

export type ServiceDeleteResponse = {
  __typename?: 'ServiceDeleteResponse';
  baseFare?: Maybe<Scalars['Float']['output']>;
  cancellationDriverShare?: Maybe<Scalars['Float']['output']>;
  cancellationTotalFee?: Maybe<Scalars['Float']['output']>;
  categoryId?: Maybe<Scalars['ID']['output']>;
  dateRangeMultipliers?: Maybe<Array<DateRangeMultiplier>>;
  description?: Maybe<Scalars['String']['output']>;
  distanceMultipliers?: Maybe<Array<DistanceMultiplier>>;
  id?: Maybe<Scalars['ID']['output']>;
  maximumDestinationDistance?: Maybe<Scalars['Int']['output']>;
  mediaId?: Maybe<Scalars['ID']['output']>;
  minimumFee?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<ServicePaymentMethod>;
  perHundredMeters?: Maybe<Scalars['Float']['output']>;
  perMinuteDrive?: Maybe<Scalars['Float']['output']>;
  perMinuteWait?: Maybe<Scalars['Float']['output']>;
  personCapacity?: Maybe<Scalars['Int']['output']>;
  prepayPercent?: Maybe<Scalars['Float']['output']>;
  providerShareFlat?: Maybe<Scalars['Float']['output']>;
  providerSharePercent?: Maybe<Scalars['Int']['output']>;
  roundingFactor?: Maybe<Scalars['Float']['output']>;
  searchRadius?: Maybe<Scalars['Int']['output']>;
  timeMultipliers?: Maybe<Array<TimeMultiplier>>;
  twoWayAvailable?: Maybe<Scalars['Boolean']['output']>;
  weekdayMultipliers?: Maybe<Array<WeekdayMultiplier>>;
};

export type ServiceFilter = {
  and?: InputMaybe<Array<ServiceFilter>>;
  categoryId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceFilter>>;
};

export type ServiceInput = {
  baseFare: Scalars['Float']['input'];
  cancellationDriverShare: Scalars['Float']['input'];
  cancellationTotalFee: Scalars['Float']['input'];
  categoryId: Scalars['ID']['input'];
  dateRangeMultipliers: Array<DateRangeMultiplierInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  distanceMultipliers: Array<DistanceMultiplierInput>;
  maximumDestinationDistance: Scalars['Int']['input'];
  mediaId: Scalars['ID']['input'];
  minimumFee: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  paymentMethod: ServicePaymentMethod;
  perHundredMeters: Scalars['Float']['input'];
  perMinuteDrive: Scalars['Float']['input'];
  perMinuteWait: Scalars['Float']['input'];
  personCapacity?: InputMaybe<Scalars['Int']['input']>;
  prepayPercent: Scalars['Float']['input'];
  providerShareFlat: Scalars['Float']['input'];
  providerSharePercent: Scalars['Int']['input'];
  roundingFactor?: InputMaybe<Scalars['Float']['input']>;
  searchRadius: Scalars['Int']['input'];
  timeMultipliers: Array<TimeMultiplierInput>;
  twoWayAvailable: Scalars['Boolean']['input'];
  weekdayMultipliers: Array<WeekdayMultiplierInput>;
};

export type ServiceOption = {
  __typename?: 'ServiceOption';
  additionalFee?: Maybe<Scalars['Float']['output']>;
  icon: ServiceOptionIcon;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: ServiceOptionType;
};

export type ServiceOptionDeleteResponse = {
  __typename?: 'ServiceOptionDeleteResponse';
  additionalFee?: Maybe<Scalars['Float']['output']>;
  icon?: Maybe<ServiceOptionIcon>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<ServiceOptionType>;
};

export type ServiceOptionFilter = {
  and?: InputMaybe<Array<ServiceOptionFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceOptionFilter>>;
};

export enum ServiceOptionIcon {
  Custom1 = 'Custom1',
  Custom2 = 'Custom2',
  Custom3 = 'Custom3',
  Custom4 = 'Custom4',
  Custom5 = 'Custom5',
  Luggage = 'Luggage',
  PackageDelivery = 'PackageDelivery',
  Pet = 'Pet',
  Shopping = 'Shopping',
  TwoWay = 'TwoWay'
}

export type ServiceOptionInput = {
  additionalFee?: InputMaybe<Scalars['Float']['input']>;
  icon: ServiceOptionIcon;
  name: Scalars['String']['input'];
  type: ServiceOptionType;
};

export type ServiceOptionSort = {
  direction: SortDirection;
  field: ServiceOptionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ServiceOptionSortFields {
  Id = 'id'
}

export enum ServiceOptionType {
  Free = 'Free',
  Paid = 'Paid',
  TwoWay = 'TwoWay'
}

export enum ServicePaymentMethod {
  CashCredit = 'CashCredit',
  OnlyCash = 'OnlyCash',
  OnlyCredit = 'OnlyCredit'
}

export type ServiceSort = {
  direction: SortDirection;
  field: ServiceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ServiceSortFields {
  CategoryId = 'categoryId',
  Id = 'id'
}

export type ServiceWithCost = {
  __typename?: 'ServiceWithCost';
  cost: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  media: Media;
  name: Scalars['String']['output'];
};

export type SetEnabledServicesOnDriverInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetFleetsOnZonePriceInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetOptionsOnServiceInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetRegionsOnServiceInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetServicesOnZonePriceInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  complaintCreated: Complaint;
  orderUpdated: Order;
  sosCreated: DistressSignal;
};


export type SubscriptionOrderUpdatedArgs = {
  orderId: Scalars['ID']['input'];
};

export type TimeMultiplier = {
  __typename?: 'TimeMultiplier';
  endTime: Scalars['String']['output'];
  multiply: Scalars['Float']['output'];
  startTime: Scalars['String']['output'];
};

export type TimeMultiplierInput = {
  endTime: Scalars['String']['input'];
  multiply: Scalars['Float']['input'];
  startTime: Scalars['String']['input'];
};

export type TokenObject = {
  __typename?: 'TokenObject';
  token: Scalars['String']['output'];
};

export enum TransactionAction {
  Deduct = 'Deduct',
  Recharge = 'Recharge'
}

export enum TransactionStatus {
  Canceled = 'Canceled',
  Done = 'Done',
  Processing = 'Processing',
  Rejected = 'Rejected'
}

export type TransactionStatusFilterComparison = {
  eq?: InputMaybe<TransactionStatus>;
  gt?: InputMaybe<TransactionStatus>;
  gte?: InputMaybe<TransactionStatus>;
  iLike?: InputMaybe<TransactionStatus>;
  in?: InputMaybe<Array<TransactionStatus>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<TransactionStatus>;
  lt?: InputMaybe<TransactionStatus>;
  lte?: InputMaybe<TransactionStatus>;
  neq?: InputMaybe<TransactionStatus>;
  notILike?: InputMaybe<TransactionStatus>;
  notIn?: InputMaybe<Array<TransactionStatus>>;
  notLike?: InputMaybe<TransactionStatus>;
};

export type UpdateComplaint = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inscriptionTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  requestId?: InputMaybe<Scalars['ID']['input']>;
  requestedByDriver?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<ComplaintStatus>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConfigInput = {
  adminPanelAPIKey?: InputMaybe<Scalars['String']['input']>;
  backendMapsAPIKey?: InputMaybe<Scalars['String']['input']>;
  twilioAccountSid?: InputMaybe<Scalars['String']['input']>;
  twilioAuthToken?: InputMaybe<Scalars['String']['input']>;
  twilioFromNumber?: InputMaybe<Scalars['String']['input']>;
  twilioVerificationCodeSMSTemplate?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConfigResult = {
  __typename?: 'UpdateConfigResult';
  message?: Maybe<Scalars['String']['output']>;
  status: UpdateConfigStatus;
};

export enum UpdateConfigStatus {
  Invalid = 'INVALID',
  Ok = 'OK'
}

export type UpdateDriverInput = {
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  bankRoutingNumber?: InputMaybe<Scalars['String']['input']>;
  bankSwift?: InputMaybe<Scalars['String']['input']>;
  carColorId?: InputMaybe<Scalars['ID']['input']>;
  carId?: InputMaybe<Scalars['ID']['input']>;
  carPlate?: InputMaybe<Scalars['String']['input']>;
  carProductionYear?: InputMaybe<Scalars['Int']['input']>;
  certificateNumber?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  fleetId?: InputMaybe<Scalars['ID']['input']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mediaId?: InputMaybe<Scalars['ID']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  softRejectionNote?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DriverStatus>;
};

export type UpdateFeedback = {
  description?: InputMaybe<Scalars['String']['input']>;
  driverId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  requestId?: InputMaybe<Scalars['ID']['input']>;
  reviewTimestamp?: InputMaybe<Scalars['DateTime']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int']['output'];
};

export type UpdateManyRiderAddressesInput = {
  /** Filter used to find fields to update */
  filter: RiderAddressUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateRiderAddress;
};

export type UpdateManySmsProvidersInput = {
  /** Filter used to find fields to update */
  filter: SmsProviderUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: SmsProviderInput;
};

export type UpdateOneAnnouncementInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: AnnouncementInput;
};

export type UpdateOneCarColorInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: CarColorInput;
};

export type UpdateOneCarModelInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: CarModelInput;
};

export type UpdateOneComplaintInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateComplaint;
};

export type UpdateOneCouponInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: CouponInput;
};

export type UpdateOneDriverInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateDriverInput;
};

export type UpdateOneFeedbackInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateFeedback;
};

export type UpdateOneFeedbackParameterInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: FeedbackParameterInput;
};

export type UpdateOneFleetInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: FleetInput;
};

export type UpdateOneOperatorInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateOperator;
};

export type UpdateOneOperatorRoleInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: OperatorRoleInput;
};

export type UpdateOneOrderCancelReasonInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: OrderCancelReasonInput;
};

export type UpdateOnePaymentGatewayInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: PaymentGatewayInput;
};

export type UpdateOnePayoutMethodInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: CreatePayoutMethodInput;
};

export type UpdateOneRegionInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: RegionInput;
};

export type UpdateOneRewardInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateReward;
};

export type UpdateOneRiderAddressInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateRiderAddress;
};

export type UpdateOneRiderInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: RiderInput;
};

export type UpdateOneSmsProviderInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: SmsProviderInput;
};

export type UpdateOneServiceCategoryInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ServiceCategoryInput;
};

export type UpdateOneServiceInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ServiceInput;
};

export type UpdateOneServiceOptionInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ServiceOptionInput;
};

export type UpdateOneZonePriceInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: ZonePriceInput;
};

export type UpdateOperator = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['ID']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePasswordInput = {
  newPasswod: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdatePayoutSessionInput = {
  status: PayoutSessionStatus;
};

export type UpdatePurchaseCodeClient = {
  __typename?: 'UpdatePurchaseCodeClient';
  enabled: Scalars['Float']['output'];
  first_verified_at: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  ip: Scalars['String']['output'];
  last_verified_at: Scalars['String']['output'];
  port: Scalars['Float']['output'];
  purchase_id: Scalars['Float']['output'];
  token: Scalars['String']['output'];
};

export type UpdatePurchaseCodeResult = {
  __typename?: 'UpdatePurchaseCodeResult';
  clients?: Maybe<Array<UpdatePurchaseCodeClient>>;
  message?: Maybe<Scalars['String']['output']>;
  status: UpdatePurchaseCodeStatus;
};

export enum UpdatePurchaseCodeStatus {
  ClientFound = 'CLIENT_FOUND',
  Invalid = 'INVALID',
  Ok = 'OK',
  Overused = 'OVERUSED'
}

export type UpdateReward = {
  appType?: InputMaybe<RewardAppType>;
  beneficiary?: InputMaybe<RewardBeneficiary>;
  conditionTripCountsLessThan?: InputMaybe<Scalars['Float']['input']>;
  conditionUserNumberFirstDigits?: InputMaybe<Array<Scalars['String']['input']>>;
  creditCurrency?: InputMaybe<Scalars['String']['input']>;
  creditGift?: InputMaybe<Scalars['Float']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  event?: InputMaybe<RewardEvent>;
  id?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tripFeePercentGift?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateRiderAddress = {
  details?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<PointInput>;
  riderId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<RiderAddressType>;
};

export enum Weekday {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

export type WeekdayMultiplier = {
  __typename?: 'WeekdayMultiplier';
  multiply: Scalars['Float']['output'];
  weekday: Weekday;
};

export type WeekdayMultiplierInput = {
  multiply: Scalars['Float']['input'];
  weekday: Weekday;
};

export type ZonePrice = {
  __typename?: 'ZonePrice';
  cost: Scalars['Float']['output'];
  fleets: Array<Fleet>;
  from: Array<Array<Point>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  services: Array<Service>;
  timeMultipliers: Array<TimeMultiplier>;
  to: Array<Array<Point>>;
};


export type ZonePriceFleetsArgs = {
  filter?: FleetFilter;
  sorting?: Array<FleetSort>;
};


export type ZonePriceServicesArgs = {
  filter?: ServiceFilter;
  sorting?: Array<ServiceSort>;
};

export type ZonePriceConnection = {
  __typename?: 'ZonePriceConnection';
  /** Array of nodes. */
  nodes: Array<ZonePrice>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ZonePriceDeleteResponse = {
  __typename?: 'ZonePriceDeleteResponse';
  cost?: Maybe<Scalars['Float']['output']>;
  from?: Maybe<Array<Array<Point>>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  timeMultipliers?: Maybe<Array<TimeMultiplier>>;
  to?: Maybe<Array<Array<Point>>>;
};

export type ZonePriceFilter = {
  and?: InputMaybe<Array<ZonePriceFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ZonePriceFilter>>;
};

export type ZonePriceInput = {
  cost: Scalars['Float']['input'];
  from: Array<Array<PointInput>>;
  name: Scalars['String']['input'];
  timeMultipliers: Array<TimeMultiplierInput>;
  to: Array<Array<PointInput>>;
};

export type ZonePriceSort = {
  direction: SortDirection;
  field: ZonePriceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ZonePriceSortFields {
  Id = 'id'
}

export type NotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type NotificationsQuery = { __typename?: 'Query', complaintAggregate: Array<{ __typename?: 'ComplaintAggregateResponse', count?: { __typename?: 'ComplaintCountAggregate', id?: number | null } | null }>, distressSignalAggregate: Array<{ __typename?: 'DistressSignalAggregateResponse', count?: { __typename?: 'DistressSignalCountAggregate', id?: number | null } | null }>, driverAggregate: Array<{ __typename?: 'DriverAggregateResponse', count?: { __typename?: 'DriverCountAggregate', id?: number | null } | null }> };

export type SosSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SosSubscriptionSubscription = { __typename?: 'Subscription', sosCreated: { __typename?: 'DistressSignal', id: string, status: SosStatus } };

export type ComplaintSubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ComplaintSubscriptionSubscription = { __typename?: 'Subscription', complaintCreated: { __typename?: 'Complaint', id: string, status: ComplaintStatus } };

export type ViewComplaintQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewComplaintQuery = { __typename?: 'Query', complaint: { __typename?: 'Complaint', id: string, inscriptionTimestamp: any, status: ComplaintStatus, subject: string, content?: string | null, requestedByDriver: boolean, activities: Array<{ __typename?: 'ComplaintActivity', type: ComplaintActivityType, comment?: string | null, actor: { __typename?: 'Operator', firstName?: string | null, lastName?: string | null }, assignedTo?: { __typename?: 'Operator', firstName?: string | null, lastName?: string | null } | null }>, order: { __typename?: 'Order', id: string, status: OrderStatus, createdOn: any, startTimestamp?: any | null, finishTimestamp?: any | null, expectedTimestamp?: any | null, costBest: number, costAfterCoupon: number, addresses: Array<string>, currency: string, rider?: { __typename?: 'Rider', id: string, mobileNumber: string, status: RiderStatus, firstName?: string | null, lastName?: string | null, registrationTimestamp: any } | null, driver?: { __typename?: 'Driver', id: string, mobileNumber: string, status: DriverStatus, firstName?: string | null, lastName?: string | null, registrationTimestamp: any } | null } } };

export type UpdateComplaintStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status: ComplaintStatus;
}>;


export type UpdateComplaintStatusMutation = { __typename?: 'Mutation', updateOneComplaint: { __typename?: 'Complaint', id: string } };

export type ComplaintsListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type ComplaintsListQuery = { __typename?: 'Query', complaints: { __typename?: 'ComplaintConnection', totalCount: number, nodes: Array<{ __typename?: 'Complaint', id: string, inscriptionTimestamp: any, subject: string, status: ComplaintStatus, content?: string | null }> } };

export type CreateDriverMutationVariables = Exact<{
  input: UpdateDriverInput;
}>;


export type CreateDriverMutation = { __typename?: 'Mutation', createOneDriver: { __typename?: 'Driver', id: string } };

export type ViewDriverQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewDriverQuery = { __typename?: 'Query', driver: { __typename?: 'Driver', id: string, firstName?: string | null, lastName?: string | null, mobileNumber: string, registrationTimestamp: any, lastSeenTimestamp?: any | null, status: DriverStatus, gender?: Gender | null, carId?: string | null, carColorId?: string | null, fleetId?: string | null, carProductionYear?: number | null, carPlate?: string | null, accountNumber?: string | null, bankName?: string | null, bankRoutingNumber?: string | null, bankSwift?: string | null, address?: string | null, email?: string | null, mediaId?: string | null, rating?: number | null, reviewCount: number, feedbacks: { __typename?: 'DriverFeedbacksConnection', nodes: Array<{ __typename?: 'Feedback', parametersAggregate: Array<{ __typename?: 'FeedbackParametersAggregateResponse', groupBy?: { __typename?: 'FeedbackParametersAggregateGroupBy', title?: string | null, isGood?: boolean | null } | null, count?: { __typename?: 'FeedbackParametersCountAggregate', id?: number | null } | null }> }> }, enabledServices: Array<{ __typename?: 'Service', id: string }>, documents: Array<{ __typename?: 'Media', id: string, address: string }>, media?: { __typename?: 'Media', address: string } | null }, services: Array<{ __typename?: 'Service', id: string, name: string }>, fleets: { __typename?: 'FleetConnection', nodes: Array<{ __typename?: 'Fleet', id: string, name: string }> }, driverFeedbackParametersSummary: Array<{ __typename?: 'FeedbackParameterAggregate', title: string, isGood: boolean, count: string }>, carModels: { __typename?: 'CarModelConnection', nodes: Array<{ __typename?: 'CarModel', id: string, name: string }> }, carColors: Array<{ __typename?: 'CarColor', id: string, name: string }> };

export type UpdateDriverProfileMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: UpdateDriverInput;
  serviceIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type UpdateDriverProfileMutation = { __typename?: 'Mutation', updateOneDriver: { __typename?: 'Driver', id: string }, setEnabledServicesOnDriver: { __typename?: 'Driver', id: string } };

export type UpdateDriverStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  status?: InputMaybe<DriverStatus>;
}>;


export type UpdateDriverStatusMutation = { __typename?: 'Mutation', updateOneDriver: { __typename?: 'Driver', id: string } };

export type DriverFinancialsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<DriverTransactionFilter>;
  sorting?: InputMaybe<Array<DriverTransactionSort> | DriverTransactionSort>;
}>;


export type DriverFinancialsQuery = { __typename?: 'Query', driver: { __typename?: 'Driver', transactions: { __typename?: 'DriverTransactionsConnection', totalCount: number, nodes: Array<{ __typename?: 'DriverTransaction', status: TransactionStatus, createdAt: any, amount: number, description?: string | null, currency: string, action: TransactionAction, deductType?: DriverDeductTransactionType | null, rechargeType?: DriverRechargeTransactionType | null, refrenceNumber?: string | null, requestId?: number | null, paymentGatewayId?: string | null, operatorId?: string | null }> }, wallets: Array<{ __typename?: 'DriverWallet', balance: number, currency: string }> }, regions: { __typename?: 'RegionConnection', nodes: Array<{ __typename?: 'Region', currency: string }> } };

export type DriverFeedbacksQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  paging?: InputMaybe<OffsetPaging>;
}>;


export type DriverFeedbacksQuery = { __typename?: 'Query', feedbacks: { __typename?: 'FeedbackConnection', nodes: Array<{ __typename?: 'Feedback', id: string, requestId: string, reviewTimestamp: any, score: number, description?: string | null, parameters: Array<{ __typename?: 'FeedbackParameter', isGood: boolean, title: string }> }> } };

export type DriverOrdersQueryVariables = Exact<{
  driverId: Scalars['ID']['input'];
  filter?: InputMaybe<OrderFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<OrderSort> | OrderSort>;
}>;


export type DriverOrdersQuery = { __typename?: 'Query', driver: { __typename?: 'Driver', orders: { __typename?: 'DriverOrdersConnection', totalCount: number, nodes: Array<{ __typename?: 'Order', id: string, createdOn: any, status: OrderStatus, distanceBest: number, durationBest: number, costBest: number, costAfterCoupon: number, currency: string, addresses: Array<string>, expectedTimestamp?: any | null, points: Array<{ __typename?: 'Point', lat: number, lng: number }> }> } } };

export type CreateDriverTransactionMutationVariables = Exact<{
  input: DriverTransactionInput;
}>;


export type CreateDriverTransactionMutation = { __typename?: 'Mutation', createDriverTransaction: { __typename?: 'DriverWallet', id: string } };

export type DeleteDriverMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteDriverMutation = { __typename?: 'Mutation', deleteOneDriver: { __typename?: 'Driver', id: string } };

export type DriversListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<DriverFilter>;
  sorting?: InputMaybe<Array<DriverSort> | DriverSort>;
}>;


export type DriversListQuery = { __typename?: 'Query', drivers: { __typename?: 'DriverConnection', totalCount: number, nodes: Array<{ __typename?: 'Driver', id: string, firstName?: string | null, lastName?: string | null, gender?: Gender | null, mobileNumber: string, status: DriverStatus, registrationTimestamp: any }> } };

export type ProviderWalletsListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type ProviderWalletsListQuery = { __typename?: 'Query', providerTransactions: { __typename?: 'ProviderTransactionConnection', totalCount: number, nodes: Array<{ __typename?: 'ProviderTransaction', createdAt: any, action: TransactionAction, deductType?: ProviderDeductTransactionType | null, rechargeType?: ProviderRechargeTransactionType | null, amount: number, currency: string, description?: string | null, requestId?: string | null, operatorId?: string | null }> }, providerWallets: Array<{ __typename?: 'ProviderWallet', balance: number, currency: string }>, regions: { __typename?: 'RegionConnection', nodes: Array<{ __typename?: 'Region', currency: string }> } };

export type ExportQueryVariables = Exact<{
  input: ExportArgs;
}>;


export type ExportQuery = { __typename?: 'Query', export: { __typename?: 'ExportResult', url: string } };

export type DriverWalletsListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type DriverWalletsListQuery = { __typename?: 'Query', driverWallets: { __typename?: 'DriverWalletConnection', totalCount: number, nodes: Array<{ __typename?: 'DriverWallet', id: string, driverId?: string | null, balance: number, currency: string, driver?: { __typename?: 'Driver', firstName?: string | null, lastName?: string | null } | null }> }, regions: { __typename?: 'RegionConnection', nodes: Array<{ __typename?: 'Region', currency: string }> } };

export type FleetWalletsListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<FleetWalletFilter>;
}>;


export type FleetWalletsListQuery = { __typename?: 'Query', fleetWallets: { __typename?: 'FleetWalletConnection', totalCount: number, nodes: Array<{ __typename?: 'FleetWallet', id: string, balance: number, currency: string, fleetId: string, fleet: { __typename?: 'Fleet', name: string } }> }, regions: { __typename?: 'RegionConnection', nodes: Array<{ __typename?: 'Region', currency: string }> } };

export type RiderWalletsListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type RiderWalletsListQuery = { __typename?: 'Query', riderWallets: { __typename?: 'RiderWalletConnection', totalCount: number, nodes: Array<{ __typename?: 'RiderWallet', balance: number, currency: string, riderId?: string | null, rider?: { __typename?: 'Rider', firstName?: string | null, lastName?: string | null } | null }> }, regions: { __typename?: 'RegionConnection', nodes: Array<{ __typename?: 'Region', currency: string }> } };

export type DispatcherCalculateFareQueryVariables = Exact<{
  points: Array<PointInput> | PointInput;
  riderId: Scalars['ID']['input'];
}>;


export type DispatcherCalculateFareQuery = { __typename?: 'Query', calculateFare: { __typename?: 'CalculateFareDTO', currency: string, distance: number, duration: number, services: Array<{ __typename?: 'ServiceCategoryWithCost', name: string, services: Array<{ __typename?: 'ServiceWithCost', id: string, name: string, cost: number }> }> } };

export type CreateOrderMutationVariables = Exact<{
  riderId: Scalars['ID']['input'];
  points: Array<PointInput> | PointInput;
  addresses: Array<Scalars['String']['input']> | Scalars['String']['input'];
  serviceId: Scalars['ID']['input'];
  intervalMinutes: Scalars['Int']['input'];
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id: string } };

export type OrderUpdatedSubscriptionVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OrderUpdatedSubscription = { __typename?: 'Subscription', orderUpdated: { __typename?: 'Order', id: string, status: OrderStatus, driver?: { __typename?: 'Driver', firstName?: string | null, lastName?: string | null, mobileNumber: string } | null } };

export type CancelOrderMutationVariables = Exact<{
  orderId: Scalars['ID']['input'];
}>;


export type CancelOrderMutation = { __typename?: 'Mutation', cancelOrder: { __typename?: 'Order', id: string, status: OrderStatus } };

export type DriverOverviewInfoFragment = { __typename?: 'Driver', id: string, firstName?: string | null, lastName?: string | null, mobileNumber: string, status: DriverStatus };

export type DriverLocationFragment = { __typename?: 'OnlineDriver', driverId: number, lastUpdatedAt: number, location: { __typename?: 'Point', lat: number, lng: number } };

export type OverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type OverviewQuery = { __typename?: 'Query', complaintAggregate: Array<{ __typename?: 'ComplaintAggregateResponse', count?: { __typename?: 'ComplaintCountAggregate', id?: number | null } | null }>, driverAggregate: Array<{ __typename?: 'DriverAggregateResponse', count?: { __typename?: 'DriverCountAggregate', id?: number | null } | null }>, activeOrders: Array<{ __typename?: 'OrderAggregateResponse', count?: { __typename?: 'OrderCountAggregate', id?: number | null } | null }>, bookedOrders: Array<{ __typename?: 'OrderAggregateResponse', count?: { __typename?: 'OrderCountAggregate', id?: number | null } | null }>, getDriversLocation: Array<{ __typename?: 'OnlineDriver', driverId: number, lastUpdatedAt: number, location: { __typename?: 'Point', lat: number, lng: number } }> };

export type OverviewDriverPagingQueryVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type OverviewDriverPagingQuery = { __typename?: 'Query', drivers: { __typename?: 'DriverConnection', totalCount: number, nodes: Array<{ __typename?: 'Driver', id: string, firstName?: string | null, lastName?: string | null, mobileNumber: string, status: DriverStatus }> } };

export type RequestsChartQueryVariables = Exact<{
  timeframe: ChartTimeframe;
}>;


export type RequestsChartQuery = { __typename?: 'Query', requestChart: Array<{ __typename?: 'RequestResultItem', time: string, count: number, status: OrderStatus }> };

export type IncomeChartQueryVariables = Exact<{
  timeframe: ChartTimeframe;
}>;


export type IncomeChartQuery = { __typename?: 'Query', incomeChart: Array<{ __typename?: 'IncomeResultItem', time: string, sum: number, currency: string }> };

export type DriverRegistrationsQueryVariables = Exact<{
  timeframe: ChartTimeframe;
}>;


export type DriverRegistrationsQuery = { __typename?: 'Query', driverRegistrations: Array<{ __typename?: 'RegistrationResultItem', time: string, count: number }> };

export type RiderRegistrationsQueryVariables = Exact<{
  timeframe: ChartTimeframe;
}>;


export type RiderRegistrationsQuery = { __typename?: 'Query', riderRegistrations: Array<{ __typename?: 'RegistrationResultItem', time: string, count: number }> };

export type CarsListQueryVariables = Exact<{ [key: string]: never; }>;


export type CarsListQuery = { __typename?: 'Query', carModels: { __typename?: 'CarModelConnection', nodes: Array<{ __typename?: 'CarModel', id: string, name: string }> }, carColors: Array<{ __typename?: 'CarColor', id: string, name: string }> };

export type DeleteCarModelMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCarModelMutation = { __typename?: 'Mutation', deleteOneCarModel: { __typename?: 'CarModelDeleteResponse', id?: string | null } };

export type DeleteCarColorMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCarColorMutation = { __typename?: 'Mutation', deleteOneCarColor: { __typename?: 'CarColorDeleteResponse', id?: string | null } };

export type CreateCarModelMutationVariables = Exact<{
  input: CarModelInput;
}>;


export type CreateCarModelMutation = { __typename?: 'Mutation', createOneCarModel: { __typename?: 'CarModel', id: string } };

export type CreateCarColorMutationVariables = Exact<{
  input: CarColorInput;
}>;


export type CreateCarColorMutation = { __typename?: 'Mutation', createOneCarColor: { __typename?: 'CarColor', id: string } };

export type UpdateCarModelMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: CarModelInput;
}>;


export type UpdateCarModelMutation = { __typename?: 'Mutation', updateOneCarModel: { __typename?: 'CarModel', id: string } };

export type UpdateCarColorMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: CarColorInput;
}>;


export type UpdateCarColorMutation = { __typename?: 'Mutation', updateOneCarColor: { __typename?: 'CarColor', id: string } };

export type CreateFleetMutationVariables = Exact<{
  input: FleetInput;
}>;


export type CreateFleetMutation = { __typename?: 'Mutation', createOneFleet: { __typename?: 'Fleet', id: string } };

export type ViewFleetQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewFleetQuery = { __typename?: 'Query', fleet: { __typename?: 'Fleet', id: string, name: string, phoneNumber: string, address?: string | null, mobileNumber: string, accountNumber: string, userName?: string | null, password?: string | null, commissionSharePercent: number, commissionShareFlat: number, feeMultiplier?: number | null, exclusivityAreas?: Array<Array<{ __typename?: 'Point', lat: number, lng: number }>> | null } };

export type FleetFinancialsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<FleetTransactionFilter>;
  sorting?: InputMaybe<Array<FleetTransactionSort> | FleetTransactionSort>;
}>;


export type FleetFinancialsQuery = { __typename?: 'Query', fleet: { __typename?: 'Fleet', transactions: { __typename?: 'FleetTransactionsConnection', totalCount: number, nodes: Array<{ __typename?: 'FleetTransaction', transactionTimestamp: any, amount: number, currency: string, action: TransactionAction, deductType?: string | null, rechargeType?: string | null, refrenceNumber?: string | null, operatorId?: string | null, requestId?: string | null, description?: string | null }> }, wallets: Array<{ __typename?: 'FleetWallet', currency: string, balance: number }> }, regions: { __typename?: 'RegionConnection', nodes: Array<{ __typename?: 'Region', currency: string }> } };

export type FleetZonePricesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<ZonePriceFilter>;
  sorting?: InputMaybe<Array<ZonePriceSort> | ZonePriceSort>;
}>;


export type FleetZonePricesQuery = { __typename?: 'Query', fleet: { __typename?: 'Fleet', zonePrices: { __typename?: 'FleetZonePricesConnection', totalCount: number, nodes: Array<{ __typename?: 'ZonePrice', id: string, name: string }> } } };

export type FleetDriversQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  paging?: InputMaybe<OffsetPaging>;
}>;


export type FleetDriversQuery = { __typename?: 'Query', drivers: { __typename?: 'DriverConnection', nodes: Array<{ __typename?: 'Driver', id: string, firstName?: string | null, lastName?: string | null, mobileNumber: string }> } };

export type UpdateFleetMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: FleetInput;
}>;


export type UpdateFleetMutation = { __typename?: 'Mutation', updateOneFleet: { __typename?: 'Fleet', id: string } };

export type CreateFleetTransactionMutationVariables = Exact<{
  input: FleetTransactionInput;
}>;


export type CreateFleetTransactionMutation = { __typename?: 'Mutation', createFleetTransaction: { __typename?: 'FleetWallet', id: string } };

export type FleetsListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<FleetFilter>;
}>;


export type FleetsListQuery = { __typename?: 'Query', fleets: { __typename?: 'FleetConnection', totalCount: number, nodes: Array<{ __typename?: 'Fleet', id: string, name: string, phoneNumber: string, address?: string | null }> } };

export type OrderCancelReasonListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type OrderCancelReasonListQuery = { __typename?: 'Query', orderCancelReasons: { __typename?: 'OrderCancelReasonConnection', totalCount: number, nodes: Array<{ __typename?: 'OrderCancelReason', id: string, title: string, isEnabled: boolean, userType: AnnouncementUserType }> } };

export type OrderCancelReasonViewQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OrderCancelReasonViewQuery = { __typename?: 'Query', orderCancelReason: { __typename?: 'OrderCancelReason', id: string, title: string, userType: AnnouncementUserType, isEnabled: boolean } };

export type UpdateOrderCancelReasonMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: OrderCancelReasonInput;
}>;


export type UpdateOrderCancelReasonMutation = { __typename?: 'Mutation', updateOneOrderCancelReason: { __typename?: 'OrderCancelReason', id: string } };

export type CreateOrderCancelReasonMutationVariables = Exact<{
  input: OrderCancelReasonInput;
}>;


export type CreateOrderCancelReasonMutation = { __typename?: 'Mutation', createOneOrderCancelReason: { __typename?: 'OrderCancelReason', id: string } };

export type ViewPaymentGatewayQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewPaymentGatewayQuery = { __typename?: 'Query', paymentGateway: { __typename?: 'PaymentGateway', id: string, title: string, type: PaymentGatewayType, enabled: boolean, privateKey: string, publicKey?: string | null, merchantId?: string | null, saltKey?: string | null, mediaId?: number | null, media?: { __typename?: 'Media', address: string } | null } };

export type CreatePaymentGatewayMutationVariables = Exact<{
  input: PaymentGatewayInput;
}>;


export type CreatePaymentGatewayMutation = { __typename?: 'Mutation', createOnePaymentGateway: { __typename?: 'PaymentGateway', id: string } };

export type UpdatePaymentGatewayMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: PaymentGatewayInput;
}>;


export type UpdatePaymentGatewayMutation = { __typename?: 'Mutation', updateOnePaymentGateway: { __typename?: 'PaymentGateway', id: string } };

export type PaymentGatewaysQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type PaymentGatewaysQuery = { __typename?: 'Query', paymentGateways: { __typename?: 'PaymentGatewayConnection', totalCount: number, nodes: Array<{ __typename?: 'PaymentGateway', id: string, enabled: boolean, title: string, type: PaymentGatewayType, media?: { __typename?: 'Media', address: string } | null }> } };

export type RegionListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type RegionListQuery = { __typename?: 'Query', regions: { __typename?: 'RegionConnection', totalCount: number, nodes: Array<{ __typename?: 'Region', id: string, name: string, currency: string, enabled: boolean, location: Array<Array<{ __typename?: 'Point', lat: number, lng: number }>> }> } };

export type RegionViewQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RegionViewQuery = { __typename?: 'Query', region: { __typename?: 'Region', id: string, name: string, currency: string, enabled: boolean, location: Array<Array<{ __typename?: 'Point', lat: number, lng: number }>> } };

export type UpdateRegionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: RegionInput;
}>;


export type UpdateRegionMutation = { __typename?: 'Mutation', updateOneRegion: { __typename?: 'Region', id: string } };

export type CreateRegionMutationVariables = Exact<{
  input: RegionInput;
}>;


export type CreateRegionMutation = { __typename?: 'Mutation', createOneRegion: { __typename?: 'Region', id: string } };

export type ReviewParameterViewQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ReviewParameterViewQuery = { __typename?: 'Query', feedbackParameter: { __typename?: 'FeedbackParameter', id: string, title: string, isGood: boolean } };

export type UpdateReviewParameterMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: FeedbackParameterInput;
}>;


export type UpdateReviewParameterMutation = { __typename?: 'Mutation', updateOneFeedbackParameter: { __typename?: 'FeedbackParameter', id: string } };

export type CreateReviewParameterMutationVariables = Exact<{
  input: FeedbackParameterInput;
}>;


export type CreateReviewParameterMutation = { __typename?: 'Mutation', createOneFeedbackParameter: { __typename?: 'FeedbackParameter', id: string } };

export type ReviewParametersListQueryVariables = Exact<{ [key: string]: never; }>;


export type ReviewParametersListQuery = { __typename?: 'Query', feedbackParameters: Array<{ __typename?: 'FeedbackParameter', id: string, title: string, isGood: boolean }> };

export type RolesQueryVariables = Exact<{ [key: string]: never; }>;


export type RolesQuery = { __typename?: 'Query', operatorRoles: Array<{ __typename?: 'OperatorRole', id: string, title: string }> };

export type RoleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RoleQuery = { __typename?: 'Query', operatorRole: { __typename?: 'OperatorRole', id: string, title: string, permissions: Array<OperatorPermission> } };

export type CreateRoleMutationVariables = Exact<{
  input: OperatorRoleInput;
}>;


export type CreateRoleMutation = { __typename?: 'Mutation', createOneOperatorRole: { __typename?: 'OperatorRole', id: string, title: string, permissions: Array<OperatorPermission> } };

export type UpdateRoleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: OperatorRoleInput;
}>;


export type UpdateRoleMutation = { __typename?: 'Mutation', updateOneOperatorRole: { __typename?: 'OperatorRole', id: string } };

export type ServiceOptionViewQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ServiceOptionViewQuery = { __typename?: 'Query', serviceOption: { __typename?: 'ServiceOption', id: string, name: string, type: ServiceOptionType, icon: ServiceOptionIcon, additionalFee?: number | null } };

export type UpdateServiceOptionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: ServiceOptionInput;
}>;


export type UpdateServiceOptionMutation = { __typename?: 'Mutation', updateOneServiceOption: { __typename?: 'ServiceOption', id: string } };

export type CreateServiceOptionMutationVariables = Exact<{
  input: ServiceOptionInput;
}>;


export type CreateServiceOptionMutation = { __typename?: 'Mutation', createOneServiceOption: { __typename?: 'ServiceOption', id: string } };

export type ServiceOptionsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ServiceOptionsListQuery = { __typename?: 'Query', serviceOptions: Array<{ __typename?: 'ServiceOption', id: string, name: string, icon: ServiceOptionIcon, type: ServiceOptionType, additionalFee?: number | null }> };

export type ViewServiceCategoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewServiceCategoryQuery = { __typename?: 'Query', serviceCategory: { __typename?: 'ServiceCategory', id: string, name: string } };

export type CreateServiceCategoryMutationVariables = Exact<{
  input: ServiceCategoryInput;
}>;


export type CreateServiceCategoryMutation = { __typename?: 'Mutation', createOneServiceCategory: { __typename?: 'ServiceCategory', id: string } };

export type UpdateServiceCategoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: ServiceCategoryInput;
}>;


export type UpdateServiceCategoryMutation = { __typename?: 'Mutation', updateOneServiceCategory: { __typename?: 'ServiceCategory', id: string } };

export type DeleteServiceCategoryMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteServiceCategoryMutation = { __typename?: 'Mutation', deleteOneServiceCategory: { __typename?: 'ServiceCategoryDeleteResponse', id?: string | null } };

export type ServicesListQueryVariables = Exact<{ [key: string]: never; }>;


export type ServicesListQuery = { __typename?: 'Query', serviceCategories: Array<{ __typename?: 'ServiceCategory', id: string, name: string, services: Array<{ __typename?: 'Service', id: string, name: string, description?: string | null, media: { __typename?: 'Media', address: string } }> }> };

export type ViewServiceQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewServiceQuery = { __typename?: 'Query', service: { __typename?: 'Service', id: string, name: string, categoryId: string, baseFare: number, perHundredMeters: number, perMinuteDrive: number, perMinuteWait: number, minimumFee: number, searchRadius: number, maximumDestinationDistance: number, paymentMethod: ServicePaymentMethod, cancellationTotalFee: number, cancellationDriverShare: number, providerShareFlat: number, providerSharePercent: number, prepayPercent: number, mediaId: string, description?: string | null, personCapacity?: number | null, roundingFactor?: number | null, media: { __typename?: 'Media', address: string }, timeMultipliers: Array<{ __typename?: 'TimeMultiplier', startTime: string, endTime: string, multiply: number }>, distanceMultipliers: Array<{ __typename?: 'DistanceMultiplier', distanceFrom: number, distanceTo: number, multiply: number }>, weekdayMultipliers: Array<{ __typename?: 'WeekdayMultiplier', weekday: Weekday, multiply: number }>, dateRangeMultipliers: Array<{ __typename?: 'DateRangeMultiplier', startDate: number, endDate: number, multiply: number }>, options: Array<{ __typename?: 'ServiceOption', id: string, name: string, type: ServiceOptionType, additionalFee?: number | null, icon: ServiceOptionIcon }>, regions: Array<{ __typename?: 'Region', id: string, name: string, currency: string }> }, regions: { __typename?: 'RegionConnection', nodes: Array<{ __typename?: 'Region', id: string, name: string, currency: string }> }, serviceCategories: Array<{ __typename?: 'ServiceCategory', id: string, name: string }>, serviceOptions: Array<{ __typename?: 'ServiceOption', id: string, name: string, icon: ServiceOptionIcon, type: ServiceOptionType, additionalFee?: number | null }> };

export type NewServiceQueryVariables = Exact<{ [key: string]: never; }>;


export type NewServiceQuery = { __typename?: 'Query', regions: { __typename?: 'RegionConnection', nodes: Array<{ __typename?: 'Region', id: string, name: string, currency: string }> }, serviceCategories: Array<{ __typename?: 'ServiceCategory', id: string, name: string }>, serviceOptions: Array<{ __typename?: 'ServiceOption', id: string, name: string, icon: ServiceOptionIcon, type: ServiceOptionType, additionalFee?: number | null }> };

export type CreateServiceMutationVariables = Exact<{
  input: ServiceInput;
}>;


export type CreateServiceMutation = { __typename?: 'Mutation', createOneService: { __typename?: 'Service', id: string } };

export type DeleteServiceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteServiceMutation = { __typename?: 'Mutation', deleteOneService: { __typename?: 'ServiceDeleteResponse', id?: string | null } };

export type UpdateServiceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: ServiceInput;
}>;


export type UpdateServiceMutation = { __typename?: 'Mutation', updateOneService: { __typename?: 'Service', id: string } };

export type SetRegionsOnServiceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  relationIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type SetRegionsOnServiceMutation = { __typename?: 'Mutation', setRegionsOnService: { __typename?: 'Service', id: string } };

export type SetOptionsOnServiceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  relationIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type SetOptionsOnServiceMutation = { __typename?: 'Mutation', setOptionsOnService: { __typename?: 'Service', id: string } };

export type UpdatePasswordMutationVariables = Exact<{
  input: UpdatePasswordInput;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'Operator', id: string } };

export type GetConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConfigurationQuery = { __typename?: 'Query', currentConfiguration: { __typename?: 'CurrentConfiguration', backendMapsAPIKey?: string | null, twilioAccountSid?: string | null, twilioAuthToken?: string | null, twilioFromNumber?: string | null, twilioVerificationCodeSMSTemplate?: string | null } };

export type UpdateConfigMutationVariables = Exact<{
  input: UpdateConfigInput;
}>;


export type UpdateConfigMutation = { __typename?: 'Mutation', saveConfiguration: { __typename?: 'CurrentConfiguration', backendMapsAPIKey?: string | null, twilioAccountSid?: string | null, twilioAuthToken?: string | null, twilioFromNumber?: string | null, twilioVerificationCodeSMSTemplate?: string | null } };

export type SmsProvidersQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type SmsProvidersQuery = { __typename?: 'Query', smsProviders: { __typename?: 'SMSProviderConnection', totalCount: number, nodes: Array<{ __typename?: 'SMSProvider', id: string, isDefault: boolean, name: string, type: SmsProviderType }> } };

export type ViewSmsProviderQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewSmsProviderQuery = { __typename?: 'Query', smsProvider: { __typename?: 'SMSProvider', id: string, name: string, type: SmsProviderType, isDefault: boolean, authToken?: string | null, accountId?: string | null, fromNumber?: string | null, verificationTemplate?: string | null, smsType?: string | null } };

export type CreateSmsProviderMutationVariables = Exact<{
  input: SmsProviderInput;
}>;


export type CreateSmsProviderMutation = { __typename?: 'Mutation', createOneSMSProvider: { __typename?: 'SMSProvider', id: string } };

export type UpdateSmsProviderMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: SmsProviderInput;
}>;


export type UpdateSmsProviderMutation = { __typename?: 'Mutation', updateOneSMSProvider: { __typename?: 'SMSProvider', id: string } };

export type MarkSmsProviderAsDefaultMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type MarkSmsProviderAsDefaultMutation = { __typename?: 'Mutation', markSMSProviderAsDefault: { __typename?: 'SMSProvider', id: string } };

export type CreateOperatorMutationVariables = Exact<{
  input: CreateOperatorInput;
}>;


export type CreateOperatorMutation = { __typename?: 'Mutation', createOneOperator: { __typename?: 'Operator', id: string } };

export type ViewOperatorQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewOperatorQuery = { __typename?: 'Query', operator: { __typename?: 'Operator', id: string, firstName?: string | null, lastName?: string | null, mobileNumber?: string | null, userName: string, email?: string | null, roleId?: string | null }, operatorRoles: Array<{ __typename?: 'OperatorRole', id: string, title: string }> };

export type NewOperatorQueryVariables = Exact<{ [key: string]: never; }>;


export type NewOperatorQuery = { __typename?: 'Query', operatorRoles: Array<{ __typename?: 'OperatorRole', id: string, title: string }> };

export type UpdateOperatorMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: UpdateOperator;
}>;


export type UpdateOperatorMutation = { __typename?: 'Mutation', updateOneOperator: { __typename?: 'Operator', id: string } };

export type UsersListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type UsersListQuery = { __typename?: 'Query', operators: { __typename?: 'OperatorConnection', totalCount: number, nodes: Array<{ __typename?: 'Operator', id: string, userName: string, firstName?: string | null, lastName?: string | null, role?: { __typename?: 'OperatorRole', title: string } | null }> } };

export type ZonePriceViewQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ZonePriceViewQuery = { __typename?: 'Query', zonePrice: { __typename?: 'ZonePrice', id: string, name: string, cost: number, from: Array<Array<{ __typename?: 'Point', lat: number, lng: number }>>, to: Array<Array<{ __typename?: 'Point', lat: number, lng: number }>>, services: Array<{ __typename?: 'Service', id: string }>, fleets: Array<{ __typename?: 'Fleet', id: string }>, timeMultipliers: Array<{ __typename?: 'TimeMultiplier', startTime: string, endTime: string, multiply: number }> }, fleets: { __typename?: 'FleetConnection', nodes: Array<{ __typename?: 'Fleet', id: string, name: string }> }, services: Array<{ __typename?: 'Service', id: string, name: string }> };

export type ZonePriceNewQueryVariables = Exact<{ [key: string]: never; }>;


export type ZonePriceNewQuery = { __typename?: 'Query', fleets: { __typename?: 'FleetConnection', nodes: Array<{ __typename?: 'Fleet', id: string, name: string }> }, services: Array<{ __typename?: 'Service', id: string, name: string }> };

export type UpdateZonePriceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: ZonePriceInput;
}>;


export type UpdateZonePriceMutation = { __typename?: 'Mutation', updateOneZonePrice: { __typename?: 'ZonePrice', id: string } };

export type CreateZonePriceMutationVariables = Exact<{
  input: ZonePriceInput;
}>;


export type CreateZonePriceMutation = { __typename?: 'Mutation', createOneZonePrice: { __typename?: 'ZonePrice', id: string } };

export type DeleteZonePriceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteZonePriceMutation = { __typename?: 'Mutation', deleteOneZonePrice: { __typename?: 'ZonePriceDeleteResponse', id?: string | null } };

export type SetZonePriceRelationsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  services: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  fleets: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type SetZonePriceRelationsMutation = { __typename?: 'Mutation', setServicesOnZonePrice: { __typename?: 'ZonePrice', id: string }, setFleetsOnZonePrice: { __typename?: 'ZonePrice', id: string } };

export type ZonePricesListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type ZonePricesListQuery = { __typename?: 'Query', zonePrices: { __typename?: 'ZonePriceConnection', totalCount: number, nodes: Array<{ __typename?: 'ZonePrice', id: string, name: string }> } };

export type ViewAnnouncementQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewAnnouncementQuery = { __typename?: 'Query', announcement: { __typename?: 'Announcement', id: string, title: string, userType: Array<AnnouncementUserType>, description: string, url?: string | null, startAt: any, expireAt: any } };

export type CreateAnnouncementMutationVariables = Exact<{
  input: AnnouncementInput;
}>;


export type CreateAnnouncementMutation = { __typename?: 'Mutation', createOneAnnouncement: { __typename?: 'Announcement', id: string } };

export type UpdateAnnouncementMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: AnnouncementInput;
}>;


export type UpdateAnnouncementMutation = { __typename?: 'Mutation', updateOneAnnouncement: { __typename?: 'Announcement', id: string } };

export type DeleteAnnouncementMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteAnnouncementMutation = { __typename?: 'Mutation', deleteOneAnnouncement: { __typename?: 'AnnouncementDeleteResponse', id?: string | null } };

export type AnnouncementsListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type AnnouncementsListQuery = { __typename?: 'Query', announcements: { __typename?: 'AnnouncementConnection', totalCount: number, nodes: Array<{ __typename?: 'Announcement', id: string, title: string, description: string, startAt: any, expireAt: any }> } };

export type ViewCouponQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewCouponQuery = { __typename?: 'Query', coupon: { __typename?: 'Coupon', id: string, isEnabled: boolean, code: string, title: string, description: string, manyUsersCanUse: number, manyTimesUserCanUse: number, minimumCost: number, maximumCost: number, startAt: any, expireAt: any, discountPercent: number, discountFlat: number, creditGift: number, isFirstTravelOnly: boolean, allowedServices: Array<{ __typename?: 'Service', id: string, name: string }> } };

export type CreateCouponMutationVariables = Exact<{
  input: CouponInput;
}>;


export type CreateCouponMutation = { __typename?: 'Mutation', createOneCoupon: { __typename?: 'Coupon', id: string } };

export type UpdateCouponMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: CouponInput;
}>;


export type UpdateCouponMutation = { __typename?: 'Mutation', updateOneCoupon: { __typename?: 'Coupon', id: string } };

export type DeleteCouponMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCouponMutation = { __typename?: 'Mutation', deleteOneCoupon: { __typename?: 'CouponDeleteResponse', id?: string | null } };

export type CouponListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type CouponListQuery = { __typename?: 'Query', coupons: { __typename?: 'CouponConnection', totalCount: number, nodes: Array<{ __typename?: 'Coupon', id: string, code: string, title: string, isEnabled: boolean, description: string, startAt: any, expireAt: any }> } };

export type GiftBatchListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type GiftBatchListQuery = { __typename?: 'Query', giftBatches: { __typename?: 'GiftBatchConnection', totalCount: number, nodes: Array<{ __typename?: 'GiftBatch', id: string, name: string, currency: string, amount: number, availableFrom?: any | null, expireAt?: any | null, totalUsed: Array<{ __typename?: 'GiftBatchGiftCodesAggregateResponse', count?: { __typename?: 'GiftBatchGiftCodesCountAggregate', id?: number | null } | null }>, totalUnused: Array<{ __typename?: 'GiftBatchGiftCodesAggregateResponse', count?: { __typename?: 'GiftBatchGiftCodesCountAggregate', id?: number | null } | null }> }> } };

export type CreateGiftBachMutationVariables = Exact<{
  input: CreateGiftBatchInput;
}>;


export type CreateGiftBachMutation = { __typename?: 'Mutation', createGiftCardBatch: { __typename?: 'GiftBatch', id: string, name: string } };

export type ViewGiftBatchQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewGiftBatchQuery = { __typename?: 'Query', giftBatch: { __typename?: 'GiftBatch', id: string, name: string, amount: number, currency: string, availableFrom?: any | null, expireAt?: any | null, totalUsed: Array<{ __typename?: 'GiftBatchGiftCodesAggregateResponse', count?: { __typename?: 'GiftBatchGiftCodesCountAggregate', id?: number | null } | null }>, totalUnused: Array<{ __typename?: 'GiftBatchGiftCodesAggregateResponse', count?: { __typename?: 'GiftBatchGiftCodesCountAggregate', id?: number | null } | null }> } };

export type GiftCodeListQueryVariables = Exact<{
  giftBatchId: Scalars['ID']['input'];
  paging: OffsetPaging;
}>;


export type GiftCodeListQuery = { __typename?: 'Query', giftBatch: { __typename?: 'GiftBatch', giftCodes: { __typename?: 'GiftBatchGiftCodesConnection', totalCount: number, nodes: Array<{ __typename?: 'GiftCode', id: string, code: string, usedAt?: any | null, riderTransaction?: { __typename?: 'RiderTransaction', riderId: string, rider: { __typename?: 'Rider', firstName?: string | null, lastName?: string | null } } | null, driverTransaction?: { __typename?: 'DriverTransaction', driverId: string, driver?: { __typename?: 'Driver', firstName?: string | null, lastName?: string | null } | null } | null }> } } };

export type ExportGiftBatchToCsvMutationVariables = Exact<{
  giftBatchId: Scalars['ID']['input'];
}>;


export type ExportGiftBatchToCsvMutation = { __typename?: 'Mutation', exportGiftCardBatch: string };

export type RewardListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type RewardListQuery = { __typename?: 'Query', rewards: { __typename?: 'RewardConnection', totalCount: number, nodes: Array<{ __typename?: 'Reward', id: string, title: string, startDate?: any | null, endDate?: any | null, beneficiary: RewardBeneficiary, event: RewardEvent }> } };

export type ViewRewardQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewRewardQuery = { __typename?: 'Query', reward: { __typename?: 'Reward', id: string, title: string, startDate?: any | null, endDate?: any | null, appType: RewardAppType, beneficiary: RewardBeneficiary, event: RewardEvent, creditGift: number, tripFeePercentGift?: number | null, creditCurrency?: string | null, conditionTripCountsLessThan?: number | null, conditionUserNumberFirstDigits?: Array<string> | null } };

export type CreateRewardMutationVariables = Exact<{
  input: CreateReward;
}>;


export type CreateRewardMutation = { __typename?: 'Mutation', createOneReward: { __typename?: 'Reward', id: string } };

export type UpdateRewardMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateReward;
}>;


export type UpdateRewardMutation = { __typename?: 'Mutation', updateOneReward: { __typename?: 'Reward', id: string } };

export type CreatePayoutSessionFieldsQueryVariables = Exact<{ [key: string]: never; }>;


export type CreatePayoutSessionFieldsQuery = { __typename?: 'Query', supportedCurrencies: Array<string>, payoutMethods: Array<{ __typename?: 'PayoutMethod', id: string, name: string }> };

export type CreatePayoutSessionMutationVariables = Exact<{
  input: CreatePayoutSessionInput;
}>;


export type CreatePayoutSessionMutation = { __typename?: 'Mutation', createPayoutSession: { __typename?: 'PayoutSession', id: string } };

export type PayoutMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type PayoutMethodsQuery = { __typename?: 'Query', payoutMethods: Array<{ __typename?: 'PayoutMethod', id: string, name: string, description?: string | null, type: PayoutMethodType, media?: { __typename?: 'Media', id: string, address: string } | null }> };

export type ViewPayoutMethodQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewPayoutMethodQuery = { __typename?: 'Query', payoutMethod: { __typename?: 'PayoutMethod', id: string, name: string, currency: string, description?: string | null, type: PayoutMethodType, privateKey?: string | null, publicKey?: string | null, saltKey?: string | null, merchantId?: string | null, media?: { __typename?: 'Media', address: string } | null } };

export type CreatePayoutMethodMutationVariables = Exact<{
  input: CreatePayoutMethodInput;
}>;


export type CreatePayoutMethodMutation = { __typename?: 'Mutation', createOnePayoutMethod: { __typename?: 'PayoutMethod', id: string } };

export type UpdatePayoutMethodMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: CreatePayoutMethodInput;
}>;


export type UpdatePayoutMethodMutation = { __typename?: 'Mutation', updateOnePayoutMethod: { __typename?: 'PayoutMethod', id: string } };

export type PayoutsQueryVariables = Exact<{
  sessionsPaging: OffsetPaging;
  currency?: InputMaybe<Scalars['String']['input']>;
}>;


export type PayoutsQuery = { __typename?: 'Query', supportedCurrencies: Array<string>, payoutStatistics: { __typename?: 'PayoutStatistics', pendingAmount: number, lastPayoutAmount: number, currency: string, usersDefaultPayoutMethodStats: Array<{ __typename?: 'PayoutMethodStats', totalCount: number, payoutMethod?: { __typename?: 'PayoutMethod', id: string, name: string } | null }> }, payoutSessions: { __typename?: 'PayoutSessionConnection', totalCount: number, nodes: Array<{ __typename?: 'PayoutSession', id: string, createdAt: any, processedAt?: any | null, status: PayoutSessionStatus, totalAmount: number, currency: string }> } };

export type ViewPayoutSessionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewPayoutSessionQuery = { __typename?: 'Query', payoutSession: { __typename?: 'PayoutSession', id: string, currency: string, createdAt: any, processedAt?: any | null, totalAmount: number, status: PayoutSessionStatus, payoutMethods: Array<{ __typename?: 'PayoutMethod', id: string, type: PayoutMethodType, name: string, description?: string | null, currency: string, balance?: number | null, media?: { __typename?: 'Media', address: string } | null }>, driverTransactions: { __typename?: 'PayoutSessionDriverTransactionsConnection', nodes: Array<{ __typename?: 'DriverTransaction', amount: number, currency: string, status: TransactionStatus, createdAt: any, driver?: { __typename?: 'Driver', firstName?: string | null, lastName?: string | null, media?: { __typename?: 'Media', address: string } | null } | null }> }, amountToBePaidByPayoutMethod: Array<{ __typename?: 'PayoutSessionDriverTransactionsAggregateResponse', groupBy?: { __typename?: 'PayoutSessionDriverTransactionsAggregateGroupBy', payoutMethodId?: string | null } | null, sum?: { __typename?: 'PayoutSessionDriverTransactionsSumAggregate', amount?: number | null } | null }>, unpaidAmount: Array<{ __typename?: 'PayoutSessionDriverTransactionsAggregateResponse', sum?: { __typename?: 'PayoutSessionDriverTransactionsSumAggregate', amount?: number | null } | null }>, paidAmount: Array<{ __typename?: 'PayoutSessionDriverTransactionsAggregateResponse', sum?: { __typename?: 'PayoutSessionDriverTransactionsSumAggregate', amount?: number | null } | null }> } };

export type PayooutSessionTransactionsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  paging: OffsetPaging;
}>;


export type PayooutSessionTransactionsQuery = { __typename?: 'Query', payoutSession: { __typename?: 'PayoutSession', driverTransactions: { __typename?: 'PayoutSessionDriverTransactionsConnection', nodes: Array<{ __typename?: 'DriverTransaction', id: string, amount: number, currency: string, status: TransactionStatus, createdAt: any, driver?: { __typename?: 'Driver', firstName?: string | null, lastName?: string | null, media?: { __typename?: 'Media', address: string } | null, payoutAccounts: { __typename?: 'DriverPayoutAccountsConnection', nodes: Array<{ __typename?: 'PayoutAccount', id: string, name: string, type: SavedPaymentMethodType, accountNumber?: string | null, routingNumber?: string | null, bankName?: string | null, branchName?: string | null, accountHolderName?: string | null, accountHolderCountry?: string | null, accountHolderCity?: string | null, accountHolderState?: string | null, accountHolderZip?: string | null, accountHolderAddress?: string | null, accountHolderDateOfBirth?: any | null, payoutMethod: { __typename?: 'PayoutMethod', name: string, media?: { __typename?: 'Media', address: string } | null } }> } } | null }> } } };

export type ExportToCsvMutationVariables = Exact<{
  input: ExportSessionToCsvInput;
}>;


export type ExportToCsvMutation = { __typename?: 'Mutation', exportSessionToCsv: string };

export type RunAutoPayoutMutationVariables = Exact<{
  input: RunAutoPayoutInput;
}>;


export type RunAutoPayoutMutation = { __typename?: 'Mutation', runAutoPayout: boolean };

export type SaveManualPayoutItemMutationVariables = Exact<{
  input: ManualPayoutInput;
}>;


export type SaveManualPayoutItemMutation = { __typename?: 'Mutation', manualPayout: { __typename?: 'DriverTransaction', amount: number } };

export type UpdatePayoutSessionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: UpdatePayoutSessionInput;
}>;


export type UpdatePayoutSessionMutation = { __typename?: 'Mutation', updatePayoutSession: { __typename?: 'PayoutSession', id: string, status: PayoutSessionStatus } };

export type AvailableDriversForOrderQueryVariables = Exact<{
  center: PointInput;
  count: Scalars['Int']['input'];
}>;


export type AvailableDriversForOrderQuery = { __typename?: 'Query', getDriversLocationWithData: Array<{ __typename?: 'OnlineDriverWithData', id: number, mobileNumber: string, firstName?: string | null, lastName?: string | null, lastUpdatedAt: number, rating?: number | null, reviewCount: number, status: DriverStatus, location: { __typename?: 'Point', lat: number, lng: number } }> };

export type DriverSearchQueryVariables = Exact<{
  filter: Scalars['String']['input'];
}>;


export type DriverSearchQuery = { __typename?: 'Query', drivers: { __typename?: 'DriverConnection', nodes: Array<{ __typename?: 'Driver', id: string, mobileNumber: string, firstName?: string | null, lastName?: string | null, rating?: number | null, reviewCount: number, status: DriverStatus }> } };

export type AssignDriverToOrderMutationVariables = Exact<{
  orderId: Scalars['ID']['input'];
  driverId: Scalars['ID']['input'];
}>;


export type AssignDriverToOrderMutation = { __typename?: 'Mutation', assignDriverToOrder: { __typename?: 'Order', id: string } };

export type ViewOrderQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewOrderQuery = { __typename?: 'Query', order: { __typename?: 'Order', id: string, createdOn: any, expectedTimestamp?: any | null, costBest: number, costAfterCoupon: number, status: OrderStatus, currency: string, distanceBest: number, durationBest: number, startTimestamp?: any | null, finishTimestamp?: any | null, addresses: Array<string>, points: Array<{ __typename?: 'Point', lat: number, lng: number }>, service?: { __typename?: 'Service', name: string } | null, driver?: { __typename?: 'Driver', id: string, firstName?: string | null, lastName?: string | null, mobileNumber: string, registrationTimestamp: any, status: DriverStatus, media?: { __typename?: 'Media', address: string } | null } | null, rider?: { __typename?: 'Rider', id: string, firstName?: string | null, lastName?: string | null, mobileNumber: string, registrationTimestamp: any, status: RiderStatus, media?: { __typename?: 'Media', address: string } | null } | null, complaints: Array<{ __typename?: 'Complaint', id: string, subject: string, inscriptionTimestamp: any, content?: string | null, requestedByDriver: boolean }>, conversations: Array<{ __typename?: 'OrderMessage', sentAt: any, sentByDriver: boolean, status: MessageStatus, content: string }>, activities: Array<{ __typename?: 'RequestActivity', createdAt: any, type: RequestActivityType }>, coupon?: { __typename?: 'Coupon', title: string, code: string, expireAt: any } | null, riderTransactions: Array<{ __typename?: 'RiderTransaction', action: TransactionAction, rechargeType?: RiderRechargeTransactionType | null, deductType?: RiderDeductTransactionType | null, amount: number, status: TransactionStatus, currency: string, refrenceNumber?: string | null, paymentGateway?: { __typename?: 'PaymentGateway', title: string } | null }>, driverTransactions: Array<{ __typename?: 'DriverTransaction', action: TransactionAction, rechargeType?: DriverRechargeTransactionType | null, deductType?: DriverDeductTransactionType | null, amount: number, status: TransactionStatus, currency: string, refrenceNumber?: string | null }>, providerTransactions: Array<{ __typename?: 'ProviderTransaction', action: TransactionAction, rechargeType?: ProviderRechargeTransactionType | null, deductType?: ProviderDeductTransactionType | null, amount: number, currency: string, refrenceNumber?: string | null }>, fleetTransactions: Array<{ __typename?: 'FleetTransaction', action: TransactionAction, rechargeType?: string | null, deductType?: string | null, amount: number, currency: string, refrenceNumber?: string | null }> } };

export type OrdersListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<OrderFilter>;
  sorting?: InputMaybe<Array<OrderSort> | OrderSort>;
}>;


export type OrdersListQuery = { __typename?: 'Query', orders: { __typename?: 'OrderConnection', totalCount: number, nodes: Array<{ __typename?: 'Order', id: string, status: OrderStatus, createdOn: any, expectedTimestamp?: any | null, costAfterCoupon: number, currency: string }> } };

export type CreateRiderMutationVariables = Exact<{
  input: RiderInput;
}>;


export type CreateRiderMutation = { __typename?: 'Mutation', createOneRider: { __typename?: 'Rider', id: string, firstName?: string | null, lastName?: string | null, mobileNumber: string, gender?: Gender | null } };

export type ViewRiderQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewRiderQuery = { __typename?: 'Query', rider: { __typename?: 'Rider', id: string, status: RiderStatus, firstName?: string | null, lastName?: string | null, mobileNumber: string, isResident?: boolean | null, idNumber?: string | null, registrationTimestamp: any, email?: string | null, gender?: Gender | null, media?: { __typename?: 'Media', address: string } | null, wallets: { __typename?: 'RiderWalletsConnection', nodes: Array<{ __typename?: 'RiderWallet', balance: number, currency: string }> } } };

export type RiderAddressesQueryVariables = Exact<{
  riderId: Scalars['ID']['input'];
  paging?: InputMaybe<OffsetPaging>;
}>;


export type RiderAddressesQuery = { __typename?: 'Query', riderAddresses: { __typename?: 'RiderAddressConnection', nodes: Array<{ __typename?: 'RiderAddress', title: string, details?: string | null, location: { __typename?: 'Point', lat: number, lng: number } }> } };

export type RiderWalletQueryVariables = Exact<{
  riderId: Scalars['ID']['input'];
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<RiderTransactionFilter>;
  sorting?: InputMaybe<Array<RiderTransactionSort> | RiderTransactionSort>;
}>;


export type RiderWalletQuery = { __typename?: 'Query', rider: { __typename?: 'Rider', wallets: { __typename?: 'RiderWalletsConnection', nodes: Array<{ __typename?: 'RiderWallet', balance: number, currency: string }> }, transactions: { __typename?: 'RiderTransactionsConnection', totalCount: number, nodes: Array<{ __typename?: 'RiderTransaction', action: TransactionAction, deductType?: RiderDeductTransactionType | null, status: TransactionStatus, createdAt: any, rechargeType?: RiderRechargeTransactionType | null, amount: number, currency: string, refrenceNumber?: string | null, description?: string | null, paymentGatewayId?: string | null, operatorId?: string | null, requestId?: string | null }> } }, regions: { __typename?: 'RegionConnection', nodes: Array<{ __typename?: 'Region', currency: string }> } };

export type RiderOrdersQueryVariables = Exact<{
  riderId: Scalars['ID']['input'];
  filter?: InputMaybe<OrderFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<OrderSort> | OrderSort>;
}>;


export type RiderOrdersQuery = { __typename?: 'Query', rider: { __typename?: 'Rider', orders: { __typename?: 'RiderOrdersConnection', totalCount: number, nodes: Array<{ __typename?: 'Order', id: string, createdOn: any, status: OrderStatus, distanceBest: number, durationBest: number, costBest: number, costAfterCoupon: number, currency: string, addresses: Array<string>, expectedTimestamp?: any | null, points: Array<{ __typename?: 'Point', lat: number, lng: number }> }> } } };

export type UpdateRiderMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  update: RiderInput;
}>;


export type UpdateRiderMutation = { __typename?: 'Mutation', updateOneRider: { __typename?: 'Rider', id: string } };

export type CreateRiderTransactionMutationVariables = Exact<{
  input: RiderTransactionInput;
}>;


export type CreateRiderTransactionMutation = { __typename?: 'Mutation', createRiderTransaction: { __typename?: 'RiderWallet', id: string } };

export type DeleteRiderMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteRiderMutation = { __typename?: 'Mutation', deleteOneRider: { __typename?: 'Rider', id: string } };

export type RidersListQueryVariables = Exact<{
  filter?: InputMaybe<RiderFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<RiderSort> | RiderSort>;
}>;


export type RidersListQuery = { __typename?: 'Query', riders: { __typename?: 'RiderConnection', totalCount: number, nodes: Array<{ __typename?: 'Rider', id: string, firstName?: string | null, lastName?: string | null, status: RiderStatus, gender?: Gender | null, mobileNumber: string, registrationTimestamp: any }> } };

export type SosListQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
}>;


export type SosListQuery = { __typename?: 'Query', distressSignals: { __typename?: 'DistressSignalConnection', totalCount: number, nodes: Array<{ __typename?: 'DistressSignal', id: string, createdAt: any, status: SosStatus, location?: { __typename?: 'Point', lat: number, lng: number } | null }> } };

export type ViewSosQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ViewSosQuery = { __typename?: 'Query', distressSignal: { __typename?: 'DistressSignal', id: string, createdAt: any, status: SosStatus, submittedByRider: boolean, location?: { __typename?: 'Point', lat: number, lng: number } | null, activities: Array<{ __typename?: 'SOSActivity', action: SosActivityAction, createdAt: any, note?: string | null, operator: { __typename?: 'Operator', id: string, firstName?: string | null, lastName?: string | null } }>, order: { __typename?: 'Order', id: string, status: OrderStatus, createdOn: any, startTimestamp?: any | null, finishTimestamp?: any | null, expectedTimestamp?: any | null, costBest: number, costAfterCoupon: number, addresses: Array<string>, currency: string, rider?: { __typename?: 'Rider', id: string, mobileNumber: string, status: RiderStatus, firstName?: string | null, lastName?: string | null, registrationTimestamp: any } | null, driver?: { __typename?: 'Driver', id: string, mobileNumber: string, status: DriverStatus, firstName?: string | null, lastName?: string | null, registrationTimestamp: any } | null } } };

export type CreateSosActivityMutationVariables = Exact<{
  activity: CreateSosAcitivtyInput;
}>;


export type CreateSosActivityMutation = { __typename?: 'Mutation', createOneSOSActivity: { __typename?: 'SOSActivity', id: string } };

export type CurrentConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentConfigurationQuery = { __typename?: 'Query', currentConfiguration: { __typename?: 'CurrentConfiguration', purchaseCode?: string | null, backendMapsAPIKey?: string | null, adminPanelAPIKey?: string | null, firebaseProjectPrivateKey?: string | null } };

export type UpdatePurchaseCodeMutationVariables = Exact<{
  code: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdatePurchaseCodeMutation = { __typename?: 'Mutation', updatePurchaseCode: { __typename?: 'UpdatePurchaseCodeResult', status: UpdatePurchaseCodeStatus, message?: string | null, clients?: Array<{ __typename?: 'UpdatePurchaseCodeClient', ip: string }> | null } };

export type UpdateMapsApiKeyMutationVariables = Exact<{
  backend: Scalars['String']['input'];
  adminPanel: Scalars['String']['input'];
}>;


export type UpdateMapsApiKeyMutation = { __typename?: 'Mutation', updateMapsAPIKey: { __typename?: 'UpdateConfigResult', status: UpdateConfigStatus, message?: string | null } };

export type UpdateFirebaseMutationVariables = Exact<{
  keyFileName: Scalars['String']['input'];
}>;


export type UpdateFirebaseMutation = { __typename?: 'Mutation', updateFirebase: { __typename?: 'UpdateConfigResult', status: UpdateConfigStatus, message?: string | null } };

export type DisableServerMutationVariables = Exact<{
  ip: Scalars['String']['input'];
}>;


export type DisableServerMutation = { __typename?: 'Mutation', disablePreviousServer: { __typename?: 'UpdateConfigResult', status: UpdateConfigStatus, message?: string | null } };

export type LoginQueryVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'TokenObject', token: string } };

export const DriverOverviewInfoFragmentDoc = gql`
    fragment DriverOverviewInfo on Driver {
  id
  firstName
  lastName
  mobileNumber
  status
}
    `;
export const DriverLocationFragmentDoc = gql`
    fragment DriverLocation on OnlineDriver {
  location {
    lat
    lng
  }
  driverId
  lastUpdatedAt
}
    `;
export const NotificationsDocument = gql`
    query Notifications {
  complaintAggregate(filter: {status: {in: [UnderInvestigation, Submitted]}}) {
    count {
      id
    }
  }
  distressSignalAggregate(filter: {status: {in: [UnderReview, Submitted]}}) {
    count {
      id
    }
  }
  driverAggregate(filter: {status: {in: [PendingApproval]}}) {
    count {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NotificationsGQL extends Apollo.Query<NotificationsQuery, NotificationsQueryVariables> {
    document = NotificationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SosSubscriptionDocument = gql`
    subscription SOSSubscription {
  sosCreated {
    id
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SosSubscriptionGQL extends Apollo.Subscription<SosSubscriptionSubscription, SosSubscriptionSubscriptionVariables> {
    document = SosSubscriptionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ComplaintSubscriptionDocument = gql`
    subscription ComplaintSubscription {
  complaintCreated {
    id
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ComplaintSubscriptionGQL extends Apollo.Subscription<ComplaintSubscriptionSubscription, ComplaintSubscriptionSubscriptionVariables> {
    document = ComplaintSubscriptionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewComplaintDocument = gql`
    query ViewComplaint($id: ID!) {
  complaint(id: $id) {
    id
    inscriptionTimestamp
    status
    subject
    content
    requestedByDriver
    activities {
      type
      comment
      actor {
        firstName
        lastName
      }
      assignedTo {
        firstName
        lastName
      }
    }
    order {
      id
      status
      createdOn
      startTimestamp
      finishTimestamp
      expectedTimestamp
      costBest
      costAfterCoupon
      addresses
      currency
      rider {
        id
        mobileNumber
        status
        firstName
        lastName
        registrationTimestamp
      }
      driver {
        id
        mobileNumber
        status
        firstName
        lastName
        registrationTimestamp
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewComplaintGQL extends Apollo.Query<ViewComplaintQuery, ViewComplaintQueryVariables> {
    document = ViewComplaintDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateComplaintStatusDocument = gql`
    mutation UpdateComplaintStatus($id: ID!, $status: ComplaintStatus!) {
  updateOneComplaint(input: {id: $id, update: {status: $status}}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateComplaintStatusGQL extends Apollo.Mutation<UpdateComplaintStatusMutation, UpdateComplaintStatusMutationVariables> {
    document = UpdateComplaintStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ComplaintsListDocument = gql`
    query ComplaintsList($paging: OffsetPaging) {
  complaints(paging: $paging) {
    nodes {
      id
      inscriptionTimestamp
      subject
      status
      content
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ComplaintsListGQL extends Apollo.Query<ComplaintsListQuery, ComplaintsListQueryVariables> {
    document = ComplaintsListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateDriverDocument = gql`
    mutation CreateDriver($input: UpdateDriverInput!) {
  createOneDriver(input: {driver: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDriverGQL extends Apollo.Mutation<CreateDriverMutation, CreateDriverMutationVariables> {
    document = CreateDriverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewDriverDocument = gql`
    query ViewDriver($id: ID!) {
  driver(id: $id) {
    id
    firstName
    lastName
    mobileNumber
    registrationTimestamp
    lastSeenTimestamp
    status
    gender
    carId
    carColorId
    fleetId
    carProductionYear
    carPlate
    accountNumber
    bankName
    bankRoutingNumber
    bankSwift
    address
    email
    feedbacks {
      nodes {
        parametersAggregate {
          groupBy {
            title
            isGood
          }
          count {
            id
          }
        }
      }
    }
    enabledServices {
      id
    }
    documents {
      id
      address
    }
    mediaId
    media {
      address
    }
    rating
    reviewCount
  }
  services {
    id
    name
  }
  fleets {
    nodes {
      id
      name
    }
  }
  driverFeedbackParametersSummary(driverId: $id) {
    title
    isGood
    count
  }
  carModels(paging: {limit: 100}) {
    nodes {
      id
      name
    }
  }
  carColors {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewDriverGQL extends Apollo.Query<ViewDriverQuery, ViewDriverQueryVariables> {
    document = ViewDriverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateDriverProfileDocument = gql`
    mutation UpdateDriverProfile($id: ID!, $update: UpdateDriverInput!, $serviceIds: [ID!]!) {
  updateOneDriver(input: {id: $id, update: $update}) {
    id
  }
  setEnabledServicesOnDriver(input: {id: $id, relationIds: $serviceIds}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateDriverProfileGQL extends Apollo.Mutation<UpdateDriverProfileMutation, UpdateDriverProfileMutationVariables> {
    document = UpdateDriverProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateDriverStatusDocument = gql`
    mutation UpdateDriverStatus($id: ID!, $status: DriverStatus) {
  updateOneDriver(input: {id: $id, update: {status: $status}}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateDriverStatusGQL extends Apollo.Mutation<UpdateDriverStatusMutation, UpdateDriverStatusMutationVariables> {
    document = UpdateDriverStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DriverFinancialsDocument = gql`
    query DriverFinancials($id: ID!, $paging: OffsetPaging, $filter: DriverTransactionFilter, $sorting: [DriverTransactionSort!]) {
  driver(id: $id) {
    transactions(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        status
        createdAt
        amount
        description
        currency
        action
        deductType
        rechargeType
        refrenceNumber
        requestId
        paymentGatewayId
        operatorId
      }
      totalCount
    }
    wallets {
      balance
      currency
    }
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DriverFinancialsGQL extends Apollo.Query<DriverFinancialsQuery, DriverFinancialsQueryVariables> {
    document = DriverFinancialsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DriverFeedbacksDocument = gql`
    query DriverFeedbacks($id: ID!, $paging: OffsetPaging) {
  feedbacks(filter: {driverId: {eq: $id}}, paging: $paging) {
    nodes {
      id
      requestId
      reviewTimestamp
      score
      description
      parameters {
        isGood
        title
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DriverFeedbacksGQL extends Apollo.Query<DriverFeedbacksQuery, DriverFeedbacksQueryVariables> {
    document = DriverFeedbacksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DriverOrdersDocument = gql`
    query DriverOrders($driverId: ID!, $filter: OrderFilter, $paging: OffsetPaging, $sorting: [OrderSort!]) {
  driver(id: $driverId) {
    orders(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        id
        createdOn
        status
        distanceBest
        durationBest
        costBest
        costAfterCoupon
        currency
        addresses
        points {
          lat
          lng
        }
        expectedTimestamp
      }
      totalCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DriverOrdersGQL extends Apollo.Query<DriverOrdersQuery, DriverOrdersQueryVariables> {
    document = DriverOrdersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateDriverTransactionDocument = gql`
    mutation CreateDriverTransaction($input: DriverTransactionInput!) {
  createDriverTransaction(input: $input) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDriverTransactionGQL extends Apollo.Mutation<CreateDriverTransactionMutation, CreateDriverTransactionMutationVariables> {
    document = CreateDriverTransactionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteDriverDocument = gql`
    mutation DeleteDriver($id: ID!) {
  deleteOneDriver(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteDriverGQL extends Apollo.Mutation<DeleteDriverMutation, DeleteDriverMutationVariables> {
    document = DeleteDriverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DriversListDocument = gql`
    query DriversList($paging: OffsetPaging, $filter: DriverFilter, $sorting: [DriverSort!]) {
  drivers(paging: $paging, filter: $filter, sorting: $sorting) {
    nodes {
      id
      firstName
      lastName
      gender
      mobileNumber
      status
      registrationTimestamp
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DriversListGQL extends Apollo.Query<DriversListQuery, DriversListQueryVariables> {
    document = DriversListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProviderWalletsListDocument = gql`
    query ProviderWalletsList($paging: OffsetPaging) {
  providerTransactions(paging: $paging) {
    nodes {
      createdAt
      action
      deductType
      rechargeType
      amount
      currency
      description
      requestId
      operatorId
    }
    totalCount
  }
  providerWallets {
    balance
    currency
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProviderWalletsListGQL extends Apollo.Query<ProviderWalletsListQuery, ProviderWalletsListQueryVariables> {
    document = ProviderWalletsListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExportDocument = gql`
    query Export($input: ExportArgs!) {
  export(input: $input) {
    url
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExportGQL extends Apollo.Query<ExportQuery, ExportQueryVariables> {
    document = ExportDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DriverWalletsListDocument = gql`
    query DriverWalletsList($paging: OffsetPaging) {
  driverWallets(paging: $paging) {
    nodes {
      id
      driverId
      balance
      currency
      driver {
        firstName
        lastName
      }
    }
    totalCount
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DriverWalletsListGQL extends Apollo.Query<DriverWalletsListQuery, DriverWalletsListQueryVariables> {
    document = DriverWalletsListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FleetWalletsListDocument = gql`
    query FleetWalletsList($paging: OffsetPaging, $filter: FleetWalletFilter) {
  fleetWallets(paging: $paging, filter: $filter) {
    nodes {
      id
      balance
      currency
      fleetId
      fleet {
        name
      }
    }
    totalCount
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FleetWalletsListGQL extends Apollo.Query<FleetWalletsListQuery, FleetWalletsListQueryVariables> {
    document = FleetWalletsListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RiderWalletsListDocument = gql`
    query RiderWalletsList($paging: OffsetPaging) {
  riderWallets(paging: $paging) {
    nodes {
      balance
      currency
      riderId
      rider {
        firstName
        lastName
      }
    }
    totalCount
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RiderWalletsListGQL extends Apollo.Query<RiderWalletsListQuery, RiderWalletsListQueryVariables> {
    document = RiderWalletsListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DispatcherCalculateFareDocument = gql`
    query DispatcherCalculateFare($points: [PointInput!]!, $riderId: ID!) {
  calculateFare(input: {points: $points, riderId: $riderId}) {
    currency
    distance
    duration
    services {
      name
      services {
        id
        name
        cost
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DispatcherCalculateFareGQL extends Apollo.Query<DispatcherCalculateFareQuery, DispatcherCalculateFareQueryVariables> {
    document = DispatcherCalculateFareDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOrderDocument = gql`
    mutation CreateOrder($riderId: ID!, $points: [PointInput!]!, $addresses: [String!]!, $serviceId: ID!, $intervalMinutes: Int!) {
  createOrder(
    input: {points: $points, serviceId: $serviceId, addresses: $addresses, intervalMinutes: $intervalMinutes, riderId: $riderId}
  ) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOrderGQL extends Apollo.Mutation<CreateOrderMutation, CreateOrderMutationVariables> {
    document = CreateOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrderUpdatedDocument = gql`
    subscription OrderUpdated($id: ID!) {
  orderUpdated(orderId: $id) {
    id
    status
    driver {
      firstName
      lastName
      mobileNumber
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OrderUpdatedGQL extends Apollo.Subscription<OrderUpdatedSubscription, OrderUpdatedSubscriptionVariables> {
    document = OrderUpdatedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CancelOrderDocument = gql`
    mutation CancelOrder($orderId: ID!) {
  cancelOrder(orderId: $orderId) {
    id
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CancelOrderGQL extends Apollo.Mutation<CancelOrderMutation, CancelOrderMutationVariables> {
    document = CancelOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OverviewDocument = gql`
    query Overview {
  complaintAggregate(filter: {status: {in: [Submitted, UnderInvestigation]}}) {
    count {
      id
    }
  }
  driverAggregate(filter: {status: {eq: PendingApproval}}) {
    count {
      id
    }
  }
  activeOrders: orderAggregate(
    filter: {status: {in: [DriverAccepted, Arrived, Started, WaitingForPostPay]}}
  ) {
    count {
      id
    }
  }
  bookedOrders: orderAggregate(filter: {status: {eq: Booked}}) {
    count {
      id
    }
  }
  getDriversLocation(center: {lat: 45, lng: 45}, count: 150) {
    ...DriverLocation
  }
}
    ${DriverLocationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OverviewGQL extends Apollo.Query<OverviewQuery, OverviewQueryVariables> {
    document = OverviewDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OverviewDriverPagingDocument = gql`
    query OverviewDriverPaging($ids: [ID!]!) {
  drivers(filter: {id: {in: $ids}}) {
    nodes {
      ...DriverOverviewInfo
    }
    totalCount
  }
}
    ${DriverOverviewInfoFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OverviewDriverPagingGQL extends Apollo.Query<OverviewDriverPagingQuery, OverviewDriverPagingQueryVariables> {
    document = OverviewDriverPagingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RequestsChartDocument = gql`
    query RequestsChart($timeframe: ChartTimeframe!) {
  requestChart(timeframe: $timeframe) {
    time
    count
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RequestsChartGQL extends Apollo.Query<RequestsChartQuery, RequestsChartQueryVariables> {
    document = RequestsChartDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const IncomeChartDocument = gql`
    query IncomeChart($timeframe: ChartTimeframe!) {
  incomeChart(timeframe: $timeframe) {
    time
    sum
    currency
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class IncomeChartGQL extends Apollo.Query<IncomeChartQuery, IncomeChartQueryVariables> {
    document = IncomeChartDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DriverRegistrationsDocument = gql`
    query DriverRegistrations($timeframe: ChartTimeframe!) {
  driverRegistrations(timeframe: $timeframe) {
    time
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DriverRegistrationsGQL extends Apollo.Query<DriverRegistrationsQuery, DriverRegistrationsQueryVariables> {
    document = DriverRegistrationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RiderRegistrationsDocument = gql`
    query RiderRegistrations($timeframe: ChartTimeframe!) {
  riderRegistrations(timeframe: $timeframe) {
    time
    count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RiderRegistrationsGQL extends Apollo.Query<RiderRegistrationsQuery, RiderRegistrationsQueryVariables> {
    document = RiderRegistrationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CarsListDocument = gql`
    query CarsList {
  carModels(paging: {limit: 100}) {
    nodes {
      id
      name
    }
  }
  carColors {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CarsListGQL extends Apollo.Query<CarsListQuery, CarsListQueryVariables> {
    document = CarsListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteCarModelDocument = gql`
    mutation DeleteCarModel($id: ID!) {
  deleteOneCarModel(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteCarModelGQL extends Apollo.Mutation<DeleteCarModelMutation, DeleteCarModelMutationVariables> {
    document = DeleteCarModelDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteCarColorDocument = gql`
    mutation DeleteCarColor($id: ID!) {
  deleteOneCarColor(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteCarColorGQL extends Apollo.Mutation<DeleteCarColorMutation, DeleteCarColorMutationVariables> {
    document = DeleteCarColorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateCarModelDocument = gql`
    mutation CreateCarModel($input: CarModelInput!) {
  createOneCarModel(input: {carModel: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCarModelGQL extends Apollo.Mutation<CreateCarModelMutation, CreateCarModelMutationVariables> {
    document = CreateCarModelDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateCarColorDocument = gql`
    mutation CreateCarColor($input: CarColorInput!) {
  createOneCarColor(input: {carColor: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCarColorGQL extends Apollo.Mutation<CreateCarColorMutation, CreateCarColorMutationVariables> {
    document = CreateCarColorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateCarModelDocument = gql`
    mutation UpdateCarModel($id: ID!, $input: CarModelInput!) {
  updateOneCarModel(input: {id: $id, update: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCarModelGQL extends Apollo.Mutation<UpdateCarModelMutation, UpdateCarModelMutationVariables> {
    document = UpdateCarModelDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateCarColorDocument = gql`
    mutation UpdateCarColor($id: ID!, $input: CarColorInput!) {
  updateOneCarColor(input: {id: $id, update: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCarColorGQL extends Apollo.Mutation<UpdateCarColorMutation, UpdateCarColorMutationVariables> {
    document = UpdateCarColorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateFleetDocument = gql`
    mutation CreateFleet($input: FleetInput!) {
  createOneFleet(input: {fleet: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateFleetGQL extends Apollo.Mutation<CreateFleetMutation, CreateFleetMutationVariables> {
    document = CreateFleetDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewFleetDocument = gql`
    query ViewFleet($id: ID!) {
  fleet(id: $id) {
    id
    name
    phoneNumber
    address
    mobileNumber
    accountNumber
    userName
    password
    commissionSharePercent
    commissionShareFlat
    feeMultiplier
    exclusivityAreas {
      lat
      lng
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewFleetGQL extends Apollo.Query<ViewFleetQuery, ViewFleetQueryVariables> {
    document = ViewFleetDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FleetFinancialsDocument = gql`
    query FleetFinancials($id: ID!, $paging: OffsetPaging, $filter: FleetTransactionFilter, $sorting: [FleetTransactionSort!]) {
  fleet(id: $id) {
    transactions(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        transactionTimestamp
        amount
        currency
        action
        deductType
        rechargeType
        refrenceNumber
        operatorId
        requestId
        description
      }
      totalCount
    }
    wallets {
      currency
      balance
    }
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FleetFinancialsGQL extends Apollo.Query<FleetFinancialsQuery, FleetFinancialsQueryVariables> {
    document = FleetFinancialsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FleetZonePricesDocument = gql`
    query FleetZonePrices($id: ID!, $paging: OffsetPaging, $filter: ZonePriceFilter, $sorting: [ZonePriceSort!]) {
  fleet(id: $id) {
    zonePrices(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        id
        name
      }
      totalCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FleetZonePricesGQL extends Apollo.Query<FleetZonePricesQuery, FleetZonePricesQueryVariables> {
    document = FleetZonePricesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FleetDriversDocument = gql`
    query FleetDrivers($id: ID!, $paging: OffsetPaging) {
  drivers(filter: {fleetId: {eq: $id}}, paging: $paging) {
    nodes {
      id
      firstName
      lastName
      mobileNumber
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FleetDriversGQL extends Apollo.Query<FleetDriversQuery, FleetDriversQueryVariables> {
    document = FleetDriversDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateFleetDocument = gql`
    mutation UpdateFleet($id: ID!, $update: FleetInput!) {
  updateOneFleet(input: {id: $id, update: $update}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateFleetGQL extends Apollo.Mutation<UpdateFleetMutation, UpdateFleetMutationVariables> {
    document = UpdateFleetDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateFleetTransactionDocument = gql`
    mutation CreateFleetTransaction($input: FleetTransactionInput!) {
  createFleetTransaction(input: $input) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateFleetTransactionGQL extends Apollo.Mutation<CreateFleetTransactionMutation, CreateFleetTransactionMutationVariables> {
    document = CreateFleetTransactionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FleetsListDocument = gql`
    query FleetsList($paging: OffsetPaging, $filter: FleetFilter) {
  fleets(paging: $paging, filter: $filter) {
    nodes {
      id
      name
      phoneNumber
      address
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FleetsListGQL extends Apollo.Query<FleetsListQuery, FleetsListQueryVariables> {
    document = FleetsListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrderCancelReasonListDocument = gql`
    query OrderCancelReasonList($paging: OffsetPaging) {
  orderCancelReasons(paging: $paging) {
    nodes {
      id
      title
      isEnabled
      userType
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OrderCancelReasonListGQL extends Apollo.Query<OrderCancelReasonListQuery, OrderCancelReasonListQueryVariables> {
    document = OrderCancelReasonListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrderCancelReasonViewDocument = gql`
    query OrderCancelReasonView($id: ID!) {
  orderCancelReason(id: $id) {
    id
    title
    userType
    isEnabled
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OrderCancelReasonViewGQL extends Apollo.Query<OrderCancelReasonViewQuery, OrderCancelReasonViewQueryVariables> {
    document = OrderCancelReasonViewDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOrderCancelReasonDocument = gql`
    mutation UpdateOrderCancelReason($id: ID!, $update: OrderCancelReasonInput!) {
  updateOneOrderCancelReason(input: {id: $id, update: $update}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOrderCancelReasonGQL extends Apollo.Mutation<UpdateOrderCancelReasonMutation, UpdateOrderCancelReasonMutationVariables> {
    document = UpdateOrderCancelReasonDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOrderCancelReasonDocument = gql`
    mutation CreateOrderCancelReason($input: OrderCancelReasonInput!) {
  createOneOrderCancelReason(input: {orderCancelReason: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOrderCancelReasonGQL extends Apollo.Mutation<CreateOrderCancelReasonMutation, CreateOrderCancelReasonMutationVariables> {
    document = CreateOrderCancelReasonDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewPaymentGatewayDocument = gql`
    query ViewPaymentGateway($id: ID!) {
  paymentGateway(id: $id) {
    id
    title
    type
    enabled
    privateKey
    publicKey
    merchantId
    saltKey
    mediaId
    media {
      address
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewPaymentGatewayGQL extends Apollo.Query<ViewPaymentGatewayQuery, ViewPaymentGatewayQueryVariables> {
    document = ViewPaymentGatewayDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePaymentGatewayDocument = gql`
    mutation CreatePaymentGateway($input: PaymentGatewayInput!) {
  createOnePaymentGateway(input: {paymentGateway: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePaymentGatewayGQL extends Apollo.Mutation<CreatePaymentGatewayMutation, CreatePaymentGatewayMutationVariables> {
    document = CreatePaymentGatewayDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePaymentGatewayDocument = gql`
    mutation UpdatePaymentGateway($id: ID!, $input: PaymentGatewayInput!) {
  updateOnePaymentGateway(input: {id: $id, update: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePaymentGatewayGQL extends Apollo.Mutation<UpdatePaymentGatewayMutation, UpdatePaymentGatewayMutationVariables> {
    document = UpdatePaymentGatewayDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PaymentGatewaysDocument = gql`
    query PaymentGateways($paging: OffsetPaging) {
  paymentGateways(paging: $paging) {
    nodes {
      id
      enabled
      title
      type
      media {
        address
      }
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PaymentGatewaysGQL extends Apollo.Query<PaymentGatewaysQuery, PaymentGatewaysQueryVariables> {
    document = PaymentGatewaysDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegionListDocument = gql`
    query RegionList($paging: OffsetPaging) {
  regions(paging: $paging) {
    nodes {
      id
      name
      currency
      enabled
      location {
        lat
        lng
      }
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegionListGQL extends Apollo.Query<RegionListQuery, RegionListQueryVariables> {
    document = RegionListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegionViewDocument = gql`
    query RegionView($id: ID!) {
  region(id: $id) {
    id
    name
    currency
    enabled
    location {
      lat
      lng
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegionViewGQL extends Apollo.Query<RegionViewQuery, RegionViewQueryVariables> {
    document = RegionViewDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateRegionDocument = gql`
    mutation UpdateRegion($id: ID!, $update: RegionInput!) {
  updateOneRegion(input: {id: $id, update: $update}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateRegionGQL extends Apollo.Mutation<UpdateRegionMutation, UpdateRegionMutationVariables> {
    document = UpdateRegionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateRegionDocument = gql`
    mutation CreateRegion($input: RegionInput!) {
  createOneRegion(input: {region: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRegionGQL extends Apollo.Mutation<CreateRegionMutation, CreateRegionMutationVariables> {
    document = CreateRegionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReviewParameterViewDocument = gql`
    query ReviewParameterView($id: ID!) {
  feedbackParameter(id: $id) {
    id
    title
    isGood
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ReviewParameterViewGQL extends Apollo.Query<ReviewParameterViewQuery, ReviewParameterViewQueryVariables> {
    document = ReviewParameterViewDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateReviewParameterDocument = gql`
    mutation UpdateReviewParameter($id: ID!, $update: FeedbackParameterInput!) {
  updateOneFeedbackParameter(input: {id: $id, update: $update}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateReviewParameterGQL extends Apollo.Mutation<UpdateReviewParameterMutation, UpdateReviewParameterMutationVariables> {
    document = UpdateReviewParameterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateReviewParameterDocument = gql`
    mutation CreateReviewParameter($input: FeedbackParameterInput!) {
  createOneFeedbackParameter(input: {feedbackParameter: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateReviewParameterGQL extends Apollo.Mutation<CreateReviewParameterMutation, CreateReviewParameterMutationVariables> {
    document = CreateReviewParameterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReviewParametersListDocument = gql`
    query ReviewParametersList {
  feedbackParameters {
    id
    title
    isGood
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ReviewParametersListGQL extends Apollo.Query<ReviewParametersListQuery, ReviewParametersListQueryVariables> {
    document = ReviewParametersListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RolesDocument = gql`
    query Roles {
  operatorRoles {
    id
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RolesGQL extends Apollo.Query<RolesQuery, RolesQueryVariables> {
    document = RolesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RoleDocument = gql`
    query Role($id: ID!) {
  operatorRole(id: $id) {
    id
    title
    permissions
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RoleGQL extends Apollo.Query<RoleQuery, RoleQueryVariables> {
    document = RoleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateRoleDocument = gql`
    mutation CreateRole($input: OperatorRoleInput!) {
  createOneOperatorRole(input: {operatorRole: $input}) {
    id
    title
    permissions
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRoleGQL extends Apollo.Mutation<CreateRoleMutation, CreateRoleMutationVariables> {
    document = CreateRoleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateRoleDocument = gql`
    mutation UpdateRole($id: ID!, $input: OperatorRoleInput!) {
  updateOneOperatorRole(input: {id: $id, update: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateRoleGQL extends Apollo.Mutation<UpdateRoleMutation, UpdateRoleMutationVariables> {
    document = UpdateRoleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ServiceOptionViewDocument = gql`
    query ServiceOptionView($id: ID!) {
  serviceOption(id: $id) {
    id
    name
    type
    icon
    additionalFee
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ServiceOptionViewGQL extends Apollo.Query<ServiceOptionViewQuery, ServiceOptionViewQueryVariables> {
    document = ServiceOptionViewDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateServiceOptionDocument = gql`
    mutation UpdateServiceOption($id: ID!, $update: ServiceOptionInput!) {
  updateOneServiceOption(input: {id: $id, update: $update}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateServiceOptionGQL extends Apollo.Mutation<UpdateServiceOptionMutation, UpdateServiceOptionMutationVariables> {
    document = UpdateServiceOptionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateServiceOptionDocument = gql`
    mutation CreateServiceOption($input: ServiceOptionInput!) {
  createOneServiceOption(input: {serviceOption: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateServiceOptionGQL extends Apollo.Mutation<CreateServiceOptionMutation, CreateServiceOptionMutationVariables> {
    document = CreateServiceOptionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ServiceOptionsListDocument = gql`
    query ServiceOptionsList {
  serviceOptions {
    id
    name
    icon
    type
    additionalFee
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ServiceOptionsListGQL extends Apollo.Query<ServiceOptionsListQuery, ServiceOptionsListQueryVariables> {
    document = ServiceOptionsListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewServiceCategoryDocument = gql`
    query ViewServiceCategory($id: ID!) {
  serviceCategory(id: $id) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewServiceCategoryGQL extends Apollo.Query<ViewServiceCategoryQuery, ViewServiceCategoryQueryVariables> {
    document = ViewServiceCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateServiceCategoryDocument = gql`
    mutation CreateServiceCategory($input: ServiceCategoryInput!) {
  createOneServiceCategory(input: {serviceCategory: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateServiceCategoryGQL extends Apollo.Mutation<CreateServiceCategoryMutation, CreateServiceCategoryMutationVariables> {
    document = CreateServiceCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateServiceCategoryDocument = gql`
    mutation UpdateServiceCategory($id: ID!, $input: ServiceCategoryInput!) {
  updateOneServiceCategory(input: {id: $id, update: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateServiceCategoryGQL extends Apollo.Mutation<UpdateServiceCategoryMutation, UpdateServiceCategoryMutationVariables> {
    document = UpdateServiceCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteServiceCategoryDocument = gql`
    mutation DeleteServiceCategory($id: ID!) {
  deleteOneServiceCategory(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteServiceCategoryGQL extends Apollo.Mutation<DeleteServiceCategoryMutation, DeleteServiceCategoryMutationVariables> {
    document = DeleteServiceCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ServicesListDocument = gql`
    query ServicesList {
  serviceCategories {
    id
    name
    services {
      id
      name
      description
      media {
        address
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ServicesListGQL extends Apollo.Query<ServicesListQuery, ServicesListQueryVariables> {
    document = ServicesListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewServiceDocument = gql`
    query ViewService($id: ID!) {
  service(id: $id) {
    id
    name
    categoryId
    baseFare
    perHundredMeters
    perMinuteDrive
    perMinuteWait
    minimumFee
    searchRadius
    maximumDestinationDistance
    paymentMethod
    cancellationTotalFee
    cancellationDriverShare
    providerShareFlat
    providerSharePercent
    prepayPercent
    searchRadius
    mediaId
    description
    personCapacity
    roundingFactor
    media {
      address
    }
    timeMultipliers {
      startTime
      endTime
      multiply
    }
    distanceMultipliers {
      distanceFrom
      distanceTo
      multiply
    }
    weekdayMultipliers {
      weekday
      multiply
    }
    dateRangeMultipliers {
      startDate
      endDate
      multiply
    }
    options {
      id
      name
      type
      additionalFee
      icon
    }
    regions {
      id
      name
      currency
    }
  }
  regions {
    nodes {
      id
      name
      currency
    }
  }
  serviceCategories {
    id
    name
  }
  serviceOptions {
    id
    name
    icon
    type
    additionalFee
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewServiceGQL extends Apollo.Query<ViewServiceQuery, ViewServiceQueryVariables> {
    document = ViewServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NewServiceDocument = gql`
    query NewService {
  regions {
    nodes {
      id
      name
      currency
    }
  }
  serviceCategories {
    id
    name
  }
  serviceOptions {
    id
    name
    icon
    type
    additionalFee
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewServiceGQL extends Apollo.Query<NewServiceQuery, NewServiceQueryVariables> {
    document = NewServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateServiceDocument = gql`
    mutation CreateService($input: ServiceInput!) {
  createOneService(input: {service: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateServiceGQL extends Apollo.Mutation<CreateServiceMutation, CreateServiceMutationVariables> {
    document = CreateServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteServiceDocument = gql`
    mutation DeleteService($id: ID!) {
  deleteOneService(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteServiceGQL extends Apollo.Mutation<DeleteServiceMutation, DeleteServiceMutationVariables> {
    document = DeleteServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateServiceDocument = gql`
    mutation UpdateService($id: ID!, $input: ServiceInput!) {
  updateOneService(input: {id: $id, update: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateServiceGQL extends Apollo.Mutation<UpdateServiceMutation, UpdateServiceMutationVariables> {
    document = UpdateServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SetRegionsOnServiceDocument = gql`
    mutation SetRegionsOnService($id: ID!, $relationIds: [ID!]!) {
  setRegionsOnService(input: {id: $id, relationIds: $relationIds}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetRegionsOnServiceGQL extends Apollo.Mutation<SetRegionsOnServiceMutation, SetRegionsOnServiceMutationVariables> {
    document = SetRegionsOnServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SetOptionsOnServiceDocument = gql`
    mutation SetOptionsOnService($id: ID!, $relationIds: [ID!]!) {
  setOptionsOnService(input: {id: $id, relationIds: $relationIds}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetOptionsOnServiceGQL extends Apollo.Mutation<SetOptionsOnServiceMutation, SetOptionsOnServiceMutationVariables> {
    document = SetOptionsOnServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($input: UpdatePasswordInput!) {
  updatePassword(input: $input) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePasswordGQL extends Apollo.Mutation<UpdatePasswordMutation, UpdatePasswordMutationVariables> {
    document = UpdatePasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetConfigurationDocument = gql`
    query GetConfiguration {
  currentConfiguration {
    backendMapsAPIKey
    twilioAccountSid
    twilioAuthToken
    twilioFromNumber
    twilioVerificationCodeSMSTemplate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetConfigurationGQL extends Apollo.Query<GetConfigurationQuery, GetConfigurationQueryVariables> {
    document = GetConfigurationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateConfigDocument = gql`
    mutation UpdateConfig($input: UpdateConfigInput!) {
  saveConfiguration(input: $input) {
    backendMapsAPIKey
    twilioAccountSid
    twilioAuthToken
    twilioFromNumber
    twilioVerificationCodeSMSTemplate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateConfigGQL extends Apollo.Mutation<UpdateConfigMutation, UpdateConfigMutationVariables> {
    document = UpdateConfigDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SmsProvidersDocument = gql`
    query SMSProviders($paging: OffsetPaging) {
  smsProviders(paging: $paging) {
    nodes {
      id
      isDefault
      name
      type
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SmsProvidersGQL extends Apollo.Query<SmsProvidersQuery, SmsProvidersQueryVariables> {
    document = SmsProvidersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewSmsProviderDocument = gql`
    query ViewSMSProvider($id: ID!) {
  smsProvider(id: $id) {
    id
    name
    type
    isDefault
    authToken
    accountId
    fromNumber
    verificationTemplate
    smsType
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewSmsProviderGQL extends Apollo.Query<ViewSmsProviderQuery, ViewSmsProviderQueryVariables> {
    document = ViewSmsProviderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateSmsProviderDocument = gql`
    mutation CreateSMSProvider($input: SMSProviderInput!) {
  createOneSMSProvider(input: {sMSProvider: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateSmsProviderGQL extends Apollo.Mutation<CreateSmsProviderMutation, CreateSmsProviderMutationVariables> {
    document = CreateSmsProviderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSmsProviderDocument = gql`
    mutation UpdateSMSProvider($id: ID!, $input: SMSProviderInput!) {
  updateOneSMSProvider(input: {id: $id, update: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSmsProviderGQL extends Apollo.Mutation<UpdateSmsProviderMutation, UpdateSmsProviderMutationVariables> {
    document = UpdateSmsProviderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MarkSmsProviderAsDefaultDocument = gql`
    mutation MarkSMSProviderAsDefault($id: ID!) {
  markSMSProviderAsDefault(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MarkSmsProviderAsDefaultGQL extends Apollo.Mutation<MarkSmsProviderAsDefaultMutation, MarkSmsProviderAsDefaultMutationVariables> {
    document = MarkSmsProviderAsDefaultDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOperatorDocument = gql`
    mutation CreateOperator($input: CreateOperatorInput!) {
  createOneOperator(input: {operator: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOperatorGQL extends Apollo.Mutation<CreateOperatorMutation, CreateOperatorMutationVariables> {
    document = CreateOperatorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewOperatorDocument = gql`
    query ViewOperator($id: ID!) {
  operator(id: $id) {
    id
    firstName
    lastName
    mobileNumber
    userName
    email
    roleId
  }
  operatorRoles {
    id
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewOperatorGQL extends Apollo.Query<ViewOperatorQuery, ViewOperatorQueryVariables> {
    document = ViewOperatorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NewOperatorDocument = gql`
    query NewOperator {
  operatorRoles {
    id
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NewOperatorGQL extends Apollo.Query<NewOperatorQuery, NewOperatorQueryVariables> {
    document = NewOperatorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOperatorDocument = gql`
    mutation UpdateOperator($id: ID!, $update: UpdateOperator!) {
  updateOneOperator(input: {id: $id, update: $update}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOperatorGQL extends Apollo.Mutation<UpdateOperatorMutation, UpdateOperatorMutationVariables> {
    document = UpdateOperatorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UsersListDocument = gql`
    query UsersList($paging: OffsetPaging) {
  operators(paging: $paging) {
    nodes {
      id
      userName
      firstName
      lastName
      role {
        title
      }
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersListGQL extends Apollo.Query<UsersListQuery, UsersListQueryVariables> {
    document = UsersListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ZonePriceViewDocument = gql`
    query ZonePriceView($id: ID!) {
  zonePrice(id: $id) {
    id
    name
    from {
      lat
      lng
    }
    to {
      lat
      lng
    }
    cost
    services {
      id
    }
    fleets {
      id
    }
    timeMultipliers {
      startTime
      endTime
      multiply
    }
  }
  fleets(paging: {limit: 50}) {
    nodes {
      id
      name
    }
  }
  services {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ZonePriceViewGQL extends Apollo.Query<ZonePriceViewQuery, ZonePriceViewQueryVariables> {
    document = ZonePriceViewDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ZonePriceNewDocument = gql`
    query ZonePriceNew {
  fleets(paging: {limit: 50}) {
    nodes {
      id
      name
    }
  }
  services {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ZonePriceNewGQL extends Apollo.Query<ZonePriceNewQuery, ZonePriceNewQueryVariables> {
    document = ZonePriceNewDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateZonePriceDocument = gql`
    mutation UpdateZonePrice($id: ID!, $update: ZonePriceInput!) {
  updateOneZonePrice(input: {id: $id, update: $update}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateZonePriceGQL extends Apollo.Mutation<UpdateZonePriceMutation, UpdateZonePriceMutationVariables> {
    document = UpdateZonePriceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateZonePriceDocument = gql`
    mutation CreateZonePrice($input: ZonePriceInput!) {
  createOneZonePrice(input: {zonePrice: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateZonePriceGQL extends Apollo.Mutation<CreateZonePriceMutation, CreateZonePriceMutationVariables> {
    document = CreateZonePriceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteZonePriceDocument = gql`
    mutation DeleteZonePrice($id: ID!) {
  deleteOneZonePrice(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteZonePriceGQL extends Apollo.Mutation<DeleteZonePriceMutation, DeleteZonePriceMutationVariables> {
    document = DeleteZonePriceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SetZonePriceRelationsDocument = gql`
    mutation SetZonePriceRelations($id: ID!, $services: [ID!]!, $fleets: [ID!]!) {
  setServicesOnZonePrice(input: {id: $id, relationIds: $services}) {
    id
  }
  setFleetsOnZonePrice(input: {id: $id, relationIds: $fleets}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetZonePriceRelationsGQL extends Apollo.Mutation<SetZonePriceRelationsMutation, SetZonePriceRelationsMutationVariables> {
    document = SetZonePriceRelationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ZonePricesListDocument = gql`
    query ZonePricesList($paging: OffsetPaging) {
  zonePrices(paging: $paging) {
    nodes {
      id
      name
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ZonePricesListGQL extends Apollo.Query<ZonePricesListQuery, ZonePricesListQueryVariables> {
    document = ZonePricesListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewAnnouncementDocument = gql`
    query ViewAnnouncement($id: ID!) {
  announcement(id: $id) {
    id
    title
    userType
    description
    url
    startAt
    expireAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewAnnouncementGQL extends Apollo.Query<ViewAnnouncementQuery, ViewAnnouncementQueryVariables> {
    document = ViewAnnouncementDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateAnnouncementDocument = gql`
    mutation CreateAnnouncement($input: AnnouncementInput!) {
  createOneAnnouncement(input: {announcement: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateAnnouncementGQL extends Apollo.Mutation<CreateAnnouncementMutation, CreateAnnouncementMutationVariables> {
    document = CreateAnnouncementDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateAnnouncementDocument = gql`
    mutation UpdateAnnouncement($id: ID!, $input: AnnouncementInput!) {
  updateOneAnnouncement(input: {id: $id, update: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateAnnouncementGQL extends Apollo.Mutation<UpdateAnnouncementMutation, UpdateAnnouncementMutationVariables> {
    document = UpdateAnnouncementDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteAnnouncementDocument = gql`
    mutation DeleteAnnouncement($id: ID!) {
  deleteOneAnnouncement(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteAnnouncementGQL extends Apollo.Mutation<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables> {
    document = DeleteAnnouncementDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AnnouncementsListDocument = gql`
    query AnnouncementsList($paging: OffsetPaging) {
  announcements(paging: $paging) {
    nodes {
      id
      title
      description
      startAt
      expireAt
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AnnouncementsListGQL extends Apollo.Query<AnnouncementsListQuery, AnnouncementsListQueryVariables> {
    document = AnnouncementsListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewCouponDocument = gql`
    query ViewCoupon($id: ID!) {
  coupon(id: $id) {
    id
    isEnabled
    code
    title
    description
    manyUsersCanUse
    manyTimesUserCanUse
    minimumCost
    maximumCost
    startAt
    expireAt
    discountPercent
    discountFlat
    creditGift
    isEnabled
    isFirstTravelOnly
    allowedServices {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewCouponGQL extends Apollo.Query<ViewCouponQuery, ViewCouponQueryVariables> {
    document = ViewCouponDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateCouponDocument = gql`
    mutation CreateCoupon($input: CouponInput!) {
  createOneCoupon(input: {coupon: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCouponGQL extends Apollo.Mutation<CreateCouponMutation, CreateCouponMutationVariables> {
    document = CreateCouponDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateCouponDocument = gql`
    mutation UpdateCoupon($id: ID!, $input: CouponInput!) {
  updateOneCoupon(input: {id: $id, update: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCouponGQL extends Apollo.Mutation<UpdateCouponMutation, UpdateCouponMutationVariables> {
    document = UpdateCouponDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteCouponDocument = gql`
    mutation DeleteCoupon($id: ID!) {
  deleteOneCoupon(input: {id: $id}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteCouponGQL extends Apollo.Mutation<DeleteCouponMutation, DeleteCouponMutationVariables> {
    document = DeleteCouponDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CouponListDocument = gql`
    query CouponList($paging: OffsetPaging) {
  coupons(paging: $paging) {
    nodes {
      id
      code
      title
      isEnabled
      description
      startAt
      expireAt
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CouponListGQL extends Apollo.Query<CouponListQuery, CouponListQueryVariables> {
    document = CouponListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GiftBatchListDocument = gql`
    query GiftBatchList($paging: OffsetPaging) {
  giftBatches(paging: $paging) {
    nodes {
      id
      name
      currency
      amount
      availableFrom
      expireAt
      totalUsed: giftCodesAggregate(filter: {usedAt: {isNot: null}}) {
        count {
          id
        }
      }
      totalUnused: giftCodesAggregate(filter: {usedAt: {is: null}}) {
        count {
          id
        }
      }
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GiftBatchListGQL extends Apollo.Query<GiftBatchListQuery, GiftBatchListQueryVariables> {
    document = GiftBatchListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateGiftBachDocument = gql`
    mutation CreateGiftBach($input: CreateGiftBatchInput!) {
  createGiftCardBatch(input: $input) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateGiftBachGQL extends Apollo.Mutation<CreateGiftBachMutation, CreateGiftBachMutationVariables> {
    document = CreateGiftBachDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewGiftBatchDocument = gql`
    query ViewGiftBatch($id: ID!) {
  giftBatch(id: $id) {
    id
    name
    amount
    currency
    availableFrom
    expireAt
    totalUsed: giftCodesAggregate(filter: {usedAt: {isNot: null}}) {
      count {
        id
      }
    }
    totalUnused: giftCodesAggregate(filter: {usedAt: {is: null}}) {
      count {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewGiftBatchGQL extends Apollo.Query<ViewGiftBatchQuery, ViewGiftBatchQueryVariables> {
    document = ViewGiftBatchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GiftCodeListDocument = gql`
    query GiftCodeList($giftBatchId: ID!, $paging: OffsetPaging!) {
  giftBatch(id: $giftBatchId) {
    giftCodes(paging: $paging) {
      nodes {
        id
        code
        usedAt
        riderTransaction {
          riderId
          rider {
            firstName
            lastName
          }
        }
        driverTransaction {
          driverId
          driver {
            firstName
            lastName
          }
        }
      }
      totalCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GiftCodeListGQL extends Apollo.Query<GiftCodeListQuery, GiftCodeListQueryVariables> {
    document = GiftCodeListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExportGiftBatchToCsvDocument = gql`
    mutation ExportGiftBatchToCSV($giftBatchId: ID!) {
  exportGiftCardBatch(batchId: $giftBatchId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExportGiftBatchToCsvGQL extends Apollo.Mutation<ExportGiftBatchToCsvMutation, ExportGiftBatchToCsvMutationVariables> {
    document = ExportGiftBatchToCsvDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RewardListDocument = gql`
    query RewardList($paging: OffsetPaging) {
  rewards(paging: $paging) {
    nodes {
      id
      title
      startDate
      endDate
      beneficiary
      event
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RewardListGQL extends Apollo.Query<RewardListQuery, RewardListQueryVariables> {
    document = RewardListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewRewardDocument = gql`
    query ViewReward($id: ID!) {
  reward(id: $id) {
    id
    title
    startDate
    endDate
    appType
    beneficiary
    event
    creditGift
    tripFeePercentGift
    creditCurrency
    conditionTripCountsLessThan
    conditionUserNumberFirstDigits
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewRewardGQL extends Apollo.Query<ViewRewardQuery, ViewRewardQueryVariables> {
    document = ViewRewardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateRewardDocument = gql`
    mutation CreateReward($input: CreateReward!) {
  createOneReward(input: {reward: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRewardGQL extends Apollo.Mutation<CreateRewardMutation, CreateRewardMutationVariables> {
    document = CreateRewardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateRewardDocument = gql`
    mutation UpdateReward($id: ID!, $input: UpdateReward!) {
  updateOneReward(input: {id: $id, update: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateRewardGQL extends Apollo.Mutation<UpdateRewardMutation, UpdateRewardMutationVariables> {
    document = UpdateRewardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePayoutSessionFieldsDocument = gql`
    query CreatePayoutSessionFields {
  supportedCurrencies
  payoutMethods {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePayoutSessionFieldsGQL extends Apollo.Query<CreatePayoutSessionFieldsQuery, CreatePayoutSessionFieldsQueryVariables> {
    document = CreatePayoutSessionFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePayoutSessionDocument = gql`
    mutation CreatePayoutSession($input: CreatePayoutSessionInput!) {
  createPayoutSession(input: $input) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePayoutSessionGQL extends Apollo.Mutation<CreatePayoutSessionMutation, CreatePayoutSessionMutationVariables> {
    document = CreatePayoutSessionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PayoutMethodsDocument = gql`
    query PayoutMethods {
  payoutMethods {
    id
    name
    description
    type
    media {
      id
      address
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PayoutMethodsGQL extends Apollo.Query<PayoutMethodsQuery, PayoutMethodsQueryVariables> {
    document = PayoutMethodsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewPayoutMethodDocument = gql`
    query ViewPayoutMethod($id: ID!) {
  payoutMethod(id: $id) {
    id
    name
    currency
    description
    type
    privateKey
    publicKey
    saltKey
    merchantId
    media {
      address
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewPayoutMethodGQL extends Apollo.Query<ViewPayoutMethodQuery, ViewPayoutMethodQueryVariables> {
    document = ViewPayoutMethodDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatePayoutMethodDocument = gql`
    mutation CreatePayoutMethod($input: CreatePayoutMethodInput!) {
  createOnePayoutMethod(input: {payoutMethod: $input}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePayoutMethodGQL extends Apollo.Mutation<CreatePayoutMethodMutation, CreatePayoutMethodMutationVariables> {
    document = CreatePayoutMethodDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePayoutMethodDocument = gql`
    mutation UpdatePayoutMethod($id: ID!, $update: CreatePayoutMethodInput!) {
  updateOnePayoutMethod(input: {id: $id, update: $update}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePayoutMethodGQL extends Apollo.Mutation<UpdatePayoutMethodMutation, UpdatePayoutMethodMutationVariables> {
    document = UpdatePayoutMethodDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PayoutsDocument = gql`
    query Payouts($sessionsPaging: OffsetPaging!, $currency: String) {
  supportedCurrencies
  payoutStatistics(currency: $currency) {
    pendingAmount
    lastPayoutAmount
    currency
    usersDefaultPayoutMethodStats {
      payoutMethod {
        id
        name
      }
      totalCount
    }
  }
  payoutSessions(paging: $sessionsPaging) {
    nodes {
      id
      createdAt
      processedAt
      status
      totalAmount
      currency
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PayoutsGQL extends Apollo.Query<PayoutsQuery, PayoutsQueryVariables> {
    document = PayoutsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewPayoutSessionDocument = gql`
    query ViewPayoutSession($id: ID!) {
  payoutSession(id: $id) {
    id
    currency
    createdAt
    processedAt
    totalAmount
    status
    payoutMethods {
      id
      type
      name
      description
      currency
      balance
      media {
        address
      }
    }
    driverTransactions {
      nodes {
        amount
        currency
        status
        createdAt
        driver {
          firstName
          lastName
          media {
            address
          }
        }
      }
    }
    amountToBePaidByPayoutMethod: driverTransactionsAggregate(
      filter: {status: {eq: Processing}, payoutSessionId: {eq: $id}}
    ) {
      groupBy {
        payoutMethodId
      }
      sum {
        amount
      }
    }
    unpaidAmount: driverTransactionsAggregate(filter: {status: {eq: Processing}}) {
      sum {
        amount
      }
    }
    paidAmount: driverTransactionsAggregate(filter: {status: {eq: Done}}) {
      sum {
        amount
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewPayoutSessionGQL extends Apollo.Query<ViewPayoutSessionQuery, ViewPayoutSessionQueryVariables> {
    document = ViewPayoutSessionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PayooutSessionTransactionsDocument = gql`
    query PayooutSessionTransactions($id: ID!, $paging: OffsetPaging!) {
  payoutSession(id: $id) {
    driverTransactions(paging: $paging) {
      nodes {
        id
        amount
        currency
        status
        createdAt
        driver {
          firstName
          lastName
          media {
            address
          }
          payoutAccounts(filter: {isDefault: {is: true}}) {
            nodes {
              id
              name
              type
              accountNumber
              routingNumber
              bankName
              branchName
              accountHolderName
              accountHolderCountry
              accountHolderCity
              accountHolderState
              accountHolderZip
              accountHolderAddress
              accountHolderDateOfBirth
              payoutMethod {
                name
                media {
                  address
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PayooutSessionTransactionsGQL extends Apollo.Query<PayooutSessionTransactionsQuery, PayooutSessionTransactionsQueryVariables> {
    document = PayooutSessionTransactionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExportToCsvDocument = gql`
    mutation ExportToCSV($input: ExportSessionToCsvInput!) {
  exportSessionToCsv(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExportToCsvGQL extends Apollo.Mutation<ExportToCsvMutation, ExportToCsvMutationVariables> {
    document = ExportToCsvDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RunAutoPayoutDocument = gql`
    mutation RunAutoPayout($input: RunAutoPayoutInput!) {
  runAutoPayout(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RunAutoPayoutGQL extends Apollo.Mutation<RunAutoPayoutMutation, RunAutoPayoutMutationVariables> {
    document = RunAutoPayoutDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveManualPayoutItemDocument = gql`
    mutation SaveManualPayoutItem($input: ManualPayoutInput!) {
  manualPayout(input: $input) {
    amount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveManualPayoutItemGQL extends Apollo.Mutation<SaveManualPayoutItemMutation, SaveManualPayoutItemMutationVariables> {
    document = SaveManualPayoutItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePayoutSessionDocument = gql`
    mutation UpdatePayoutSession($id: ID!, $update: UpdatePayoutSessionInput!) {
  updatePayoutSession(id: $id, input: $update) {
    id
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePayoutSessionGQL extends Apollo.Mutation<UpdatePayoutSessionMutation, UpdatePayoutSessionMutationVariables> {
    document = UpdatePayoutSessionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AvailableDriversForOrderDocument = gql`
    query AvailableDriversForOrder($center: PointInput!, $count: Int!) {
  getDriversLocationWithData(center: $center, count: $count) {
    id
    location {
      lat
      lng
    }
    mobileNumber
    firstName
    lastName
    lastUpdatedAt
    rating
    reviewCount
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AvailableDriversForOrderGQL extends Apollo.Query<AvailableDriversForOrderQuery, AvailableDriversForOrderQueryVariables> {
    document = AvailableDriversForOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DriverSearchDocument = gql`
    query DriverSearch($filter: String!) {
  drivers(
    filter: {or: [{mobileNumber: {like: $filter}}, {lastName: {like: $filter}}]}
  ) {
    nodes {
      id
      mobileNumber
      firstName
      lastName
      rating
      reviewCount
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DriverSearchGQL extends Apollo.Query<DriverSearchQuery, DriverSearchQueryVariables> {
    document = DriverSearchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AssignDriverToOrderDocument = gql`
    mutation AssignDriverToOrder($orderId: ID!, $driverId: ID!) {
  assignDriverToOrder(orderId: $orderId, driverId: $driverId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AssignDriverToOrderGQL extends Apollo.Mutation<AssignDriverToOrderMutation, AssignDriverToOrderMutationVariables> {
    document = AssignDriverToOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewOrderDocument = gql`
    query ViewOrder($id: ID!) {
  order(id: $id) {
    id
    createdOn
    expectedTimestamp
    costBest
    costAfterCoupon
    status
    currency
    distanceBest
    durationBest
    startTimestamp
    finishTimestamp
    addresses
    points {
      lat
      lng
    }
    service {
      name
    }
    driver {
      id
      firstName
      lastName
      mobileNumber
      registrationTimestamp
      status
      media {
        address
      }
    }
    rider {
      id
      firstName
      lastName
      mobileNumber
      registrationTimestamp
      status
      media {
        address
      }
    }
    complaints {
      id
      subject
      inscriptionTimestamp
      content
      requestedByDriver
    }
    conversations {
      sentAt
      sentByDriver
      status
      content
    }
    activities {
      createdAt
      type
    }
    coupon {
      title
      code
      expireAt
    }
    riderTransactions {
      action
      rechargeType
      deductType
      amount
      status
      currency
      refrenceNumber
      paymentGateway {
        title
      }
    }
    driverTransactions {
      action
      rechargeType
      deductType
      amount
      status
      currency
      refrenceNumber
    }
    providerTransactions {
      action
      rechargeType
      deductType
      amount
      currency
      refrenceNumber
    }
    fleetTransactions {
      action
      rechargeType
      deductType
      amount
      currency
      refrenceNumber
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewOrderGQL extends Apollo.Query<ViewOrderQuery, ViewOrderQueryVariables> {
    document = ViewOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrdersListDocument = gql`
    query OrdersList($paging: OffsetPaging, $filter: OrderFilter, $sorting: [OrderSort!]) {
  orders(paging: $paging, filter: $filter, sorting: $sorting) {
    nodes {
      id
      status
      createdOn
      expectedTimestamp
      costAfterCoupon
      currency
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OrdersListGQL extends Apollo.Query<OrdersListQuery, OrdersListQueryVariables> {
    document = OrdersListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateRiderDocument = gql`
    mutation CreateRider($input: RiderInput!) {
  createOneRider(input: {rider: $input}) {
    id
    firstName
    lastName
    mobileNumber
    gender
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRiderGQL extends Apollo.Mutation<CreateRiderMutation, CreateRiderMutationVariables> {
    document = CreateRiderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewRiderDocument = gql`
    query ViewRider($id: ID!) {
  rider(id: $id) {
    id
    status
    firstName
    lastName
    mobileNumber
    isResident
    idNumber
    media {
      address
    }
    mobileNumber
    registrationTimestamp
    email
    gender
    wallets(sorting: [{field: balance, direction: DESC}], paging: {limit: 1}) {
      nodes {
        balance
        currency
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewRiderGQL extends Apollo.Query<ViewRiderQuery, ViewRiderQueryVariables> {
    document = ViewRiderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RiderAddressesDocument = gql`
    query RiderAddresses($riderId: ID!, $paging: OffsetPaging) {
  riderAddresses(filter: {riderId: {eq: $riderId}}, paging: $paging) {
    nodes {
      title
      details
      location {
        lat
        lng
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RiderAddressesGQL extends Apollo.Query<RiderAddressesQuery, RiderAddressesQueryVariables> {
    document = RiderAddressesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RiderWalletDocument = gql`
    query RiderWallet($riderId: ID!, $paging: OffsetPaging, $filter: RiderTransactionFilter, $sorting: [RiderTransactionSort!]) {
  rider(id: $riderId) {
    wallets {
      nodes {
        balance
        currency
      }
    }
    transactions(paging: $paging, sorting: $sorting, filter: $filter) {
      nodes {
        action
        deductType
        status
        createdAt
        rechargeType
        amount
        currency
        refrenceNumber
        description
        paymentGatewayId
        operatorId
        requestId
      }
      totalCount
    }
  }
  regions {
    nodes {
      currency
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RiderWalletGQL extends Apollo.Query<RiderWalletQuery, RiderWalletQueryVariables> {
    document = RiderWalletDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RiderOrdersDocument = gql`
    query RiderOrders($riderId: ID!, $filter: OrderFilter, $paging: OffsetPaging, $sorting: [OrderSort!]) {
  rider(id: $riderId) {
    orders(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        id
        createdOn
        status
        distanceBest
        durationBest
        costBest
        costAfterCoupon
        currency
        addresses
        points {
          lat
          lng
        }
        expectedTimestamp
      }
      totalCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RiderOrdersGQL extends Apollo.Query<RiderOrdersQuery, RiderOrdersQueryVariables> {
    document = RiderOrdersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateRiderDocument = gql`
    mutation UpdateRider($id: ID!, $update: RiderInput!) {
  updateOneRider(input: {id: $id, update: $update}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateRiderGQL extends Apollo.Mutation<UpdateRiderMutation, UpdateRiderMutationVariables> {
    document = UpdateRiderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateRiderTransactionDocument = gql`
    mutation CreateRiderTransaction($input: RiderTransactionInput!) {
  createRiderTransaction(input: $input) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateRiderTransactionGQL extends Apollo.Mutation<CreateRiderTransactionMutation, CreateRiderTransactionMutationVariables> {
    document = CreateRiderTransactionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteRiderDocument = gql`
    mutation DeleteRider($id: ID!) {
  deleteOneRider(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteRiderGQL extends Apollo.Mutation<DeleteRiderMutation, DeleteRiderMutationVariables> {
    document = DeleteRiderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RidersListDocument = gql`
    query RidersList($filter: RiderFilter, $paging: OffsetPaging, $sorting: [RiderSort!]) {
  riders(filter: $filter, paging: $paging, sorting: $sorting) {
    nodes {
      id
      firstName
      lastName
      status
      gender
      mobileNumber
      registrationTimestamp
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RidersListGQL extends Apollo.Query<RidersListQuery, RidersListQueryVariables> {
    document = RidersListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SosListDocument = gql`
    query SOSList($paging: OffsetPaging) {
  distressSignals(paging: $paging) {
    nodes {
      id
      createdAt
      status
      location {
        lat
        lng
      }
    }
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SosListGQL extends Apollo.Query<SosListQuery, SosListQueryVariables> {
    document = SosListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewSosDocument = gql`
    query ViewSOS($id: ID!) {
  distressSignal(id: $id) {
    id
    createdAt
    status
    submittedByRider
    location {
      lat
      lng
    }
    activities {
      action
      createdAt
      note
      operator {
        id
        firstName
        lastName
      }
    }
    order {
      id
      status
      createdOn
      startTimestamp
      finishTimestamp
      expectedTimestamp
      costBest
      costAfterCoupon
      addresses
      currency
      rider {
        id
        mobileNumber
        status
        firstName
        lastName
        registrationTimestamp
      }
      driver {
        id
        mobileNumber
        status
        firstName
        lastName
        registrationTimestamp
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewSosGQL extends Apollo.Query<ViewSosQuery, ViewSosQueryVariables> {
    document = ViewSosDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateSosActivityDocument = gql`
    mutation CreateSOSActivity($activity: CreateSOSAcitivtyInput!) {
  createOneSOSActivity(input: {sOSActivity: $activity}) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateSosActivityGQL extends Apollo.Mutation<CreateSosActivityMutation, CreateSosActivityMutationVariables> {
    document = CreateSosActivityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CurrentConfigurationDocument = gql`
    query CurrentConfiguration {
  currentConfiguration {
    purchaseCode
    backendMapsAPIKey
    adminPanelAPIKey
    firebaseProjectPrivateKey
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CurrentConfigurationGQL extends Apollo.Query<CurrentConfigurationQuery, CurrentConfigurationQueryVariables> {
    document = CurrentConfigurationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdatePurchaseCodeDocument = gql`
    mutation UpdatePurchaseCode($code: String!, $email: String) {
  updatePurchaseCode(purchaseCode: $code, email: $email) {
    status
    message
    clients {
      ip
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdatePurchaseCodeGQL extends Apollo.Mutation<UpdatePurchaseCodeMutation, UpdatePurchaseCodeMutationVariables> {
    document = UpdatePurchaseCodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateMapsApiKeyDocument = gql`
    mutation UpdateMapsAPIKey($backend: String!, $adminPanel: String!) {
  updateMapsAPIKey(backend: $backend, adminPanel: $adminPanel) {
    status
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateMapsApiKeyGQL extends Apollo.Mutation<UpdateMapsApiKeyMutation, UpdateMapsApiKeyMutationVariables> {
    document = UpdateMapsApiKeyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateFirebaseDocument = gql`
    mutation UpdateFirebase($keyFileName: String!) {
  updateFirebase(keyFileName: $keyFileName) {
    status
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateFirebaseGQL extends Apollo.Mutation<UpdateFirebaseMutation, UpdateFirebaseMutationVariables> {
    document = UpdateFirebaseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DisableServerDocument = gql`
    mutation DisableServer($ip: String!) {
  disablePreviousServer(ip: $ip) {
    status
    message
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DisableServerGQL extends Apollo.Mutation<DisableServerMutation, DisableServerMutationVariables> {
    document = DisableServerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    query Login($username: String!, $password: String!) {
  login(userName: $username, password: $password) {
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }