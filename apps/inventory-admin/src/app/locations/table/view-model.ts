import { useAuthState, useLocationState } from '@azkaban/inventory-redux';
import { useCallback, useMemo, useState } from 'react';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table';

export function useLocationTableViewModel() {
  const { isAdmin } = useAuthState();
  const {
    locationData: locationDataState,
    changeStatusModal,
    changeParentModal,
    fetchLocationById,
    changeEditModal,
    changeDeleteModal,
    changeRestoreModal,
  } = useLocationState();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const locationData = useMemo(() => {
    return locationDataState ?? [];
  }, [locationDataState]);

  const setLocationId = useCallback(
    (value: string) => {
      fetchLocationById(value);
    },
    [fetchLocationById],
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
    locationData,
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    columnVisibility,
    setColumnVisibility,
    openStatusModal,
    setLocationId,
    openParentModal,
    openChildModal,
    openEditModal,
    openDeleteModal,
    openRestoreModal,
    isAdmin,
  };
}
