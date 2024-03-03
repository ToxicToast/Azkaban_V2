import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { LocationModel } from './location.model';
import { Nullable } from '@azkaban/shared';
import { RootState } from '../store';

const selectLocation = (state: RootState) => state.location;

export const selectLocationApiStatus = createDraftSafeSelector(
  selectLocation,
  (location: LocationModel) => location.status,
);

export const selectLocationData = createDraftSafeSelector(
  selectLocation,
  (location: LocationModel) => location.data,
);

export const selectLocationSelectedId = createDraftSafeSelector(
  selectLocation,
  (location: LocationModel) => location.selectedId,
);

export const selectLocationStatusModal = createDraftSafeSelector(
  selectLocation,
  (location: LocationModel) => location.statusModal,
);

export const selectLocationParentModal = createDraftSafeSelector(
  selectLocation,
  (location: LocationModel) => location.parentModal,
);

export const selectLocationAddModal = createDraftSafeSelector(
  selectLocation,
  (location: LocationModel) => location.addModal,
);

export const selectLocationEditModal = createDraftSafeSelector(
  selectLocation,
  (location: LocationModel) => location.editModal,
);

export const selectLocationDeleteModal = createDraftSafeSelector(
  selectLocation,
  (location: LocationModel) => location.deleteModal,
);

export const selectLocationRestoreModal = createDraftSafeSelector(
  selectLocation,
  (location: LocationModel) => location.restoreModal,
);

export const selectLocationSelectedLocation = createDraftSafeSelector(
  selectLocation,
  selectLocationSelectedId,
  (location: LocationModel, selectedId: Nullable<string>) => {
    if (!selectedId) {
      return null;
    }
    return location.data.find((item) => item.id === selectedId);
  },
);
