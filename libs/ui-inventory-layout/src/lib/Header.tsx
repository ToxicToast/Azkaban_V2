import { HeaderLeftSidePartial } from './partials/header-left-side.partial';
import { HeaderRightSidePartial } from './partials/header-right-side.partial';
import { Notifications } from './Notifications';
import { ThemeToggle } from './ThemeToggle';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  searchModalOpen: boolean;
  setSearchModalOpen: (value: boolean) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (value: boolean) => void;
}

export function Header(props: Props) {
  // dark:bg-[#182235]
  return (
    <header className="sticky top-0 bg-secondary dark:bg-secondary border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <HeaderLeftSidePartial
            sidebarOpen={props.sidebarOpen}
            setSidebarOpen={props.setSidebarOpen}
          />
          <HeaderRightSidePartial
            searchModalOpen={props.searchModalOpen}
            setSearchModalOpen={props.setSearchModalOpen}
            dropdownOpen={props.dropdownOpen}
            setDropdownOpen={props.setDropdownOpen}
          >
            <Notifications
              dropdownOpen={props.dropdownOpen}
              setDropdownOpen={props.setDropdownOpen}
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
            &nbsp; UserMenu
          </HeaderRightSidePartial>
        </div>
      </div>
    </header>
  );
}
