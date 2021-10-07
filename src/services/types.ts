import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type ApiRequest<TResponseData> = (
  config: AxiosRequestConfig,
) => Promise<AxiosResponse<TResponseData>>;
