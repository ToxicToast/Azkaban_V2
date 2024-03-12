import { Show } from './Show';
import { Button } from '../shadn/Button';
import {
  ArchiveRestoreIcon,
  PencilIcon,
  TrashIcon,
  XCircleIcon,
} from 'lucide-react';

interface Props {
  id: string;
  isDeleted: boolean;
  isAdmin: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onRestore: (id: string) => void;
  onForceDelete: (id: string) => void;
}

export function TableActions(props: Props) {
  return (
    <Show show={props.isAdmin}>
      <div className="flex gap-2">
        <Show show={!props.isDeleted}>
          <Button
            variant={props.isDeleted ? 'ghost' : 'secondary'}
            onClick={() => props.onEdit(props.id)}
            disabled={props.isDeleted}
          >
            <PencilIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="destructive"
            onClick={() => props.onDelete(props.id)}
          >
            <TrashIcon className="h-4 w-4" />
          </Button>
        </Show>
        <Show show={props.isDeleted}>
          <Button variant="default" onClick={() => props.onRestore(props.id)}>
            <ArchiveRestoreIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="destructive"
            onClick={() => props.onForceDelete(props.id)}
          >
            <XCircleIcon className="h-4 w-4" />
          </Button>
        </Show>
      </div>
    </Show>
  );
}
