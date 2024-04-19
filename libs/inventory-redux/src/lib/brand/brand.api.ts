import { createApi } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from '../dynamicBaseQuery';
import { Brand } from './brand.interface';
import { Nullable, Optional } from '@azkaban/shared';

export const brandApi = createApi({
  reducerPath: 'brandApi',
  baseQuery: dynamicBaseQuery,
  tagTypes: ['GetBrandList', 'GetBrandSingle'],
  endpoints: (builder) => ({
    fetchBrandList: builder.query<Array<Brand>, void>({
      query: () => `/api/inventory/company`,
      providesTags: ['GetBrandList'],
    }),
    fetchBrandSingle: builder.query<Nullable<Brand>, string>({
      query: (id: string) => `/api/inventory/company/${id}`,
      providesTags: ['GetBrandSingle'],
    }),
    updateActiveBrand: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/api/inventory/company/${id}/activate`,
        method: 'PUT',
        body: {},
      }),
      invalidatesTags: ['GetBrandList'],
    }),
    updateInactiveBrand: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/api/inventory/company/${id}/deactivate`,
        method: 'PUT',
        body: {},
      }),
      invalidatesTags: ['GetBrandList'],
    }),
    updateBrand: builder.mutation<
      void,
      {
        id: string;
        title?: Optional<string>;
        slug?: Optional<string>;
      }
    >({
      query: (id, ...data) => ({
        url: `/api/inventory/company/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['GetBrandList'],
    }),
    addBrand: builder.mutation<void, { title: string }>({
      query: (data) => ({
        url: `/api/inventory/company`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['GetBrandList'],
    }),
    deleteBrand: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/api/inventory/company/${id}`,
        method: 'DELETE',
        body: {},
      }),
      invalidatesTags: ['GetBrandList'],
    }),
    restoreBrand: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/api/inventory/company/${id}/restore`,
        method: 'PUT',
        body: {},
      }),
      invalidatesTags: ['GetBrandList'],
    }),
  }),
});

export const {
  useLazyFetchBrandListQuery,
  useLazyFetchBrandSingleQuery,
  useUpdateActiveBrandMutation,
  useUpdateInactiveBrandMutation,
  useUpdateBrandMutation,
  useAddBrandMutation,
  useDeleteBrandMutation,
  useRestoreBrandMutation,
} = brandApi;
