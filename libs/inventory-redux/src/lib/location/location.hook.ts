import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store';
import {
  selectLocationAddModal,
  selectLocationEditModal,
  selectLocationDeleteModal,
  selectLocationRestoreModal,
  selectLocationApiStatus,
  selectLocationData,
  selectLocationParentModal,
  selectLocationSelectedLocation,
  selectLocationSelectedId,
  selectLocationStatusModal,
} from './location.selector';
import { useCallback } from 'react';
import { Nullable, Optional } from '@azkaban/shared';
import {
  useAddLocationMutation,
  useDeleteLocationMutation,
  useLazyFetchLocationListQuery,
  useLazyFetchLocationSingleQuery,
  useRestoreLocationMutation,
  useUpdateActiveLocationMutation,
  useUpdateLocationMutation,
  useUpdateInactiveLocationMutation,
} from './location.api';

export function useLocationState() {
  const dispatch = useDispatch<AppDispatch>();
  const [fetchLocationListTrigger] = useLazyFetchLocationListQuery();
  const [fetchLocationSingleTrigger] = useLazyFetchLocationSingleQuery();
  const [updateActiveLocationMutation] = useUpdateActiveLocationMutation();
  const [updateInactiveLocationMutation] = useUpdateInactiveLocationMutation();
  const [updateLocationMutation] = useUpdateLocationMutation();
  const [addLocationMutation] = useAddLocationMutation();
  const [deleteLocationMutation] = useDeleteLocationMutation();
  const [restoreLocationMutation] = useRestoreLocationMutation();

  const apiStatus = useAppSelector(selectLocationApiStatus);
  const locationData = useAppSelector(selectLocationData);
  const selectedId = useAppSelector(selectLocationSelectedId);
  const statusModal = useAppSelector(selectLocationStatusModal);
  const parentModal = useAppSelector(selectLocationParentModal);
  const addModal = useAppSelector(selectLocationAddModal);
  const editModal = useAppSelector(selectLocationEditModal);
  const deleteModal = useAppSelector(selectLocationDeleteModal);
  const restoreModal = useAppSelector(selectLocationRestoreModal);
  const selectedLocation = useAppSelector(selectLocationSelectedLocation);

  const fetchLocationList = useCallback(() => {
    fetchLocationListTrigger();
  }, [fetchLocationListTrigger]);

  const fetchLocationById = useCallback(
    (id: string) => {
      fetchLocationSingleTrigger(id);
    },
    [fetchLocationSingleTrigger],
  );

  const updateLocationStatus = useCallback(
    (id: string, status: boolean) => {
      if (status) {
        updateActiveLocationMutation(id);
      } else if (!status) {
        updateInactiveLocationMutation(id);
      }
    },
    [updateActiveLocationMutation, updateInactiveLocationMutation],
  );

  const updateLocation = useCallback(
    (
      id: string,
      parent_id?: Optional<Nullable<string>>,
      freezer?: Optional<boolean>,
      title?: Optional<string>,
      slug?: Optional<string>,
    ) => {
      updateLocationMutation({ id, parent_id, title, slug, freezer });
    },
    [updateLocationMutation],
  );

  const addLocation = useCallback(
    (parent_id: Nullable<string>, title: string, freezer: boolean) => {
      addLocationMutation({ parent_id, title, freezer });
    },
    [addLocationMutation],
  );

  const deleteLocation = useCallback(
    (id: string) => {
      deleteLocationMutation(id);
    },
    [deleteLocationMutation],
  );

  const restoreLocation = useCallback(
    (id: string) => {
      restoreLocationMutation(id);
    },
    [restoreLocationMutation],
  );

  const changeStatusModal = useCallback((status: boolean) => {
    // dispatch(setStatusModal(status));
    console.error('changeStatusModal', status);
  }, []);

  const changeParentModal = useCallback(
    (status: boolean) => {
      // dispatch(setParentModal(status));
      console.error('setParentModal', status);
    },
    [dispatch],
  );

  const changeAddModal = useCallback(
    (status: boolean) => {
      // dispatch(setAddModal(status));
      console.error('setAddModal', status);
    },
    [dispatch],
  );

  const changeEditModal = useCallback(
    (status: boolean) => {
      // dispatch(setEditModal(status));
      console.error('changeEditModal', status);
    },
    [dispatch],
  );

  const changeDeleteModal = useCallback(
    (status: boolean) => {
      // dispatch(setDeleteModal(status));
      console.error('changeDeleteModal', status);
    },
    [dispatch],
  );

  const changeRestoreModal = useCallback(
    (status: boolean) => {
      // dispatch(setRestoreModal(status));
      console.error('changeRestoreModal', status);
    },
    [dispatch],
  );

  return {
    apiStatus,
    locationData,
    selectedId,
    statusModal,
    parentModal,
    addModal,
    editModal,
    deleteModal,
    restoreModal,
    selectedLocation,
    //
    fetchLocationList,
    fetchLocationById,
    updateLocationStatus,
    changeEditModal,
    changeDeleteModal,
    changeRestoreModal,
    //
    changeStatusModal,
    changeParentModal,
    changeAddModal,
    addLocation,
    updateLocation,
    deleteLocation,
    restoreLocation,
  };
}
