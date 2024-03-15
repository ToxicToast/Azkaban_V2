import { useCallback } from 'react';
import { shortDateFormater } from '@azkaban/ui-components';

interface Props {
  index: number;
  id: string;
  icon: string;
  title: string;
  description: string;
  date: string;
  removeNotification: (id: string) => void;
}

export function NotificationContentLoopPartial(props: Props) {
  const transformDate = useCallback(() => {
    const newDate = props.date ? new Date(props.date) : new Date();
    return shortDateFormater(newDate, 'de');
  }, [props.date]);

  return (
    <ul key={props.index}>
      <li
        className="border-b border-slate-200 dark:border-slate-700 last:border-0"
        onClick={() => {
          props.removeNotification(props.id);
        }}
      >
        <a
          href="#"
          className="block py-2 px-4 hover:bg-slate-50 dark:hover:bg-slate-700/20"
        >
          <span className="block text-sm mb-2">
            {props.icon}
            <span className="font-medium text-slate-800 dark:text-slate-100 ml-2">
              {props.title}
            </span>
            <br />
            <span className="text-xs text-slate-600 dark:text-slate-100 ml-2">
              {props.description}
            </span>
          </span>
          <span className="block text-xs font-medium text-slate-400 dark:text-slate-500">
            {transformDate()}
          </span>
        </a>
      </li>
    </ul>
  );
}
