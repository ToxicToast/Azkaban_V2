import { useAuthState, useBrandState } from '@azkaban/inventory-redux';
import { useMemo, useState } from 'react';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table';

export function useBrandTableViewModel() {
  const { brandData: brandDataState } = useBrandState();
  const { isAdmin } = useAuthState();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const brandData = useMemo(() => {
    return brandDataState ?? [];
  }, [brandDataState]);

  return {
    brandData,
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    columnVisibility,
    isAdmin,
  };
}
