import { TableBodyEmpty } from '@azkaban/ui-components';

interface Props {
  length: number;
}

export function TableBodyEmptyPartial(props: Props) {
  return <TableBodyEmpty length={props.length} />;
}
