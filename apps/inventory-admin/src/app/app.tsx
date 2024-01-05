import { Routes } from './routes';
import { useAzkabanAuth } from '@azkaban/ui-components';
import { memo, useMemo } from 'react';

function App() {
  const { getUserObject, hasInventoryGroup, isAuthenticated } =
    useAzkabanAuth();

  const authenticated = useMemo(() => {
    return isAuthenticated && hasInventoryGroup();
  }, [hasInventoryGroup, isAuthenticated]);

  return (
    <Routes
      isAuthenticated={authenticated}
      user={getUserObject() ?? undefined}
    />
  );
}

export default memo(App);
