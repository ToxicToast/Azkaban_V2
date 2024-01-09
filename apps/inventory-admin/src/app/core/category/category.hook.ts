import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '../store';
import { useCallback } from 'react';
import {
  useLazyFetchCategoryListQuery,
  useLazyFetchCategorySingleQuery,
  useUpdateActiveCategoryMutation,
  useUpdateInactiveCategoryMutation,
} from './category.api';
import {
  selectCategoryApiStatus,
  selectCategoryChildModal,
  selectCategoryData,
  selectCategoryParentModal,
  selectCategorySelectedCategory,
  selectCategorySelectedId,
  selectCategoryStatusModal,
} from './category.selector';
import { setStatusModal } from './category.slice';

export function useCategoryState() {
  const dispatch = useDispatch<AppDispatch>();
  const [fetchCategoryListTrigger] = useLazyFetchCategoryListQuery();
  const [fetchCategorySingleTrigger] = useLazyFetchCategorySingleQuery();
  const [updateActiveCategoryMutation, updateActiveCategoryResult] =
    useUpdateActiveCategoryMutation();
  const [updateInactiveCategoryMutation, updateInactiveCategoryResult] =
    useUpdateInactiveCategoryMutation();

  const apiStatus = useAppSelector(selectCategoryApiStatus);
  const categoryData = useAppSelector(selectCategoryData);
  const selectedId = useAppSelector(selectCategorySelectedId);
  const statusModal = useAppSelector(selectCategoryStatusModal);
  const parentModal = useAppSelector(selectCategoryParentModal);
  const childModal = useAppSelector(selectCategoryChildModal);
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

  const changeStatusModal = useCallback(
    (status: boolean) => {
      dispatch(setStatusModal(status));
    },
    [dispatch]
  );

  return {
    apiStatus,
    categoryData,
    selectedId,
    statusModal,
    parentModal,
    childModal,
    selectedCategory,
    //
    fetchCategoryList,
    fetchCategoryById,
    updateCategoryStatus,
    //
    changeStatusModal,
  };
}
