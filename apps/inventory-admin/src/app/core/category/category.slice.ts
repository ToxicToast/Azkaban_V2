import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { categoryState } from './category.state';
import { CategoryModel } from './category.model';
import { onFullfiled, onPending, onRejected } from './category.extraReducer';
import { setStatusModalAction } from './category.reducer';

export const categorySlice = createSlice({
  name: 'category',
  initialState: categoryState,
  reducers: {
    setStatusModal: setStatusModalAction,
  },
  extraReducers: (builder: ActionReducerMapBuilder<CategoryModel>) => {
    onPending(builder);
    onFullfiled(builder);
    onRejected(builder);
  },
});

export const { setStatusModal } = categorySlice.actions;
export default categorySlice.reducer;
