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
    changeParentModal,
    fetchCategoryById,
  } = useCategoryState();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const categoryData = useMemo(() => {
    return categoryDataState ?? [];
  }, [categoryDataState]);

  const setCategoryId = useCallback(
    (value: string) => {
      fetchCategoryById(value);
    },
    [fetchCategoryById]
  );

  const openStatusModal = useCallback(() => {
    changeStatusModal(true);
  }, [changeStatusModal]);

  const openParentModal = useCallback(() => {
    changeParentModal(true);
  }, [changeParentModal]);

  const openChildModal = useCallback(() => {
    changeStatusModal(true);
  }, [changeStatusModal]);

  const openEditModal = useCallback(() => {
    changeStatusModal(true);
  }, [changeStatusModal]);

  const openDeleteModal = useCallback(() => {
    changeStatusModal(true);
  }, [changeStatusModal]);

  const openRestoreModal = useCallback(() => {
    changeStatusModal(true);
  }, [changeStatusModal]);

  return {
    categoryData,
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    columnVisibility,
    setColumnVisibility,
    openStatusModal,
    setCategoryId,
    openParentModal,
    openChildModal,
    openEditModal,
    openDeleteModal,
    openRestoreModal,
  };
}
