import { TableCell, TableRow } from '@azkaban/ui-components';

interface Props {
  length: number;
}

export function TableBodyEmptyPartial(props: Props) {
  return (
    <TableRow>
      <TableCell colSpan={props.length} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  );
}
