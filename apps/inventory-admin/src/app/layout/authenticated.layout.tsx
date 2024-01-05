import { Header, Sidebar } from '@azkaban/ui-inventory-layout';
import { memo, PropsWithChildren, useMemo, useState } from 'react';
import { useAzkabanAuth } from '@azkaban/ui-components';
import { useLocation } from 'react-router-dom';

function AuthenticatedLayout(props: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const location = useLocation();

  const {
    getUserName,
    getUserInitials,
    getGivenName,
    hasInventoryAdminGroup,
    signOut,
  } = useAzkabanAuth();

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
          path={location.pathname}
        />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            username={getUserName() ?? undefined}
            initials={getUserInitials() ?? undefined}
            givenName={getGivenName() ?? undefined}
            isAdministrator={hasInventoryAdminGroup()}
            signOut={signOut}
          />
          <main>{props.children}</main>
        </div>
      </div>
    </div>
  );
}

export default memo(AuthenticatedLayout);
