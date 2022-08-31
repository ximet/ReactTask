import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const forecaApi = createApi({
  reducerPath: 'forecaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pfa.foreca.com/api/v1/',
    prepareHeaders: headers => {
      headers.set('authorization', `Bearer ${process.env.API_KEY}`);
      return headers;
    }
  }),
  endpoints: builder => ({
    searchLocations: builder.query({
      query: (query: string) => `location/search/${query}`
    })
  })
});

export const { useSearchLocationsQuery } = forecaApi;
