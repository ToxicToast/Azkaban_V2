import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@azkaban/ui-components';
import { UserMenuTriggerPartial } from './partials/usermenu-trigger.partial';
import { UserMenuContentPartial } from './partials/usermenu.content.partial';
import { useCallback } from 'react';

interface Props {
  username: string;
  initials: string;
  givenName: string;
  isAdministrator: boolean;
  usermenuOpen: boolean;
  setUsermenuOpen: (value: boolean) => void;
  signOut: () => void;
}

export function UserMenu(props: Props) {
  const onOpenChange = useCallback(
    (value: boolean) => {
      props.setUsermenuOpen(value);
    },
    [props]
  );

  return (
    <Popover
      open={props.usermenuOpen}
      onOpenChange={(value) => onOpenChange(value)}
    >
      <PopoverTrigger>
        <UserMenuTriggerPartial
          initials={props.initials}
          username={props.username}
        />
      </PopoverTrigger>

      <PopoverContent className="w-60">
        <UserMenuContentPartial
          givenName={props.givenName}
          isAdministrator={props.isAdministrator}
          signOut={props.signOut}
        />
      </PopoverContent>
    </Popover>
  );
}
