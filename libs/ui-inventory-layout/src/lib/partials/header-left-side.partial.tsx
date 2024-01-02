import { Button } from '@azkaban/ui-components';
import { useCallback } from 'react';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

export function HeaderLeftSidePartial(props: Props) {
  const onSidebarToggle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      props.setSidebarOpen(!props.sidebarOpen);
    },
    [props]
  );

  return (
    <div className="flex">
      <button
        className="text-slate-500 hover:text-slate-600 lg:hidden"
        onClick={(e) => onSidebarToggle(e)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="5" width="16" height="2" />
          <rect x="4" y="11" width="16" height="2" />
          <rect x="4" y="17" width="16" height="2" />
        </svg>
      </button>
    </div>
  );
}
