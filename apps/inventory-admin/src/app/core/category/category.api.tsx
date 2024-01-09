import { createApi } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from '../dynamicBaseQuery';
import { Category } from './category.interface';
import { Nullable } from '@azkaban/shared';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: dynamicBaseQuery,
  tagTypes: [
    'GetCategoryList',
    'GetCategorySingle',
    'UpdateActiveCategory',
    'UpdateInactiveCategory',
  ],
  endpoints: (builder) => ({
    fetchCategoryList: builder.query<Array<Category>, void>({
      query: () => `/category`,
      providesTags: ['GetCategoryList'],
    }),
    fetchCategorySingle: builder.query<Nullable<Category>, string>({
      query: (id: string) => `/category/${id}`,
      providesTags: ['GetCategorySingle'],
    }),
    updateActiveCategory: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/category/${id}/activate`,
        method: 'PUT',
        body: {},
      }),
      invalidatesTags: ['GetCategoryList', 'GetCategorySingle'],
    }),
    updateInactiveCategory: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/category/${id}/deactivate`,
        method: 'PUT',
        body: {},
      }),
      invalidatesTags: ['GetCategoryList', 'GetCategorySingle'],
    }),
  }),
});

export const {
  useLazyFetchCategoryListQuery,
  useLazyFetchCategorySingleQuery,
  useUpdateActiveCategoryMutation,
  useUpdateInactiveCategoryMutation,
} = categoryApi;
