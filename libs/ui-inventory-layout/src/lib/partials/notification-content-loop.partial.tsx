interface Props {
  index: number;
  icon: string;
  title: string;
  description: string;
  date: string;
}

export function NotificationContentLoopPartial(props: Props) {
  return (
    <ul key={props.index}>
      <li className="border-b border-slate-200 dark:border-slate-700 last:border-0">
        <a
          href="#"
          className="block py-2 px-4 hover:bg-slate-50 dark:hover:bg-slate-700/20"
        >
          <span className="block text-sm mb-2">
            {props.icon}
            <span className="font-medium text-slate-800 dark:text-slate-100">
              {props.title}
            </span>
            {props.description}
          </span>
          <span className="block text-xs font-medium text-slate-400 dark:text-slate-500">
            {props.date}
          </span>
        </a>
      </li>
    </ul>
  );
}
