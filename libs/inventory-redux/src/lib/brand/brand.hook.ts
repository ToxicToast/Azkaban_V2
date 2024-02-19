import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store';
import { useCallback } from 'react';
import { Optional } from '@azkaban/shared';
import {
  useLazyFetchBrandListQuery,
  useLazyFetchBrandSingleQuery,
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

export function useBrandState() {
  const dispatch = useDispatch<AppDispatch>();
  const [fetchBrandListTrigger] = useLazyFetchBrandListQuery();
  const [fetchBrandSingleTrigger] = useLazyFetchBrandSingleQuery();

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
    (id: string, status: boolean) => {},
    [],
  );

  const updateBrand = useCallback(
    (id: string, title?: Optional<string>, slug?: Optional<string>) => {},
    [],
  );

  const addBrand = useCallback((title: string) => {}, []);

  const deleteBrand = useCallback((id: string) => {}, []);

  const restoreBrand = useCallback((id: string) => {}, []);

  const changeStatusModal = useCallback((status: boolean) => {}, []);

  const changeAddModal = useCallback((status: boolean) => {}, []);

  const changeEditModal = useCallback((status: boolean) => {}, []);

  const changeDeleteModal = useCallback((status: boolean) => {}, []);

  const changeRestoreModal = useCallback((status: boolean) => {}, []);

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
