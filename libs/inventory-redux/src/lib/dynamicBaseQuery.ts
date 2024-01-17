import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { RootState } from './store';
import { Either } from '@azkaban/shared';

export const dynamicBaseQuery: BaseQueryFn<
  Either<string, FetchArgs>,
  unknown,
  FetchBaseQueryError
> = async (
  args: Either<string, FetchArgs>,
  WebApi: BaseQueryApi,
  extraOptions: object
) => {
  const baseUrl = 'https://api.toxictoast.de/api/inventory/';
  // const baseUrl = 'http://localhost:3000/api/inventory/';
  const rawBaseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (
      headers: Headers,
      pick: Pick<BaseQueryApi, 'getState'>
    ) => {
      const token = (pick.getState() as RootState).auth.token ?? null;
      if (token !== null) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });
  return rawBaseQuery(args, WebApi, extraOptions);
};
