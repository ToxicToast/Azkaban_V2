import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { CategoryModel } from './category.model';
import { categoryApi } from './category.api';
import { Category } from './category.interface';
import { Nullable } from '@azkaban/shared';

export const onPending = (builder: ActionReducerMapBuilder<CategoryModel>) => {
  builder.addMatcher(
    categoryApi.endpoints?.fetchCategoryList.matchPending,
    (state: CategoryModel) => {
      state.status = 'loading';
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.fetchCategorySingle.matchPending,
    (state: CategoryModel) => {
      state.status = 'loading';
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.addCategory.matchPending,
    (state: CategoryModel) => {
      state.status = 'loading';
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.updateCategory.matchPending,
    (state: CategoryModel) => {
      state.status = 'loading';
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.deleteCategory.matchPending,
    (state: CategoryModel) => {
      state.status = 'loading';
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.restoreCategory.matchPending,
    (state: CategoryModel) => {
      state.status = 'loading';
    },
  );
};
export const onFullfiled = (
  builder: ActionReducerMapBuilder<CategoryModel>,
) => {
  builder.addMatcher(
    categoryApi.endpoints?.fetchCategoryList.matchFulfilled,
    (state: CategoryModel, action: PayloadAction<Array<Category>>) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.fetchCategorySingle.matchFulfilled,
    (state: CategoryModel, action: PayloadAction<Nullable<Category>>) => {
      state.status = 'loaded';
      state.selectedCategory = action.payload;
      state.selectedId = action.payload?.id ?? null;
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.addCategory.matchFulfilled,
    (state: CategoryModel) => {
      state.status = 'loaded';
      state.addModal = false;
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.updateCategory.matchFulfilled,
    (state: CategoryModel) => {
      state.status = 'loaded';
      state.editModal = false;
      state.parentModal = false;
      state.statusModal = false;
      state.selectedId = null;
      state.selectedCategory = null;
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.deleteCategory.matchFulfilled,
    (state: CategoryModel) => {
      state.status = 'loaded';
      state.deleteModal = false;
      state.selectedId = null;
      state.selectedCategory = null;
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.restoreCategory.matchFulfilled,
    (state: CategoryModel) => {
      state.status = 'loaded';
      state.restoreModal = false;
      state.selectedId = null;
      state.selectedCategory = null;
    },
  );
};
export const onRejected = (builder: ActionReducerMapBuilder<CategoryModel>) => {
  builder.addMatcher(
    categoryApi.endpoints?.fetchCategoryList.matchRejected,
    (state: CategoryModel) => {
      state.status = 'error';
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.fetchCategoryList.matchRejected,
    (state: CategoryModel) => {
      state.status = 'error';
      state.selectedCategory = null;
      state.selectedId = null;
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.addCategory.matchRejected,
    (state: CategoryModel) => {
      state.status = 'error';
      state.addModal = false;
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.updateCategory.matchRejected,
    (state: CategoryModel) => {
      state.status = 'error';
      state.editModal = false;
      state.parentModal = false;
      state.statusModal = false;
      state.selectedId = null;
      state.selectedCategory = null;
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.deleteCategory.matchRejected,
    (state: CategoryModel) => {
      state.status = 'error';
      state.deleteModal = false;
      state.selectedId = null;
      state.selectedCategory = null;
    },
  );

  builder.addMatcher(
    categoryApi.endpoints?.restoreCategory.matchRejected,
    (state: CategoryModel) => {
      state.status = 'error';
      state.restoreModal = false;
      state.selectedId = null;
      state.selectedCategory = null;
    },
  );
};
