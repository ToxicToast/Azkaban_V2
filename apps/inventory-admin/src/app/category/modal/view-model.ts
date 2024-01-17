import { useAuthState, useCategoryState } from '@azkaban/inventory-redux';
import { useCallback, useMemo } from 'react';
import { Nullable } from '@azkaban/shared';

export function useCategoryModalViewModel() {
  const { isAdmin } = useAuthState();
  const {
    selectedCategory,
    statusModal,
    parentModal,
    changeStatusModal,
    changeParentModal,
    apiStatus,
    updateCategoryStatus,
    updateCategory,
    categoryData,
    selectedId,
    addModal,
    changeAddModal,
    addCategory,
    editModal,
    changeEditModal,
    deleteModal,
    restoreModal,
    changeDeleteModal,
    deleteCategory,
    restoreCategory,
    changeRestoreModal,
  } = useCategoryState();

  const closeStatusModal = useCallback(() => {
    return changeStatusModal(false);
  }, [changeStatusModal]);

  const closeParentModal = useCallback(() => {
    return changeParentModal(false);
  }, [changeParentModal]);

  const closeAddModal = useCallback(() => {
    return changeAddModal(false);
  }, [changeAddModal]);

  const closeEditModal = useCallback(() => {
    return changeEditModal(false);
  }, [changeEditModal]);

  const closeDeleteModal = useCallback(() => {
    return changeDeleteModal(false);
  }, [changeDeleteModal]);

  const closeRestoreModal = useCallback(() => {
    return changeRestoreModal(false);
  }, [changeRestoreModal]);

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

  const onSubmitAddCategory = useCallback(
    (parent_id: Nullable<string>, title: string) => {
      addCategory(parent_id, title);
    },
    [addCategory]
  );

  const onSubmitEditCategory = useCallback(
    (id: string, parent_id: Nullable<string>, title: string, slug: string) => {
      updateCategory(id, parent_id, title, slug);
    },
    [updateCategory]
  );

  const onSubmitDeleteCategory = useCallback(
    (id: string) => {
      deleteCategory(id);
    },
    [deleteCategory]
  );

  const onSubmitRestoreCategory = useCallback(
    (id: string) => {
      restoreCategory(id);
    },
    [restoreCategory]
  );

  const isCategoryActive = useMemo(() => {
    return selectedCategory?.active ?? false;
  }, [selectedCategory?.active]);

  const selectCategoryParentId = useMemo(() => {
    return selectedCategory?.parent_id ?? null;
  }, [selectedCategory?.parent_id]);

  return {
    apiStatus,
    selectedCategory,
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
    selectedId,
    closeAddModal,
    addModal,
    onSubmitAddCategory,
    editModal,
    deleteModal,
    restoreModal,
    closeEditModal,
    onSubmitEditCategory,
    closeDeleteModal,
    onSubmitDeleteCategory,
    onSubmitRestoreCategory,
    closeRestoreModal,
  };
}
