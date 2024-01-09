import { useCategoryState } from '../../core/category/category.hook';
import { useMemo } from 'react';

export function useCategoryHeaderViewModel() {
  const { categoryData } = useCategoryState();

  const categoryCount = useMemo(() => {
    return categoryData.length;
  }, [categoryData]);

  return {
    categoryCount,
  };
}
