import { HeaderLeftSidePartial } from './partials/header-left-side.partial';
import { HeaderRightSidePartial } from './partials/header-right-side.partial';
import { Notifications } from './Notifications';
import { ThemeToggle } from './ThemeToggle';
import { UserMenu } from './UserMenu';
import { useState } from 'react';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  username: string;
  initials: string;
  givenName: string;
  isAdministrator: boolean;
  signOut: () => void;
}

export function Header(props: Props) {
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [usermenuOpen, setUsermenuOpen] = useState<boolean>(false);

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
              notifications={[
                {
                  icon: '📣',
                  title: 'Edit your information in a swipe',
                  description:
                    'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
                  date: 'Feb 12, 2021',
                },
              ]}
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
