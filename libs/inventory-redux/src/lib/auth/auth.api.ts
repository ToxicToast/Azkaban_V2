import { createApi } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from '../dynamicBaseQuery';
import { Session } from '@supabase/auth-js/src/lib/types';
import { Nullable } from '@azkaban/shared';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      Nullable<Session>,
      { email: string; password: string }
    >({
      query: (data) => ({
        url: '/api/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    registerUser: builder.mutation<
      Nullable<Session>,
      { email: string; password: string }
    >({
      query: (data) => ({
        url: '/api/auth/register',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
