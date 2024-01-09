import { useCategoryState } from '../../core/category/category.hook';
import { useCallback, useMemo } from 'react';
import { useAzkabanAuth } from '@azkaban/ui-components';

export function useCategoryModalViewModel() {
  const { hasInventoryAdminGroup } = useAzkabanAuth();
  const {
    selectedCategory,
    childModal,
    statusModal,
    parentModal,
    changeStatusModal,
    apiStatus,
    updateCategoryStatus,
  } = useCategoryState();

  const closeStatusModal = useCallback(() => {
    return changeStatusModal(false);
  }, [changeStatusModal]);

  const onSubmitStatus = useCallback(
    (id: string, status: boolean) => {
      updateCategoryStatus(id, status);
    },
    [updateCategoryStatus]
  );

  const isAdmin = useMemo(() => {
    return hasInventoryAdminGroup();
  }, [hasInventoryAdminGroup]);

  const isCategoryActive = useMemo(() => {
    return selectedCategory?.active ?? false;
  }, [selectedCategory?.active]);

  return {
    apiStatus,
    selectedCategory,
    childModal,
    statusModal,
    parentModal,
    closeStatusModal,
    onSubmitStatus,
    isAdmin,
    isCategoryActive,
  };
}
