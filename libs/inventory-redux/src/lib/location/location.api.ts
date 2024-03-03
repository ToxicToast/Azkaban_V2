import { createApi } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from '../dynamicBaseQuery';
import { Nullable, Optional } from '@azkaban/shared';
import { Location } from './location.interface';

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: dynamicBaseQuery,
  tagTypes: [
    'GetLocationList',
    'GetLocationSingle',
    'UpdateActiveLocation',
    'UpdateInactiveLocation',
  ],
  endpoints: (builder) => ({
    fetchLocationList: builder.query<Array<Location>, void>({
      query: () => `/location`,
      providesTags: ['GetLocationList'],
    }),
    fetchLocationSingle: builder.query<Nullable<Location>, string>({
      query: (id: string) => `/location/${id}`,
      providesTags: ['GetLocationSingle'],
    }),
    updateActiveLocation: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/location/${id}/activate`,
        method: 'PUT',
        body: {},
      }),
      invalidatesTags: ['GetLocationList'],
    }),
    updateInactiveLocation: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/location/${id}/deactivate`,
        method: 'PUT',
        body: {},
      }),
      invalidatesTags: ['GetLocationList'],
    }),
    updateLocation: builder.mutation<
      void,
      {
        id: string;
        parent_id?: Optional<Nullable<string>>;
        title?: Optional<string>;
        slug?: Optional<string>;
        freezer?: Optional<boolean>;
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
        freezer?: Optional<boolean>;
      }) => ({
        url: `/location/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['GetLocationList'],
    }),
    addLocation: builder.mutation<
      void,
      { parent_id: Nullable<string>; title: string; freezer: boolean }
    >({
      query: (data) => ({
        url: `/location/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['GetLocationList'],
    }),
    deleteLocation: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/location/${id}`,
        method: 'DELETE',
        body: {},
      }),
      invalidatesTags: ['GetLocationList'],
    }),
    restoreLocation: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/location/${id}/restore`,
        method: 'PUT',
        body: {},
      }),
      invalidatesTags: ['GetLocationList'],
    }),
  }),
});

export const {
  useLazyFetchLocationListQuery,
  useLazyFetchLocationSingleQuery,
  useUpdateActiveLocationMutation,
  useUpdateInactiveLocationMutation,
  useUpdateLocationMutation,
  useAddLocationMutation,
  useDeleteLocationMutation,
  useRestoreLocationMutation,
} = locationApi;
