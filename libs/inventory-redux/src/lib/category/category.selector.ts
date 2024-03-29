import { RootState } from '../store';
import { CategoryModel } from './category.model';
import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { Nullable } from '@azkaban/shared';

const selectCategory = (state: RootState) => state.category;

export const selectCategoryApiStatus = createDraftSafeSelector(
  selectCategory,
  (category: CategoryModel) => category.status
);

export const selectCategoryData = createDraftSafeSelector(
  selectCategory,
  (category: CategoryModel) => category.data
);

export const selectCategorySelectedId = createDraftSafeSelector(
  selectCategory,
  (category: CategoryModel) => category.selectedId
);

export const selectCategoryStatusModal = createDraftSafeSelector(
  selectCategory,
  (category: CategoryModel) => category.statusModal
);

export const selectCategoryParentModal = createDraftSafeSelector(
  selectCategory,
  (category: CategoryModel) => category.parentModal
);

export const selectCategoryAddModal = createDraftSafeSelector(
  selectCategory,
  (category: CategoryModel) => category.addModal
);

export const selectCategoryEditModal = createDraftSafeSelector(
  selectCategory,
  (category: CategoryModel) => category.editModal
);

export const selectCategoryDeleteModal = createDraftSafeSelector(
  selectCategory,
  (category: CategoryModel) => category.deleteModal
);

export const selectCategoryRestoreModal = createDraftSafeSelector(
  selectCategory,
  (category: CategoryModel) => category.restoreModal
);

export const selectCategorySelectedCategory = createDraftSafeSelector(
  selectCategory,
  selectCategorySelectedId,
  (category: CategoryModel, selectedId: Nullable<string>) => {
    if (!selectedId) {
      return null;
    }
    return category.data.find((item) => item.id === selectedId);
  }
);
