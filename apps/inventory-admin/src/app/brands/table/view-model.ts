import { useAuthState, useBrandState } from '@azkaban/inventory-redux';
import { useCallback, useMemo, useState } from 'react';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table';

export function useBrandTableViewModel() {
  const {
    brandData: brandDataState,
    changeAddModal,
    changeEditModal,
    changeDeleteModal,
    changeRestoreModal,
    changeStatusModal,
    fetchBrandById,
  } = useBrandState();
  const { isAdmin } = useAuthState();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const brandData = useMemo(() => {
    return brandDataState ?? [];
  }, [brandDataState]);

  const setBrandId = useCallback(
    (value: string) => {
      fetchBrandById(value);
    },
    [fetchBrandById],
  );

  const openStatusModal = useCallback(() => {
    return changeStatusModal(true);
  }, [changeStatusModal]);

  const openEditModal = useCallback(() => {
    return changeEditModal(true);
  }, [changeEditModal]);

  const openDeleteModal = useCallback(() => {
    return changeDeleteModal(true);
  }, [changeDeleteModal]);

  const openRestoreModal = useCallback(() => {
    return changeRestoreModal(true);
  }, [changeRestoreModal]);

  return {
    brandData,
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    columnVisibility,
    isAdmin,
    openEditModal,
    openDeleteModal,
    openRestoreModal,
    openStatusModal,
    setBrandId,
  };
}
