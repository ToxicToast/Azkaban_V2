import { createApi } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from '../dynamicBaseQuery';
import { Category } from './category.interface';
import { Nullable, Optional } from '@azkaban/shared';

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
      query: () => `/api/inventory/category`,
      providesTags: ['GetCategoryList'],
    }),
    fetchCategorySingle: builder.query<Nullable<Category>, string>({
      query: (id: string) => `/api/inventory/category/${id}`,
      providesTags: ['GetCategorySingle'],
    }),
    updateActiveCategory: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/api/inventory/category/${id}/activate`,
        method: 'PUT',
        body: {},
      }),
      invalidatesTags: ['GetCategoryList'],
    }),
    updateInactiveCategory: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/api/inventory/category/${id}/deactivate`,
        method: 'PUT',
        body: {},
      }),
      invalidatesTags: ['GetCategoryList'],
    }),
    updateCategory: builder.mutation<
      void,
      {
        id: string;
        parent_id?: Optional<Nullable<string>>;
        title?: Optional<string>;
        slug?: Optional<string>;
      }
    >({
      query: ({
        id,
        ...data
      }: {
        id: string;
        parent_id?: Optional<Nullable<string>>;
        title?: Optional<string>;
        slug?: Optional<string>;
      }) => ({
        url: `/api/inventory/category/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['GetCategoryList'],
    }),
    addCategory: builder.mutation<
      void,
      { parent_id: Nullable<string>; title: string }
    >({
      query: (data) => ({
        url: `/api/inventory/category/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['GetCategoryList'],
    }),
    deleteCategory: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/api/inventory/category/${id}`,
        method: 'DELETE',
        body: {},
      }),
      invalidatesTags: ['GetCategoryList'],
    }),
    restoreCategory: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/api/inventory/category/${id}/restore`,
        method: 'PUT',
        body: {},
      }),
      invalidatesTags: ['GetCategoryList'],
    }),
  }),
});

export const {
  useLazyFetchCategoryListQuery,
  useLazyFetchCategorySingleQuery,
  useUpdateActiveCategoryMutation,
  useUpdateInactiveCategoryMutation,
  useUpdateCategoryMutation,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useRestoreCategoryMutation,
} = categoryApi;
