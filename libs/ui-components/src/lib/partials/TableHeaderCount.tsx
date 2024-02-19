import { TableHead, TableHeader, TableRow } from '../shadn/Table';

interface Props {
  title: string;
  length: number;
  count: number;
}

export function TableHeaderCount(props: Props) {
  return (
    <TableHeader>
      <TableRow className="w-full bg-white dark:bg-slate-800 rounded-sm border broder-slate-200 dark:border-slate-700">
        <TableHead colSpan={props.length}>
          <div className="flex">
            <h2 className="text-slate-800 dark:text-slate-100 font-bold px-2 py-4">
              {props.title}
            </h2>
            <h2 className="text-slate-400 dark:text-slate-500 font-bold px-2 py-4">
              {props.count}
            </h2>
          </div>
        </TableHead>
      </TableRow>
    </TableHeader>
  );
}
