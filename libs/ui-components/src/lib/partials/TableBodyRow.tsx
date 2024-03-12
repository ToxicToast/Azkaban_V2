import { PropsWithChildren } from 'react';
import { TableRow } from '../shadn/Table';

interface Props {
  isSelected: boolean;
}

export function TableBodyRow(props: PropsWithChildren<Props>) {
  return <TableRow data-state={props.isSelected}>{props.children}</TableRow>;
}
