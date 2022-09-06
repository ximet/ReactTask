import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const forecaApi = createApi({
  reducerPath: 'forecaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/forecaApi',
    credentials: 'include'
  }),
  endpoints: builder => ({
    searchLocations: builder.query({
      query: (query: string) => `/location/search/${query}`
    }),
    getLocationInfo: builder.query({
      query: (query: string) => `/location/${query}`
    })
  })
});

export const { useSearchLocationsQuery, useGetLocationInfoQuery } = forecaApi;
