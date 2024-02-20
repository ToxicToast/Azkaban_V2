import { useAuthState, useBrandState } from '@azkaban/inventory-redux';
import { useCallback } from 'react';

export function useBrandHeaderViewModel() {
  const { isAdmin } = useAuthState();
  const { changeAddModal } = useBrandState();

  const openAddModal = useCallback(() => {
    changeAddModal(true);
  }, [changeAddModal]);

  return {
    openAddModal,
    isAdmin,
  };
}
