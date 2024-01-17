import { CategoryModel } from './category.model';
import { PayloadAction } from '@reduxjs/toolkit';

export function setStatusModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>
) {
  state.statusModal = action.payload;
  if (!action.payload) {
    state.selectedId = null;
  }
}

export function setParentModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>
) {
  state.parentModal = action.payload;
  if (!action.payload) {
    state.selectedId = null;
  }
}

export function setAddModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>
) {
  state.addModal = action.payload;
}

export function setEditModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>
) {
  state.editModal = action.payload;
  if (!action.payload) {
    state.selectedId = null;
  }
}

export function setDeleteModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>
) {
  state.deleteModal = action.payload;
  if (!action.payload) {
    state.selectedId = null;
  }
}

export function setRestoreModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>
) {
  state.deleteModal = action.payload;
  if (!action.payload) {
    state.selectedId = null;
  }
}
