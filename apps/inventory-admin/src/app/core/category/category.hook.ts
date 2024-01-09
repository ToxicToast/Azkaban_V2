import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store';
import { useCallback } from 'react';
import {
  useLazyFetchCategoryListQuery,
  useLazyFetchCategorySingleQuery,
  useUpdateActiveCategoryMutation,
  useUpdateCategoryMutation,
  useUpdateInactiveCategoryMutation,
} from './category.api';
import {
  selectCategoryApiStatus,
  selectCategoryData,
  selectCategoryParentModal,
  selectCategorySelectedCategory,
  selectCategorySelectedId,
  selectCategoryStatusModal,
} from './category.selector';
import { setStatusModal, setParentModal } from './category.slice';
import { Nullable, Optional } from '@azkaban/shared';

export function useCategoryState() {
  const dispatch = useDispatch<AppDispatch>();
  const [fetchCategoryListTrigger] = useLazyFetchCategoryListQuery();
  const [fetchCategorySingleTrigger] = useLazyFetchCategorySingleQuery();
  const [updateActiveCategoryMutation] = useUpdateActiveCategoryMutation();
  const [updateInactiveCategoryMutation] = useUpdateInactiveCategoryMutation();
  const [updateCategoryMutation] = useUpdateCategoryMutation();

  const apiStatus = useAppSelector(selectCategoryApiStatus);
  const categoryData = useAppSelector(selectCategoryData);
  const selectedId = useAppSelector(selectCategorySelectedId);
  const statusModal = useAppSelector(selectCategoryStatusModal);
  const parentModal = useAppSelector(selectCategoryParentModal);
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

  return {
    apiStatus,
    categoryData,
    selectedId,
    statusModal,
    parentModal,
    selectedCategory,
    //
    fetchCategoryList,
    fetchCategoryById,
    updateCategoryStatus,
    updateCategory,
    //
    changeStatusModal,
    changeParentModal,
  };
}
