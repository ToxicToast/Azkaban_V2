import { useAuthState, useLocationState } from '@azkaban/inventory-redux';
import { useCallback, useMemo } from 'react';
import { Nullable } from '@azkaban/shared';

export function useLocationModalViewModel() {
  const { isAdmin } = useAuthState();
  const {
    selectedLocation,
    statusModal,
    parentModal,
    changeStatusModal,
    changeParentModal,
    apiStatus,
    updateLocationStatus,
    updateLocation,
    locationData,
    selectedId,
    addModal,
    changeAddModal,
    addLocation,
    editModal,
    changeEditModal,
    deleteModal,
    restoreModal,
    changeDeleteModal,
    deleteLocation,
    restoreLocation,
    changeRestoreModal,
  } = useLocationState();

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
      updateLocationStatus(id, status);
    },
    [updateLocationStatus],
  );

  const onSubmitParentId = useCallback(
    (id: string, parent_id: Nullable<string>) => {
      updateLocation(id, parent_id);
    },
    [updateLocation],
  );

  const onSubmitAddLocation = useCallback(
    (parent_id: Nullable<string>, title: string, freezer: boolean) => {
      addLocation(parent_id, title, freezer);
    },
    [addLocation],
  );

  const onSubmitEditLocation = useCallback(
    (
      id: string,
      parent_id: Nullable<string>,
      freezer: boolean,
      title: string,
      slug: string,
    ) => {
      updateLocation(id, parent_id, freezer, title, slug);
    },
    [updateLocation],
  );

  const onSubmitDeleteLocation = useCallback(
    (id: string) => {
      deleteLocation(id);
    },
    [deleteLocation],
  );

  const onSubmitRestoreLocation = useCallback(
    (id: string) => {
      restoreLocation(id);
    },
    [restoreLocation],
  );

  const isLocationActive = useMemo(() => {
    return selectedLocation?.active ?? false;
  }, [selectedLocation?.active]);

  const selectLocationParentId = useMemo(() => {
    return selectedLocation?.parent_id ?? null;
  }, [selectedLocation?.parent_id]);

  return {
    apiStatus,
    selectedLocation,
    statusModal,
    parentModal,
    closeStatusModal,
    onSubmitStatus,
    isAdmin,
    isLocationActive,
    selectLocationParentId,
    locationData,
    closeParentModal,
    onSubmitParentId,
    selectedId,
    closeAddModal,
    addModal,
    onSubmitAddLocation,
    editModal,
    deleteModal,
    restoreModal,
    closeEditModal,
    onSubmitEditLocation,
    closeDeleteModal,
    onSubmitDeleteLocation,
    onSubmitRestoreLocation,
    closeRestoreModal,
  };
}
