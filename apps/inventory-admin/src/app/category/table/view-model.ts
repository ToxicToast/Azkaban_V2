import { useCategoryState } from '../../core/category/category.hook';
import { useCallback, useMemo, useState } from 'react';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table';

export function useCategoryTableViewModel() {
  const {
    categoryData: categoryDataState,
    changeStatusModal,
    fetchCategoryById,
  } = useCategoryState();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const categoryData = useMemo(() => {
    return categoryDataState ?? [];
  }, [categoryDataState]);

  const changeSorting = useCallback((value: SortingState) => {
    setSorting(value);
  }, []);

  const changeColumnFilters = useCallback((value: ColumnFiltersState) => {
    setColumnFilters(value);
  }, []);

  const changeColumnVisibility = useCallback((value: VisibilityState) => {
    setColumnVisibility(value);
  }, []);

  const setCategoryId = useCallback(
    (value: string) => {
      fetchCategoryById(value);
    },
    [fetchCategoryById]
  );

  const openStatusModal = useCallback(() => {
    changeStatusModal(true);
  }, [changeStatusModal]);

  return {
    categoryData,
    sorting,
    changeSorting,
    columnFilters,
    changeColumnFilters,
    columnVisibility,
    changeColumnVisibility,
    openStatusModal,
    setCategoryId,
  };
}
