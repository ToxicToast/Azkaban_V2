import { LocationModel } from './location.model';
import { PayloadAction } from '@reduxjs/toolkit';

export function setStatusModalAction(
  state: LocationModel,
  action: PayloadAction<boolean>,
) {
  state.statusModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedLocation = null;
  }
}

export function setParentModalAction(
  state: LocationModel,
  action: PayloadAction<boolean>,
) {
  state.parentModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedLocation = null;
  }
}

export function setAddModalAction(
  state: LocationModel,
  action: PayloadAction<boolean>,
) {
  state.addModal = action.payload;
}

export function setEditModalAction(
  state: LocationModel,
  action: PayloadAction<boolean>,
) {
  state.editModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedLocation = null;
  }
}

export function setDeleteModalAction(
  state: LocationModel,
  action: PayloadAction<boolean>,
) {
  state.deleteModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedLocation = null;
  }
}

export function setRestoreModalAction(
  state: LocationModel,
  action: PayloadAction<boolean>,
) {
  state.restoreModal = action.payload;
  if (action.payload === false) {
    state.selectedId = null;
    state.selectedLocation = null;
  }
}
