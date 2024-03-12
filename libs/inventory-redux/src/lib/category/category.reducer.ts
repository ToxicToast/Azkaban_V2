import { CategoryModel } from './category.model';
import { PayloadAction } from '@reduxjs/toolkit';

export function setStatusModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>,
) {
  state.statusModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedCategory = null;
  }
}

export function setParentModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>,
) {
  state.parentModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedCategory = null;
  }
}

export function setAddModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>,
) {
  state.addModal = action.payload;
}

export function setEditModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>,
) {
  state.editModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedCategory = null;
  }
}

export function setDeleteModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>,
) {
  state.deleteModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedCategory = null;
  }
}

export function setRestoreModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>,
) {
  state.restoreModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedCategory = null;
  }
}
