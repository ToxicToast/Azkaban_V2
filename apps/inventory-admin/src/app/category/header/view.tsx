import { Button } from '@azkaban/ui-components';
import { useCategoryHeaderViewModel } from './view-model';
import { PlusIcon } from 'lucide-react';

export function CategoryHeaderView() {
  const { categoryCount } = useCategoryHeaderViewModel();

  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
        <h1 className="text-slate-800 dark:text-slate-100 font-bold ctbo0 cvvcr cg5st">
          Categories ({categoryCount})
        </h1>
      </div>
      <div className="w-1/2 text-right">
        <Button>
          <PlusIcon className="w-6 h-6" /> &nbsp; Add Category
        </Button>
      </div>
    </div>
  );
}
