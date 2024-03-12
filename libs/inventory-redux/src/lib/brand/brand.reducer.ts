import { PayloadAction } from '@reduxjs/toolkit';
import { BrandModel } from './brand.model';

export function setStatusModalAction(
  state: BrandModel,
  action: PayloadAction<boolean>,
) {
  state.statusModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedBrand = null;
  }
}

export function setAddModalAction(
  state: BrandModel,
  action: PayloadAction<boolean>,
) {
  state.addModal = action.payload;
}

export function setEditModalAction(
  state: BrandModel,
  action: PayloadAction<boolean>,
) {
  state.editModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedBrand = null;
  }
}

export function setDeleteModalAction(
  state: BrandModel,
  action: PayloadAction<boolean>,
) {
  state.deleteModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedBrand = null;
  }
}

export function setRestoreModalAction(
  state: BrandModel,
  action: PayloadAction<boolean>,
) {
  state.restoreModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedBrand = null;
  }
}
