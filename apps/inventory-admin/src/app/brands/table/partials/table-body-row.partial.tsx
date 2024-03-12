import { PropsWithChildren } from 'react';
import { TableBodyRow } from '@azkaban/ui-components';

interface Props {
  isSelected: boolean;
}

export function BrandTableBodyRowPartial(props: PropsWithChildren<Props>) {
  return (
    <TableBodyRow isSelected={props.isSelected}>{props.children}</TableBodyRow>
  );
}
