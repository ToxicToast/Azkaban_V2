import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store';
import { useCallback } from 'react';
import {
  useAddCategoryMutation,
  useLazyFetchCategoryListQuery,
  useLazyFetchCategorySingleQuery,
  useUpdateActiveCategoryMutation,
  useUpdateCategoryMutation,
  useUpdateInactiveCategoryMutation,
} from './category.api';
import {
  selectCategoryAddModal,
  selectCategoryApiStatus,
  selectCategoryData,
  selectCategoryParentModal,
  selectCategorySelectedCategory,
  selectCategorySelectedId,
  selectCategoryStatusModal,
} from './category.selector';
import { setStatusModal, setParentModal, setAddModal } from './category.slice';
import { Nullable, Optional } from '@azkaban/shared';

export function useCategoryState() {
  const dispatch = useDispatch<AppDispatch>();
  const [fetchCategoryListTrigger] = useLazyFetchCategoryListQuery();
  const [fetchCategorySingleTrigger] = useLazyFetchCategorySingleQuery();
  const [updateActiveCategoryMutation] = useUpdateActiveCategoryMutation();
  const [updateInactiveCategoryMutation] = useUpdateInactiveCategoryMutation();
  const [updateCategoryMutation] = useUpdateCategoryMutation();
  const [addCategoryMutation] = useAddCategoryMutation();

  const apiStatus = useAppSelector(selectCategoryApiStatus);
  const categoryData = useAppSelector(selectCategoryData);
  const selectedId = useAppSelector(selectCategorySelectedId);
  const statusModal = useAppSelector(selectCategoryStatusModal);
  const parentModal = useAppSelector(selectCategoryParentModal);
  const addModal = useAppSelector(selectCategoryAddModal);
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

  return {
    apiStatus,
    categoryData,
    selectedId,
    statusModal,
    parentModal,
    addModal,
    selectedCategory,
    //
    fetchCategoryList,
    fetchCategoryById,
    updateCategoryStatus,
    updateCategory,
    //
    changeStatusModal,
    changeParentModal,
    changeAddModal,
    addCategory,
  };
}
