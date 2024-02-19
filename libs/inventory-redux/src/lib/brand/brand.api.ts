import { createApi } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from '../dynamicBaseQuery';
import { Brand } from './brand.interface';
import { Nullable } from '@azkaban/shared';

export const brandApi = createApi({
  reducerPath: 'brandApi',
  baseQuery: dynamicBaseQuery,
  tagTypes: ['GetBrandList', 'GetBrandSingle'],
  endpoints: (builder) => ({
    fetchBrandList: builder.query<Array<Brand>, void>({
      query: () => `/company`,
      providesTags: ['GetBrandList'],
    }),
    fetchBrandSingle: builder.query<Nullable<Brand>, string>({
      query: (id: string) => `/company/${id}`,
      providesTags: ['GetBrandSingle'],
    }),
  }),
});

export const { useLazyFetchBrandListQuery, useLazyFetchBrandSingleQuery } =
  brandApi;
