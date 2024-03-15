import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@azkaban/ui-components';
import { NotificationTriggerPartial } from './partials/notification-trigger.partial';
import { NotificationContentPartial } from './partials/notification-content.partial';

interface Props {
  dropdownOpen: boolean;
  setDropdownOpen: (value: boolean) => void;
  notifications: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
    date: string;
  }>;
  removeNotification: (id: string) => void;
}

export function Notifications(props: Props) {
  return (
    <Popover open={props.dropdownOpen} onOpenChange={props.setDropdownOpen}>
      <PopoverTrigger>
        <NotificationTriggerPartial
          dropdownOpen={props.dropdownOpen}
          setDropdownOpen={props.setDropdownOpen}
        />
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <NotificationContentPartial
          notifications={props.notifications}
          removeNotification={props.removeNotification}
        />
      </PopoverContent>
    </Popover>
  );
}
