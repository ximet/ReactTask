import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app/store';

export const forecaApi = createApi({
  reducerPath: 'forecaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pfa.foreca.com/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).auth;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: builder => ({
    searchLocations: builder.query({
      query: (query: string) => `/location/search/${query}`
    })
  })
});

export const { useSearchLocationsQuery } = forecaApi;
