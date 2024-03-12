import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { brandState } from './brand.state';
import { BrandModel } from './brand.model';
import {
  setAddModalAction,
  setDeleteModalAction,
  setEditModalAction,
  setRestoreModalAction,
  setStatusModalAction,
} from './brand.reducer';
import { onFullfiled, onPending, onRejected } from './brand.extraReducer';

export const brandSlice = createSlice({
  name: 'brand',
  initialState: brandState,
  reducers: {
    setStatusModal: setStatusModalAction,
    setAddModal: setAddModalAction,
    setEditModal: setEditModalAction,
    setDeleteModal: setDeleteModalAction,
    setRestoreModal: setRestoreModalAction,
  },
  extraReducers: (builder: ActionReducerMapBuilder<BrandModel>) => {
    onPending(builder);
    onFullfiled(builder);
    onRejected(builder);
  },
});

export const {
  setStatusModal,
  setAddModal,
  setEditModal,
  setDeleteModal,
  setRestoreModal,
} = brandSlice.actions;
export default brandSlice.reducer;
