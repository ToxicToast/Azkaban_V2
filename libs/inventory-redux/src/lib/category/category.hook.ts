import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store';
import { useCallback } from 'react';
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useLazyFetchCategoryListQuery,
  useLazyFetchCategorySingleQuery,
  useRestoreCategoryMutation,
  useUpdateActiveCategoryMutation,
  useUpdateCategoryMutation,
  useUpdateInactiveCategoryMutation,
} from './category.api';
import {
  selectCategoryAddModal,
  selectCategoryApiStatus,
  selectCategoryData,
  selectCategoryDeleteModal,
  selectCategoryEditModal,
  selectCategoryParentModal,
  selectCategoryRestoreModal,
  selectCategorySelectedCategory,
  selectCategorySelectedId,
  selectCategoryStatusModal,
} from './category.selector';
import {
  setStatusModal,
  setParentModal,
  setAddModal,
  setEditModal,
  setRestoreModal,
  setDeleteModal,
} from './category.slice';
import { Nullable, Optional } from '@azkaban/shared';

export function useCategoryState() {
  const dispatch = useDispatch<AppDispatch>();
  const [fetchCategoryListTrigger] = useLazyFetchCategoryListQuery();
  const [fetchCategorySingleTrigger] = useLazyFetchCategorySingleQuery();
  const [updateActiveCategoryMutation] = useUpdateActiveCategoryMutation();
  const [updateInactiveCategoryMutation] = useUpdateInactiveCategoryMutation();
  const [updateCategoryMutation] = useUpdateCategoryMutation();
  const [addCategoryMutation] = useAddCategoryMutation();
  const [deleteCategoryMutation] = useDeleteCategoryMutation();
  const [restoreCategoryMutation] = useRestoreCategoryMutation();

  const apiStatus = useAppSelector(selectCategoryApiStatus);
  const categoryData = useAppSelector(selectCategoryData);
  const selectedId = useAppSelector(selectCategorySelectedId);
  const statusModal = useAppSelector(selectCategoryStatusModal);
  const parentModal = useAppSelector(selectCategoryParentModal);
  const addModal = useAppSelector(selectCategoryAddModal);
  const editModal = useAppSelector(selectCategoryEditModal);
  const deleteModal = useAppSelector(selectCategoryDeleteModal);
  const restoreModal = useAppSelector(selectCategoryRestoreModal);
  const selectedCategory = useAppSelector(selectCategorySelectedCategory);

  const fetchCategoryList = useCallback(() => {
    fetchCategoryListTrigger();
  }, [fetchCategoryListTrigger]);

  const fetchCategoryById = useCallback(
    (id: string) => {
      fetchCategorySingleTrigger(id);
    },
    [fetchCategorySingleTrigger]
  );

  const updateCategoryStatus = useCallback(
    (id: string, status: boolean) => {
      if (status) {
        updateActiveCategoryMutation(id);
      } else if (!status) {
        updateInactiveCategoryMutation(id);
      }
    },
    [updateActiveCategoryMutation, updateInactiveCategoryMutation]
  );

  const updateCategory = useCallback(
    (
      id: string,
      parent_id?: Optional<Nullable<string>>,
      title?: Optional<string>,
      slug?: Optional<string>
    ) => {
      updateCategoryMutation({ id, parent_id, title, slug });
    },
    [updateCategoryMutation]
  );

  const addCategory = useCallback(
    (parent_id: Nullable<string>, title: string) => {
      addCategoryMutation({ parent_id, title });
    },
    [addCategoryMutation]
  );

  const deleteCategory = useCallback(
    (id: string) => {
      deleteCategoryMutation(id);
    },
    [deleteCategoryMutation]
  );

  const restoreCategory = useCallback(
    (id: string) => {
      restoreCategoryMutation(id);
    },
    [restoreCategoryMutation]
  );

  const changeStatusModal = useCallback(
    (status: boolean) => {
      dispatch(setStatusModal(status));
    },
    [dispatch]
  );

  const changeParentModal = useCallback(
    (status: boolean) => {
      dispatch(setParentModal(status));
    },
    [dispatch]
  );

  const changeAddModal = useCallback(
    (status: boolean) => {
      dispatch(setAddModal(status));
    },
    [dispatch]
  );

  const changeEditModal = useCallback(
    (status: boolean) => {
      dispatch(setEditModal(status));
    },
    [dispatch]
  );

  const changeDeleteModal = useCallback(
    (status: boolean) => {
      dispatch(setDeleteModal(status));
    },
    [dispatch]
  );

  const changeRestoreModal = useCallback(
    (status: boolean) => {
      dispatch(setRestoreModal(status));
    },
    [dispatch]
  );

  return {
    apiStatus,
    categoryData,
    selectedId,
    statusModal,
    parentModal,
    addModal,
    editModal,
    deleteModal,
    restoreModal,
    selectedCategory,
    //
    fetchCategoryList,
    fetchCategoryById,
    updateCategoryStatus,
    changeEditModal,
    changeDeleteModal,
    changeRestoreModal,
    //
    changeStatusModal,
    changeParentModal,
    changeAddModal,
    addCategory,
    updateCategory,
    deleteCategory,
    restoreCategory,
  };
}
