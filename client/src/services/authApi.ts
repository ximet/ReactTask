import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Types
import { AuthorizationResponse, AuthorizationRequest, AuthenticationResponse } from '../types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    credentials: 'include'
  }),
  endpoints: builder => ({
    authorize: builder.mutation<AuthorizationResponse, AuthorizationRequest>({
      query: credentials => ({
        url: '/authorize',
        method: 'POST',
        body: credentials
      })
    }),
    authenticate: builder.mutation<AuthenticationResponse, null>({
      query: () => `/authenticate`
    })
  })
});

export const { useAuthorizeMutation, useAuthenticateMutation } = authApi;
