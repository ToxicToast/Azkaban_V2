import { TableRow, TableCell } from '../shadn/Table';

interface Props {
  length: number;
}

export function TableBodyEmpty(props: Props) {
  return (
    <TableRow>
      <TableCell colSpan={props.length} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  );
}
