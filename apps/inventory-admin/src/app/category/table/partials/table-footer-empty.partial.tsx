import { TableFooterEmpty } from '@azkaban/ui-components';

interface Props {
  length: number;
}

export function TableFooterEmptyPartial(props: Props) {
  return <TableFooterEmpty length={props.length} />;
}
