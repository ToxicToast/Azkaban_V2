import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { categoryState } from './category.state';
import { CategoryModel } from './category.model';
import { onFullfiled, onPending, onRejected } from './category.extraReducer';
import {
  setAddModalAction,
  setDeleteModalAction,
  setEditModalAction,
  setParentModalAction,
  setRestoreModalAction,
  setStatusModalAction,
} from './category.reducer';

export const categorySlice = createSlice({
  name: 'category',
  initialState: categoryState,
  reducers: {
    setStatusModal: setStatusModalAction,
    setParentModal: setParentModalAction,
    setAddModal: setAddModalAction,
    setEditModal: setEditModalAction,
    setDeleteModal: setDeleteModalAction,
    setRestoreModal: setRestoreModalAction,
  },
  extraReducers: (builder: ActionReducerMapBuilder<CategoryModel>) => {
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
} = categorySlice.actions;
export default categorySlice.reducer;
