import { CategoryModel } from './category.model';
import { PayloadAction } from '@reduxjs/toolkit';

export function setStatusModalAction(
  state: CategoryModel,
  action: PayloadAction<boolean>
) {
  state.statusModal = action.payload;
}
