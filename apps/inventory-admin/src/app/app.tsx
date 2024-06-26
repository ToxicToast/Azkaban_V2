import { Routes } from './routes';
import { memo, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {
  useAuthState,
  useBrandState,
  useCategoryState,
  useLocationState,
} from '@azkaban/inventory-redux';

function App() {
  const { fetchCategoryList } = useCategoryState();
  const { fetchBrandList } = useBrandState();
  const { fetchLocationList } = useLocationState();
  const { isAuth } = useAuthState();

  useEffect(() => {
    if (isAuth) {
      fetchCategoryList();
      fetchBrandList();
      fetchLocationList();
    }
  }, [isAuth, fetchCategoryList, fetchBrandList, fetchLocationList]);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Routes isAuthenticated={isAuth} />
    </ErrorBoundary>
  );
}

export default memo(App);
