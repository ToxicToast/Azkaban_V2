import { CategoryHeaderView } from './header/view';
import { CategoryTableView } from './table/view';
import { CategoryModalView } from './modal/view';

export function CategoryPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <CategoryHeaderView key="CategoryHeader" />
      <CategoryTableView key="CategoryTable" />
      <CategoryModalView key="CategoryModal" />
    </div>
  );
}
