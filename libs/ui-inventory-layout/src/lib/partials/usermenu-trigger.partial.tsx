import { Avatar, AvatarFallback } from '@azkaban/ui-components';

interface Props {
  initials: string;
  username: string;
}

export function UserMenuTriggerPartial(props: Props) {
  return (
    <div className="inline-flex items-center gap-3">
      <div>
        <Avatar>
          <AvatarFallback className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80">
            {props.initials}
          </AvatarFallback>
        </Avatar>
      </div>
      <div>{props.username}</div>
    </div>
  );
}
