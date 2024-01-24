import { TableCell, TableFooter, TableRow } from '@azkaban/ui-components';

interface Props {
  length: number;
}

export function TableFooterEmptyPartial(props: Props) {
  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={props.length}>&nbsp;</TableCell>
      </TableRow>
    </TableFooter>
  );
}
