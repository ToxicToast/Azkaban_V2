import { Routes } from './routes';
import { useAzkabanAuth } from '@azkaban/ui-components';
import { memo, useEffect, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useCategoryState } from './core/category/category.hook';

function App() {
  const { hasInventoryGroup, isAuthenticated } = useAzkabanAuth();
  const { fetchCategoryList } = useCategoryState();

  const authenticated = useMemo(() => {
    return isAuthenticated && hasInventoryGroup();
  }, [hasInventoryGroup, isAuthenticated]);

  useEffect(() => {
    if (authenticated) {
      fetchCategoryList();
    }
  }, [authenticated, fetchCategoryList]);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Routes isAuthenticated={authenticated} />
    </ErrorBoundary>
  );
}

export default memo(App);
