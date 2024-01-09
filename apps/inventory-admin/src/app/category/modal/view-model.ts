import { useCategoryState } from '../../core/category/category.hook';
import { useCallback, useMemo } from 'react';
import { useAzkabanAuth } from '@azkaban/ui-components';
import { Nullable } from '@azkaban/shared';

export function useCategoryModalViewModel() {
  const { hasInventoryAdminGroup } = useAzkabanAuth();
  const {
    selectedCategory,
    childModal,
    statusModal,
    parentModal,
    changeStatusModal,
    changeParentModal,
    apiStatus,
    updateCategoryStatus,
    updateCategory,
    categoryData,
  } = useCategoryState();

  const closeStatusModal = useCallback(() => {
    return changeStatusModal(false);
  }, [changeStatusModal]);

  const closeParentModal = useCallback(() => {
    return changeParentModal(false);
  }, [changeParentModal]);

  const onSubmitStatus = useCallback(
    (id: string, status: boolean) => {
      updateCategoryStatus(id, status);
    },
    [updateCategoryStatus]
  );

  const onSubmitParentId = useCallback(
    (id: string, parent_id: Nullable<string>) => {
      updateCategory(id, parent_id);
    },
    [updateCategory]
  );

  const isAdmin = useMemo(() => {
    return hasInventoryAdminGroup();
  }, [hasInventoryAdminGroup]);

  const isCategoryActive = useMemo(() => {
    return selectedCategory?.active ?? false;
  }, [selectedCategory?.active]);

  const selectCategoryParentId = useMemo(() => {
    return selectedCategory?.parent_id ?? null;
  }, [selectedCategory?.parent_id]);

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
    selectCategoryParentId,
    categoryData,
    closeParentModal,
    onSubmitParentId,
  };
}
