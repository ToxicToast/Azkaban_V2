import { useAuthState, useCategoryState } from '@azkaban/inventory-redux';
import { useCallback } from 'react';

export function useCategoryHeaderViewModel() {
  const { isAdmin } = useAuthState();
  const { changeAddModal } = useCategoryState();

  const openAddModal = useCallback(() => {
    changeAddModal(true);
  }, [changeAddModal]);

  return {
    openAddModal,
    isAdmin,
  };
}
