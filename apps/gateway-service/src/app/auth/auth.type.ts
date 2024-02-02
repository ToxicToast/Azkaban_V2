export interface DeviceCode {
  device_code: string;
  verification_url: string;
  verification_uri_complete: string;
  user_code: string;
  expires_in: number;
  interval: number;
}

export interface Verification {
  verification_uri_complete: string;
  device_code: string;
  user_code: string;
}
