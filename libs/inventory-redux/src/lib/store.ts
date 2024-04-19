import { configureStore } from '@reduxjs/toolkit';
import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import AuthReducer from './auth/auth.slice';
import { authApi } from './auth/auth.api';
import CategoryReducer from './category/category.slice';
import { categoryApi } from './category/category.api';
import BrandReducer from './brand/brand.slice';
import { brandApi } from './brand/brand.api';
import LocationReducer from './location/location.slice';
import { locationApi } from './location/location.api';
import NotificationReducer from './notification/notification.slice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    category: CategoryReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    brand: BrandReducer,
    [brandApi.reducerPath]: brandApi.reducer,
    location: LocationReducer,
    [locationApi.reducerPath]: locationApi.reducer,
    notification: NotificationReducer,
  },
  middleware: (getDefaultMiddleware: GetDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoryApi.middleware)
      .concat(brandApi.middleware)
      .concat(locationApi.middleware)
      .concat(authApi.middleware),
  devTools: true,
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers(),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
