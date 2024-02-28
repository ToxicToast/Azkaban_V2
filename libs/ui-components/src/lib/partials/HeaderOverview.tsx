import { Button } from '../shadn';
import { PlusIcon } from 'lucide-react';

interface Props {
  title: string;
  buttonTitle: string;
  openModal: () => void;
  isAdmin: boolean;
}

export function HeaderOverview(props: Props) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
        <h1 className="text-slate-800 dark:text-slate-100 font-bold ctbo0 cvvcr cg5st">
          {props.title} ✨
        </h1>
      </div>
      <div className="w-1/2 text-right">
        <Button onClick={() => props.openModal()} disabled={!props.isAdmin}>
          <PlusIcon className="w-6 h-6" /> &nbsp; {props.buttonTitle}
        </Button>
      </div>
    </div>
  );
}
