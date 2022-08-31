import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';

// Types
import { LoginResponse, LoginRequest } from '../types';

export const forecaApi = createApi({
  reducerPath: 'forecaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://corsproxy.io/?https://pfa.foreca.com/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: credentials => ({
        url: '/authorize/token',
        method: 'POST',
        body: credentials
      })
    }),
    searchLocations: builder.query({
      query: (query: string) => `/location/search/${query}`
    })
  })
});

export const { useSearchLocationsQuery, useLoginMutation } = forecaApi;
