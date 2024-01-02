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
        <ul key={index}>
          <li className="border-b border-slate-200 dark:border-slate-700 last:border-0">
            <a
              href="#"
              className="block py-2 px-4 hover:bg-slate-50 dark:hover:bg-slate-700/20"
            >
              <span className="block text-sm mb-2">
                {notification.icon}
                <span className="font-medium text-slate-800 dark:text-slate-100">
                  {notification.title}
                </span>
                {notification.description}
              </span>
              <span className="block text-xs font-medium text-slate-400 dark:text-slate-500">
                {notification.date}
              </span>
            </a>
          </li>
        </ul>
      ))}
    </>
  );
}
