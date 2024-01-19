import { BrandHeaderView } from './header/view';
import { WorkInProgress } from '@azkaban/ui-inventory-layout';

export function BrandPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <BrandHeaderView />
      <WorkInProgress />
    </div>
  );
}
