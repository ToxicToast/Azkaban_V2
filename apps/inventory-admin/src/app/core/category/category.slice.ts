import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { categoryState } from './category.state';
import { CategoryModel } from './category.model';
import { onFullfiled, onPending, onRejected } from './category.extraReducer';
import {
  setAddModalAction,
  setChildModalAction,
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
    setChildModal: setChildModalAction,
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
  setChildModal,
  setAddModal,
  setEditModal,
  setDeleteModal,
  setRestoreModal,
} = categorySlice.actions;
export default categorySlice.reducer;
