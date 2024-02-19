import { configureStore } from '@reduxjs/toolkit';
import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import AuthReducer from './auth/auth.slice';
import CategoryReducer from './category/category.slice';
import { categoryApi } from './category/category.api';
import BrandReducer from './brand/brand.slice';
import { brandApi } from './brand/brand.api';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    category: CategoryReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    brand: BrandReducer,
    [brandApi.reducerPath]: brandApi.reducer,
  },
  middleware: (getDefaultMiddleware: GetDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categoryApi.middleware)
      .concat(brandApi.middleware),
  devTools: true,
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers(),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
