import { PropsWithChildren } from 'react';
import { TableRow } from '@azkaban/ui-components';

interface Props {
  isSelected: boolean;
}

export function CategoryTableBodyRowPartial(props: PropsWithChildren<Props>) {
  return <TableRow data-state={props.isSelected}>{props.children}</TableRow>;
}
