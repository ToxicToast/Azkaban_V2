import { Either } from '@azkaban/shared';
import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

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
  const rawBaseQuery = fetchBaseQuery({
    baseUrl,
  });
  return rawBaseQuery(args, WebApi, extraOptions);
};
