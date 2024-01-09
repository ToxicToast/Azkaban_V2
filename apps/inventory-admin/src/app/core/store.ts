import { configureStore } from '@reduxjs/toolkit';
import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import CategoryReducer from './category/category.slice';
import { categoryApi } from './category/category.api';

export const store = configureStore({
  reducer: {
    category: CategoryReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware: GetDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
  devTools: true,
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers(),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
