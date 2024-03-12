import { RootState } from '../store';
import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { BrandModel } from './brand.model';

const selectBrand = (state: RootState) => state.brand;

export const selectBrandApiStatus = createDraftSafeSelector(
  selectBrand,
  (brand: BrandModel) => brand.status,
);

export const selectBrandData = createDraftSafeSelector(
  selectBrand,
  (brand: BrandModel) => brand.data,
);

export const selectBrandSelectedId = createDraftSafeSelector(
  selectBrand,
  (brand: BrandModel) => brand.selectedId,
);

export const selectBrandSelectedBrand = createDraftSafeSelector(
  selectBrand,
  (brand: BrandModel) => brand.selectedBrand,
);

export const selectBrandStatusModal = createDraftSafeSelector(
  selectBrand,
  (brand: BrandModel) => brand.statusModal,
);

export const selectBrandAddModal = createDraftSafeSelector(
  selectBrand,
  (brand: BrandModel) => brand.addModal,
);

export const selectBrandEditModal = createDraftSafeSelector(
  selectBrand,
  (brand: BrandModel) => brand.editModal,
);

export const selectBrandDeleteModal = createDraftSafeSelector(
  selectBrand,
  (brand: BrandModel) => brand.deleteModal,
);

export const selectBrandRestoreModal = createDraftSafeSelector(
  selectBrand,
  (brand: BrandModel) => brand.restoreModal,
);
