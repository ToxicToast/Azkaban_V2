import { Link } from 'react-router-dom';

interface Props {
  currentPath: string;
  shouldPath: string;
  title: string;
  icon: JSX.Element;
}

export function SidebarLinkPartial(props: Props) {
  return (
    <li
      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
        props.currentPath === props.shouldPath ? 'bg-slate-900' : ''
      }`}
    >
      <Link
        className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
          props.currentPath === props.shouldPath ? 'hover:text-slate-200' : ''
        }`}
        to={props.shouldPath}
      >
        <div className="flex items-center">
          {props.icon}
          <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
            {props.title}
          </span>
        </div>
      </Link>
    </li>
  );
}
