import { Header, Sidebar } from '@azkaban/ui-inventory-layout';
import { memo, useCallback, useEffect, useState } from 'react';
import { NotificationHelper } from '@azkaban/ui-components';
import { Outlet, useLocation } from 'react-router-dom';
import { useAuthState, useNotificationState } from '@azkaban/inventory-redux';
import { Toaster } from '../toaster';

function AuthenticatedLayout() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const location = useLocation();
  const { username, initials, isAdmin, name, logoutUser } = useAuthState();
  const { notificationData, removeNotification } = useNotificationState();

  const onSignOut = useCallback(() => {
    sessionStorage.clear();
    logoutUser();
  }, [logoutUser]);

  const getNotificationData = useCallback(() => {
    return NotificationHelper(notificationData);
  }, [notificationData]);

  useEffect(() => {
    if (
      window.location.search.includes('code=') &&
      window.location.search.includes('state=')
    ) {
      window.location.href = window.location.origin;
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
          path={location.pathname}
          apiVersion="v0.0.0"
        />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            username={username}
            initials={initials}
            givenName={name}
            isAdministrator={isAdmin}
            signOut={onSignOut}
            notifications={getNotificationData()}
            removeNotification={(id: string) => removeNotification(id)}
          />
          <main>
            <Outlet />
          </main>
          <Toaster key="Toaster" />
        </div>
      </div>
    </div>
  );
}

export default memo(AuthenticatedLayout);
