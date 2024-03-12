import { Button } from '../shadn/Button';
import { ArrowUpDown } from 'lucide-react';

interface Props {
  onClick: () => void;
}

export function TableTitleSort(props: Props) {
  return (
    <Button variant="ghost" onClick={() => props.onClick()}>
      Title
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}
