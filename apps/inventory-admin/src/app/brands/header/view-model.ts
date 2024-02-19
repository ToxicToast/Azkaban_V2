import { useAuthState } from '@azkaban/inventory-redux';
import { useCallback } from 'react';

export function useBrandHeaderViewModel() {
  const { isAdmin } = useAuthState();

  const openAddModal = useCallback(() => {}, []);

  return {
    openAddModal,
    isAdmin,
  };
}
