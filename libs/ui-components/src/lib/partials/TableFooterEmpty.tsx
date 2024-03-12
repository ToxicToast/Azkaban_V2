import { TableCell, TableFooter, TableRow } from '../shadn/Table';

interface Props {
  length: number;
}

export function TableFooterEmpty(props: Props) {
  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={props.length}>&nbsp;</TableCell>
      </TableRow>
    </TableFooter>
  );
}
