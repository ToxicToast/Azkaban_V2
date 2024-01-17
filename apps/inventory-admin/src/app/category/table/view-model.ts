import { useCallback, useMemo, useState } from 'react';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table';
import { useAuthState, useCategoryState } from '@azkaban/inventory-redux';

export function useCategoryTableViewModel() {
  const {
    categoryData: categoryDataState,
    changeStatusModal,
    changeParentModal,
    fetchCategoryById,
    changeEditModal,
    changeDeleteModal,
    changeRestoreModal,
  } = useCategoryState();
  const { isAdmin } = useAuthState();
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
    changeEditModal(true);
  }, [changeEditModal]);

  const openDeleteModal = useCallback(() => {
    changeDeleteModal(true);
  }, [changeDeleteModal]);

  const openRestoreModal = useCallback(() => {
    changeRestoreModal(true);
  }, [changeRestoreModal]);

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
    isAdmin,
  };
}
