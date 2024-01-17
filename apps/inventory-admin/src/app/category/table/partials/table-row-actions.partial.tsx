import { Button, Show } from '@azkaban/ui-components';
import { PencilIcon, ArchiveRestoreIcon, TrashIcon } from 'lucide-react';

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
    <Show show={props.isAdmin}>
      <div className="flex gap-2">
        <Button
          variant={props.isDeleted ? 'ghost' : 'outline'}
          onClick={() => props.onEdit(props.id)}
          disabled={props.isDeleted}
        >
          <PencilIcon className="h-4 w-4" />
        </Button>
        <Button
          variant={props.isDeleted ? 'ghost' : 'outline'}
          onClick={() => props.onDelete(props.id)}
          disabled={props.isDeleted}
        >
          <TrashIcon className="h-4 w-4" />
        </Button>
        <Button
          variant={!props.isDeleted ? 'ghost' : 'outline'}
          onClick={() => props.onRestore(props.id)}
          disabled={!props.isDeleted}
        >
          <ArchiveRestoreIcon className="h-4 w-4" />
        </Button>
      </div>
    </Show>
  );
}
