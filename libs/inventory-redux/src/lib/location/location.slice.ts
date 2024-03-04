import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { locationState } from './location.state';
import { LocationModel } from './location.model';
import { onFullfiled, onPending, onRejected } from './location.extraReducer';
import {
  setAddModalAction,
  setDeleteModalAction,
  setEditModalAction,
  setParentModalAction,
  setRestoreModalAction,
  setStatusModalAction,
} from './location.reducer';

export const locationSlice = createSlice({
  name: 'location',
  initialState: locationState,
  reducers: {
    setStatusModal: setStatusModalAction,
    setParentModal: setParentModalAction,
    setAddModal: setAddModalAction,
    setEditModal: setEditModalAction,
    setDeleteModal: setDeleteModalAction,
    setRestoreModal: setRestoreModalAction,
  },
  extraReducers: (builder: ActionReducerMapBuilder<LocationModel>) => {
    onPending(builder);
    onFullfiled(builder);
    onRejected(builder);
  },
});

export const {
  setStatusModal,
  setParentModal,
  setAddModal,
  setEditModal,
  setDeleteModal,
  setRestoreModal,
} = locationSlice.actions;

export default locationSlice.reducer;
