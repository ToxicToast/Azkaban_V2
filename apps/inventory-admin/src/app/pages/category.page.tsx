import { useCategoryState } from '../core/category/category.hook';

export function CategoryPage() {
  const { categoryData } = useCategoryState();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <h2 className="text-slate-800 dark:text-slate-100 font-bold ctbo0 cvvcr cg5st">
        Categories ({categoryData.length})
      </h2>
      <div className="rounded-md border mt-8">
        <pre>{JSON.stringify(categoryData, null, 4)}</pre>
      </div>
    </div>
  );
}
