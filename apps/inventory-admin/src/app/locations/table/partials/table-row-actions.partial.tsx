import { TableActions } from '@azkaban/ui-components';

interface Props {
  id: string;
  isDeleted: boolean;
  isAdmin: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onRestore: (id: string) => void;
}

export function TableRowActionsPartial(props: Props) {
  return (
    <TableActions
      id={props.id}
      isDeleted={props.isDeleted}
      isAdmin={props.isAdmin}
      onEdit={props.onEdit}
      onDelete={props.onDelete}
      onRestore={props.onRestore}
      onForceDelete={console.error}
    />
  );
}
