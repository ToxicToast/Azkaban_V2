import { Button } from '@azkaban/ui-components';
import { PlusIcon } from 'lucide-react';

export function BrandHeaderView() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
        <h1 className="text-slate-800 dark:text-slate-100 font-bold ctbo0 cvvcr cg5st">
          Brands ✨
        </h1>
      </div>
      <div className="w-1/2 text-right">
        <Button
          onClick={() => console.error('Not Implemented')}
          disabled={true}
        >
          <PlusIcon className="w-6 h-6" /> &nbsp; Add Brand
        </Button>
      </div>
    </div>
  );
}
