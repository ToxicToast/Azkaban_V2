import { useMemo } from 'react';
import { ExitIcon, AvatarIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

interface Props {
  givenName: string;
  isAdministrator: boolean;
  signOut: () => void;
}

export function UserMenuContentPartial(props: Props) {
  const role = useMemo(() => {
    return props.isAdministrator ? 'Administrator' : 'User';
  }, [props.isAdministrator]);

  return (
    <>
      <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase pt-1.5 pb-3 px-4">
        {props.givenName} <br />
        {role}
      </div>

      <ul className="pt-1.5 pb-3 px-4">
        <li className="border-b border-slate-200 dark:border-slate-700 last:border-0 mb-4">
          <Link to="settings">
            <span className="flex text-sm mb-4">
              <AvatarIcon />
              <span className="pl-2 font-medium text-slate-800 hover:text-slate-950 dark:text-slate-100 dark:hover:text-slate-300">
                Settings
              </span>
            </span>
          </Link>
        </li>
        <li className="border-b border-slate-200 dark:border-slate-700 last:border-0 mb-4 items-center">
          <a onClick={() => props.signOut()}>
            <span className="flex text-sm mb-4">
              <ExitIcon />
              <span className="pl-2 font-medium text-slate-800 hover:text-slate-950 dark:text-slate-100 dark:hover:text-slate-300">
                Sign Out
              </span>
            </span>
          </a>
        </li>
      </ul>
    </>
  );
}
