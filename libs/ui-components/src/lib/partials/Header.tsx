import { useMemo } from 'react';
import { LoggedUser } from './LoggedUser';
import { Nullable } from '@azkaban/shared';
import { GuestUser } from './GuestUser';

interface Props {
  appName: string;
  isAuthenticated: boolean;
  username: Nullable<string>;
  avatarUrl: Nullable<string>;
  givenName: Nullable<string>;
  initials: Nullable<string>;
  signIn: () => void;
  signOut: () => void;
}

export function Header(props: Props) {
  const showAuthComponent = useMemo(() => {
    if (props.isAuthenticated) {
      return (
        <LoggedUser
          avatarUrl={props.avatarUrl}
          givenName={props.givenName}
          username={props.username}
          initials={props.initials}
          signOut={props.signOut}
        />
      );
    } else {
      return <GuestUser />;
    }
  }, [
    props.avatarUrl,
    props.givenName,
    props.initials,
    props.isAuthenticated,
    props.signOut,
    props.username,
  ]);

  return (
    <header className="flex h-16 w-full items-center justify-between border-b px-4">
      <div className="flex items-center gap-x-2">
        <div>LOGO</div>
        <span className="text-sm font-medium">{props.appName}</span>
      </div>
      {showAuthComponent}
    </header>
  );
}
