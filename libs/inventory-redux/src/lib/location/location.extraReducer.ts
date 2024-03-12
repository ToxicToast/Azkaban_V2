import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { LocationModel } from './location.model';
import { locationApi } from './location.api';
import { Location } from './location.interface';
import { Nullable } from '@azkaban/shared';
import { Status } from '../status.enum';

export const onPending = (builder: ActionReducerMapBuilder<LocationModel>) => {
  builder.addMatcher(
    locationApi.endpoints?.fetchLocationList.matchPending,
    (state: LocationModel) => {
      state.status = Status.LOADING;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.fetchLocationSingle.matchPending,
    (state: LocationModel) => {
      state.status = Status.LOADING;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.addLocation.matchPending,
    (state: LocationModel) => {
      state.status = Status.LOADING;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.updateLocation.matchPending,
    (state: LocationModel) => {
      state.status = Status.LOADING;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.deleteLocation.matchPending,
    (state: LocationModel) => {
      state.status = Status.LOADING;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.restoreLocation.matchPending,
    (state: LocationModel) => {
      state.status = Status.LOADING;
    },
  );
};
export const onFullfiled = (
  builder: ActionReducerMapBuilder<LocationModel>,
) => {
  builder.addMatcher(
    locationApi.endpoints?.fetchLocationList.matchFulfilled,
    (state: LocationModel, action: PayloadAction<Array<Location>>) => {
      state.status = Status.LOADED;
      state.data = action.payload;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.fetchLocationSingle.matchFulfilled,
    (state: LocationModel, action: PayloadAction<Nullable<Location>>) => {
      state.status = Status.LOADED;
      state.selectedLocation = action.payload;
      state.selectedId = action.payload?.id ?? null;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.addLocation.matchFulfilled,
    (state: LocationModel) => {
      state.status = Status.LOADED;
      state.addModal = false;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.updateLocation.matchFulfilled,
    (state: LocationModel) => {
      state.status = Status.LOADED;
      state.editModal = false;
      state.parentModal = false;
      state.statusModal = false;
      state.selectedId = null;
      state.selectedLocation = null;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.deleteLocation.matchFulfilled,
    (state: LocationModel) => {
      state.status = Status.LOADED;
      state.deleteModal = false;
      state.selectedId = null;
      state.selectedLocation = null;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.restoreLocation.matchFulfilled,
    (state: LocationModel) => {
      state.status = Status.LOADED;
      state.restoreModal = false;
      state.selectedId = null;
      state.selectedLocation = null;
    },
  );
};
export const onRejected = (builder: ActionReducerMapBuilder<LocationModel>) => {
  builder.addMatcher(
    locationApi.endpoints?.fetchLocationList.matchRejected,
    (state: LocationModel) => {
      state.status = Status.ERROR;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.fetchLocationList.matchRejected,
    (state: LocationModel) => {
      state.status = Status.ERROR;
      state.selectedLocation = null;
      state.selectedId = null;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.addLocation.matchRejected,
    (state: LocationModel) => {
      state.status = Status.ERROR;
      state.addModal = false;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.updateLocation.matchRejected,
    (state: LocationModel) => {
      state.status = Status.ERROR;
      state.editModal = false;
      state.parentModal = false;
      state.statusModal = false;
      state.selectedId = null;
      state.selectedLocation = null;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.deleteLocation.matchRejected,
    (state: LocationModel) => {
      state.status = Status.ERROR;
      state.deleteModal = false;
      state.selectedId = null;
      state.selectedLocation = null;
    },
  );

  builder.addMatcher(
    locationApi.endpoints?.restoreLocation.matchRejected,
    (state: LocationModel) => {
      state.status = Status.ERROR;
      state.restoreModal = false;
      state.selectedId = null;
      state.selectedLocation = null;
    },
  );
};
