import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store';
import { useCallback } from 'react';
import { Optional } from '@azkaban/shared';
import {
  useLazyFetchBrandListQuery,
  useLazyFetchBrandSingleQuery,
  useUpdateActiveBrandMutation,
  useUpdateInactiveBrandMutation,
  useUpdateBrandMutation,
  useAddBrandMutation,
  useDeleteBrandMutation,
  useRestoreBrandMutation,
} from './brand.api';
import {
  selectBrandAddModal,
  selectBrandApiStatus,
  selectBrandData,
  selectBrandDeleteModal,
  selectBrandEditModal,
  selectBrandRestoreModal,
  selectBrandSelectedBrand,
  selectBrandSelectedId,
  selectBrandStatusModal,
} from './brand.selector';
import {
  setStatusModal,
  setAddModal,
  setEditModal,
  setRestoreModal,
  setDeleteModal,
} from './brand.slice';

export function useBrandState() {
  const dispatch = useDispatch<AppDispatch>();
  const [fetchBrandListTrigger] = useLazyFetchBrandListQuery();
  const [fetchBrandSingleTrigger] = useLazyFetchBrandSingleQuery();
  const [updateActiveBrandMutation] = useUpdateActiveBrandMutation();
  const [updateInactiveBrandMutation] = useUpdateInactiveBrandMutation();
  const [updateBrandMutation] = useUpdateBrandMutation();
  const [addBrandMutation] = useAddBrandMutation();
  const [deleteBrandMutation] = useDeleteBrandMutation();
  const [restoreBrandMutation] = useRestoreBrandMutation();

  const apiStatus = useAppSelector(selectBrandApiStatus);
  const brandData = useAppSelector(selectBrandData);
  const selectedId = useAppSelector(selectBrandSelectedId);
  const statusModal = useAppSelector(selectBrandStatusModal);
  const addModal = useAppSelector(selectBrandAddModal);
  const editModal = useAppSelector(selectBrandEditModal);
  const deleteModal = useAppSelector(selectBrandDeleteModal);
  const restoreModal = useAppSelector(selectBrandRestoreModal);
  const selectedBrand = useAppSelector(selectBrandSelectedBrand);

  const fetchBrandList = useCallback(() => {
    fetchBrandListTrigger();
  }, [fetchBrandListTrigger]);

  const fetchBrandById = useCallback(
    (id: string) => {
      fetchBrandSingleTrigger(id);
    },
    [fetchBrandSingleTrigger],
  );

  const updateBrandStatus = useCallback(
    (id: string, status: boolean) => {
      if (status) {
        updateActiveBrandMutation(id);
      } else {
        updateInactiveBrandMutation(id);
      }
    },
    [updateActiveBrandMutation, updateInactiveBrandMutation],
  );

  const updateBrand = useCallback(
    (id: string, title?: Optional<string>, slug?: Optional<string>) => {
      updateBrandMutation({ id, title, slug });
    },
    [updateBrandMutation],
  );

  const addBrand = useCallback(
    (title: string) => {
      addBrandMutation({ title });
    },
    [addBrandMutation],
  );

  const deleteBrand = useCallback(
    (id: string) => {
      deleteBrandMutation(id);
    },
    [deleteBrandMutation],
  );

  const restoreBrand = useCallback(
    (id: string) => {
      restoreBrandMutation(id);
    },
    [restoreBrandMutation],
  );

  const changeStatusModal = useCallback(
    (status: boolean) => {
      dispatch(setStatusModal(status));
    },
    [dispatch],
  );

  const changeAddModal = useCallback(
    (status: boolean) => {
      dispatch(setAddModal(status));
    },
    [dispatch],
  );

  const changeEditModal = useCallback(
    (status: boolean) => {
      dispatch(setEditModal(status));
    },
    [dispatch],
  );

  const changeDeleteModal = useCallback(
    (status: boolean) => {
      dispatch(setDeleteModal(status));
    },
    [dispatch],
  );

  const changeRestoreModal = useCallback(
    (status: boolean) => {
      dispatch(setRestoreModal(status));
    },
    [dispatch],
  );

  return {
    apiStatus,
    brandData,
    selectedId,
    statusModal,
    addModal,
    editModal,
    deleteModal,
    restoreModal,
    selectedBrand,
    //
    fetchBrandList,
    fetchBrandById,
    updateBrandStatus,
    changeEditModal,
    changeDeleteModal,
    changeRestoreModal,
    //
    changeStatusModal,
    changeAddModal,
    addBrand,
    updateBrand,
    deleteBrand,
    restoreBrand,
  };
}
