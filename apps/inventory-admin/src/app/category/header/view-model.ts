import { useCategoryState } from '../../core/category/category.hook';
import { useCallback, useMemo } from 'react';
import { useAzkabanAuth } from '@azkaban/ui-components';

export function useCategoryHeaderViewModel() {
  const { hasInventoryAdminGroup } = useAzkabanAuth();
  const { changeAddModal } = useCategoryState();

  const openAddModal = useCallback(() => {
    changeAddModal(true);
  }, [changeAddModal]);

  const isAdmin = useMemo(() => {
    return hasInventoryAdminGroup();
  }, [hasInventoryAdminGroup]);

  return {
    openAddModal,
    isAdmin,
  };
}
