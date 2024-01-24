import { NotificationContentLoopPartial } from './notification-content-loop.partial';

interface Props {
  notifications: Array<{
    icon: string;
    title: string;
    description: string;
    date: string;
  }>;
}

export function NotificationContentPartial(props: Props) {
  return (
    <>
      <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase pt-1.5 pb-3 px-4">
        Notifications ({props.notifications.length})
      </div>
      {props.notifications.map((notification, index) => (
        <NotificationContentLoopPartial
          key={index}
          index={index}
          icon={notification.icon}
          title={notification.title}
          description={notification.description}
          date={notification.date}
        />
      ))}
    </>
  );
}
