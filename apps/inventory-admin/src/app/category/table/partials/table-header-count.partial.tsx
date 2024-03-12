import { TableHeaderCount } from '@azkaban/ui-components';

interface Props {
  length: number;
  count: number;
}

export function TableHeaderCountPartial(props: Props) {
  return (
    <TableHeaderCount
      title="Categories"
      count={props.count}
      length={props.length}
    />
  );
}
