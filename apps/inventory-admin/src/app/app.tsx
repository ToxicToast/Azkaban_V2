import { Routes } from './routes';
import { memo, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useAuthState, useCategoryState } from '@azkaban/inventory-redux';

function App() {
  const { fetchCategoryList } = useCategoryState();
  const { isAuth } = useAuthState();

  useEffect(() => {
    if (isAuth) {
      fetchCategoryList();
    }
  }, [isAuth, fetchCategoryList]);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Routes isAuthenticated={isAuth} />
    </ErrorBoundary>
  );
}

export default memo(App);
