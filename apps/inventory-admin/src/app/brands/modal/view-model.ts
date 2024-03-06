import { useAuthState, useBrandState } from '@azkaban/inventory-redux';
import { useCallback, useMemo } from 'react';
import { useToasts } from '@azkaban/ui-components';

export function useBrandModalViewModel() {
  const { isAdmin } = useAuthState();
  const {
    selectedBrand,
    statusModal,
    changeStatusModal,
    apiStatus,
    updateBrandStatus,
    updateBrand,
    brandData,
    selectedId,
    addModal,
    changeAddModal,
    addBrand,
    editModal,
    changeEditModal,
    deleteModal,
    restoreModal,
    changeDeleteModal,
    deleteBrand,
    restoreBrand,
    changeRestoreModal,
  } = useBrandState();

  const closeStatusModal = useCallback(() => {
    return changeStatusModal(false);
  }, [changeStatusModal]);

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
      updateBrandStatus(id, status);
    },
    [updateBrandStatus],
  );

  const onSubmitAddBrand = useCallback(
    (title: string) => {
      addBrand(title);
    },
    [addBrand],
  );

  const onSubmitEditBrand = useCallback(
    (id: string, title: string, slug: string) => {
      updateBrand(id, title, slug);
    },
    [updateBrand],
  );

  const onSubmitDeleteBrand = useCallback(
    (id: string) => {
      deleteBrand(id);
    },
    [deleteBrand],
  );

  const onSubmitRestoreBrand = useCallback(
    (id: string) => {
      restoreBrand(id);
    },
    [restoreBrand],
  );

  const isBrandActive = useMemo(() => {
    return selectedBrand?.active ?? false;
  }, [selectedBrand?.active]);

  return {
    apiStatus,
    selectedBrand,
    statusModal,
    closeStatusModal,
    onSubmitStatus,
    isAdmin,
    isBrandActive,
    brandData,
    selectedId,
    closeAddModal,
    addModal,
    onSubmitAddBrand,
    editModal,
    deleteModal,
    restoreModal,
    closeEditModal,
    onSubmitEditBrand,
    closeDeleteModal,
    onSubmitDeleteBrand,
    onSubmitRestoreBrand,
    closeRestoreModal,
  };
}
