import { useAuthState, useLocationState } from '@azkaban/inventory-redux';
import { useCallback } from 'react';

export function useLocationHeaderViewModel() {
  const { isAdmin } = useAuthState();
  const { changeAddModal } = useLocationState();

  const openAddModal = useCallback(() => {
    changeAddModal(true);
  }, [changeAddModal]);

  return {
    openAddModal,
    isAdmin,
  };
}
