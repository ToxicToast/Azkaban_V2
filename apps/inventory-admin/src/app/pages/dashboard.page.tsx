import { WelcomeBanner } from '@azkaban/ui-components';
import { Nullable } from '@azkaban/shared';
import { User } from 'oidc-client-ts';

interface Props {
  user: Nullable<User>;
}

export function DashboardPage(props: Props) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner
              username={props.user?.profile?.preferred_username ?? ''}
            />
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <pre>{JSON.stringify(props.user?.profile, null, 4)}</pre>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
