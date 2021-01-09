export interface UserInfo {
  accountBranch?: AccountBranch;
  callBackParam?: any;
  cartLineItems?: number;
  code?: any;
  contactAddress?: ContactAddress;
  contactPhoneNumber?: string;
  declineNotificationEmail?: boolean;
  deliveryTrackingSettings?: number;
  firstName?: string;
  internalUser?: boolean;
  lastName?: string;
  lastSelectedAccount?: {};
  messageCode?: any;
  messages?: any;
  mobilePhoneNumber?: string;
  officePhoneNumber?: string;
  profileId?: string;
  result?: any;
  rewardsEligible?: boolean;
  subscribeEmailType?: {};
  success?: boolean;
  title?: string;
  userAccounts?: any[];
  userType?: string;
}

export interface AccountBranch {
  address?: AccountBranchAddress;
  branchName?: string;
  branchNumber?: string;
  branchPhone?: string;
  branchRegionId?: string;
  company?: string;
  companyName?: string;
  division?: string;
  divisionName?: string;
  market?: any;
}

export interface AccountBranchAddress {
  address1?: string;
  address2?: string;
  address3?: string;
  city?: string;
  country?: string;
  postalCode?: string;
  state?: string;
}

export interface ContactAddress {
  address1?: string;
  address2?: string;
  city?: string;
  country?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  postalCode?: string;
  state?: string;
}

export interface DeliveryTrackingSettings {
  allOrders?: any[];
  phone?: string;
  myOrders?: any[];
  email?: string;
}

export interface SelectedAccount {
  accountEnabled?: boolean;
  accountLegacyId?: string;
  accountViewPrices?: boolean;
  addressCustomSteel?: boolean;
  accountName?: string;
}

export interface SubscriberEmailType {
  subscriberAccount?: boolean;
  subscriberOrder?: boolean;
  subscriberQuote?: boolean;
}
