import { useMemo } from 'react';
import { EditIcon, TrashIcon } from 'lucide-react';

interface Props {
  title: string;
  link: string;
  svg: JSX.Element;
  status: boolean;
}

export function CategoryCard(props: Props) {
  const getSvgColor = useMemo(() => {
    return props.status
      ? 'text-green-400 dark:text-green-200'
      : 'text-red-400 dark:text-red-800';
  }, [props.status]);

  return (
    <div className="bg-card text-card-foreground rounded shadow border">
      <div className="flex text-center p-5 flex flex-col h-full">
        <div className="flex-grow mb-1">
          <div
            className={`inline-flex justify-center items-center rounded-full bg-background dark:bg-[#0B1221] w-12 h-12 ${getSvgColor}`}
          >
            {props.svg}
          </div>
          <h3 className="text-slate-800 dark:text-slate-100 font-medium mb-1 mt-3">
            {props.title}
          </h3>
          <div className="font-light inline-flex items-center justify-end flex-grow gap-4 w-full">
            <EditIcon className="w-4 h-4 text-indigo-900 dark:text-indigo-400" />
            <TrashIcon className="w-4 h-4 text-red-900 dark:text-red-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
