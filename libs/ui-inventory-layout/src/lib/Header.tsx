import { HeaderLeftSidePartial } from './partials/header-left-side.partial';
import { HeaderRightSidePartial } from './partials/header-right-side.partial';
import { Notifications } from './Notifications';
import { ThemeToggle } from './ThemeToggle';
import { UserMenu } from './UserMenu';
import { useCallback, useState } from 'react';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  username: string;
  initials: string;
  givenName: string;
  isAdministrator: boolean;
  signOut: () => void;
  notifications?: Array<{
    id: string;
    title: string;
    description: string;
    date: string;
  }>;
  removeNotification: (id: string) => void;
}

export function Header(props: Props) {
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [usermenuOpen, setUsermenuOpen] = useState<boolean>(false);

  const getNotifications = useCallback(() => {
    const notifications = props.notifications?.map((notification) => {
      return {
        id: notification.id,
        icon: '📣',
        title: notification.title,
        description: notification.description,
        date: notification.date,
      };
    });

    return notifications ?? [];
  }, [props.notifications]);

  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <HeaderLeftSidePartial
            sidebarOpen={props.sidebarOpen}
            setSidebarOpen={props.setSidebarOpen}
          />
          <HeaderRightSidePartial
            searchModalOpen={searchModalOpen}
            setSearchModalOpen={setSearchModalOpen}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          >
            <Notifications
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
              notifications={getNotifications()}
              removeNotification={props.removeNotification}
            />
            <ThemeToggle />
            <hr className="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" />
            <UserMenu
              initials={props.initials}
              username={props.username}
              givenName={props.givenName}
              isAdministrator={props.isAdministrator}
              usermenuOpen={usermenuOpen}
              setUsermenuOpen={setUsermenuOpen}
              signOut={props.signOut}
            />
          </HeaderRightSidePartial>
        </div>
      </div>
    </header>
  );
}
