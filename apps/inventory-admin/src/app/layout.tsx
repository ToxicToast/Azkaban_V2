import { memo, useMemo, useState } from 'react';
import { ThemeProvider, useAzkabanAuth } from '@azkaban/ui-components';
import App from './app';
import { Header } from '@azkaban/ui-inventory-layout';

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

  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <ThemeProvider>
      <Header
        searchModalOpen={searchModalOpen}
        sidebarOpen={sidebarOpen}
        dropdownOpen={dropdownOpen}
        setSearchModalOpen={(value: boolean) => {
          setSearchModalOpen(value);
        }}
        setSidebarOpen={(value: boolean) => {
          setSidebarOpen(value);
        }}
        setDropdownOpen={(value: boolean) => {
          setDropdownOpen(value);
        }}
      />
      <hr />
      <b>searchModalOpen</b>: {JSON.stringify(searchModalOpen)} <br />
      <b>sidebarOpen</b>: {JSON.stringify(sidebarOpen)} <br />
      <b>dropdownOpen</b>: {JSON.stringify(dropdownOpen)} <br />
      <hr />
      <App
        isAuthenticated={canAuthenticate}
        user={getUserObject() ?? undefined}
      />
    </ThemeProvider>
  );
}

export default memo(Layout);
