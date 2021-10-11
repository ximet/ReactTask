import { endpoints } from 'configs';
import { TokenData } from 'types/entities';
import { ApiRequest } from '../types';
import http from '../http';

export const login: ApiRequest<TokenData> = ({ data }) =>
  http({
    method: 'post',
    url: endpoints.authorizeToken,
    data,
  });
