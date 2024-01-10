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
    }
  );

  builder.addMatcher(
    categoryApi.endpoints?.fetchCategorySingle.matchPending,
    (state: CategoryModel) => {
      state.status = 'loading';
    }
  );
};
export const onFullfiled = (
  builder: ActionReducerMapBuilder<CategoryModel>
) => {
  builder.addMatcher(
    categoryApi.endpoints?.fetchCategoryList.matchFulfilled,
    (state: CategoryModel, action: PayloadAction<Array<Category>>) => {
      state.status = 'loaded';
      state.data = action.payload;
    }
  );

  builder.addMatcher(
    categoryApi.endpoints?.fetchCategorySingle.matchFulfilled,
    (state: CategoryModel, action: PayloadAction<Nullable<Category>>) => {
      state.status = 'loaded';
      state.selectedCategory = action.payload;
      state.selectedId = action.payload?.id ?? null;
    }
  );

  builder.addMatcher(
    categoryApi.endpoints?.addCategory.matchFulfilled,
    (state: CategoryModel, action: PayloadAction<void>) => {
      state.addModal = false;
    }
  );
};
export const onRejected = (builder: ActionReducerMapBuilder<CategoryModel>) => {
  builder.addMatcher(
    categoryApi.endpoints?.fetchCategoryList.matchRejected,
    (state: CategoryModel) => {
      state.status = 'error';
    }
  );

  builder.addMatcher(
    categoryApi.endpoints?.fetchCategoryList.matchRejected,
    (state: CategoryModel) => {
      state.status = 'error';
      state.selectedCategory = null;
      state.selectedId = null;
    }
  );
};
