export interface Url {
  auth: string;
  locationSearch: string;
  locationInfo: string;
  observations: string;
  current: string;
  nowCast: string;
  hourly: string;
  threeHourly: string;
  daily: string;
  airQuality: string;
}

export interface AxiosOptions {
  url: string;
  withCredentials: boolean;
  headers: {
    Authorization: string;
  };
}
