import { memo, useMemo } from 'react';
import { Header, ThemeProvider, useAzkabanAuth } from '@azkaban/ui-components';
import App from './app';

function Layout() {
  const {
    signIn,
    signOut,
    getUserObject,
    getUserName,
    getGivenName,
    getUserInitials,
    hasInventoryGroup,
    isAuthenticated,
  } = useAzkabanAuth();

  const canAuthenticate = useMemo(() => {
    return isAuthenticated && hasInventoryGroup();
  }, [hasInventoryGroup, isAuthenticated]);

  return (
    <ThemeProvider>
      <div />
      <Header
        key="Inventory-Header"
        appName="Azkaban - Inventory Admin"
        isAuthenticated={canAuthenticate}
        username={getUserName()}
        avatarUrl={null}
        givenName={getGivenName()}
        initials={getUserInitials()}
        signIn={signIn}
        signOut={signOut}
      />
      <App
        key="Inventory-App"
        isAuthenticated={canAuthenticate}
        user={getUserObject() ?? undefined}
      />
    </ThemeProvider>
  );
}

export default memo(Layout);
