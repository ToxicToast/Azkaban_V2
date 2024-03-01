import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { BrandModel } from './brand.model';
import { brandApi } from './brand.api';
import { Brand } from './brand.interface';
import { Nullable } from '@azkaban/shared';

export const onPending = (builder: ActionReducerMapBuilder<BrandModel>) => {
  builder.addMatcher(
    brandApi.endpoints?.fetchBrandList.matchPending,
    (state: BrandModel) => {
      state.status = 'loading';
    },
  );

  builder.addMatcher(
    brandApi.endpoints?.fetchBrandSingle.matchPending,
    (state: BrandModel) => {
      state.status = 'loading';
    },
  );

  builder.addMatcher(
    brandApi.endpoints.addBrand.matchPending,
    (state: BrandModel) => {
      state.status = 'loading';
    },
  );

  builder.addMatcher(
    brandApi.endpoints.updateBrand.matchPending,
    (state: BrandModel) => {
      state.status = 'loading';
    },
  );

  builder.addMatcher(
    brandApi.endpoints.deleteBrand.matchPending,
    (state: BrandModel) => {
      state.status = 'loading';
    },
  );

  builder.addMatcher(
    brandApi.endpoints.restoreBrand.matchPending,
    (state: BrandModel) => {
      state.status = 'loading';
    },
  );
};

export const onFullfiled = (builder: ActionReducerMapBuilder<BrandModel>) => {
  builder.addMatcher(
    brandApi.endpoints?.fetchBrandList.matchFulfilled,
    (state: BrandModel, action: PayloadAction<Array<Brand>>) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
  );

  builder.addMatcher(
    brandApi.endpoints?.fetchBrandSingle.matchFulfilled,
    (state: BrandModel, action: PayloadAction<Nullable<Brand>>) => {
      state.status = 'loaded';
      state.selectedBrand = action.payload;
      state.selectedId = action.payload?.id ?? null;
    },
  );

  builder.addMatcher(
    brandApi.endpoints?.addBrand.matchFulfilled,
    (state: BrandModel) => {
      state.status = 'loaded';
      state.addModal = false;
    },
  );

  builder.addMatcher(
    brandApi.endpoints?.updateBrand.matchFulfilled,
    (state: BrandModel) => {
      state.status = 'loaded';
      state.editModal = false;
      state.statusModal = false;
      state.selectedId = null;
      state.selectedBrand = null;
    },
  );

  builder.addMatcher(
    brandApi.endpoints?.deleteBrand.matchFulfilled,
    (state: BrandModel) => {
      state.status = 'loaded';
      state.deleteModal = false;
      state.selectedId = null;
      state.selectedBrand = null;
    },
  );

  builder.addMatcher(
    brandApi.endpoints?.restoreBrand.matchFulfilled,
    (state: BrandModel) => {
      state.status = 'loaded';
      state.restoreModal = false;
      state.selectedId = null;
      state.selectedBrand = null;
    },
  );
};

export const onRejected = (builder: ActionReducerMapBuilder<BrandModel>) => {
  builder.addMatcher(
    brandApi.endpoints?.fetchBrandList.matchRejected,
    (state: BrandModel) => {
      state.status = 'error';
    },
  );

  builder.addMatcher(
    brandApi.endpoints?.fetchBrandSingle.matchRejected,
    (state: BrandModel) => {
      state.status = 'error';
      state.selectedBrand = null;
      state.selectedId = null;
    },
  );

  builder.addMatcher(
    brandApi.endpoints?.addBrand.matchRejected,
    (state: BrandModel) => {
      state.status = 'error';
      state.addModal = false;
    },
  );

  builder.addMatcher(
    brandApi.endpoints?.updateBrand.matchRejected,
    (state: BrandModel) => {
      state.status = 'error';
      state.editModal = false;
      state.statusModal = false;
      state.selectedId = null;
      state.selectedBrand = null;
    },
  );

  builder.addMatcher(
    brandApi.endpoints?.deleteBrand.matchRejected,
    (state: BrandModel) => {
      state.status = 'error';
      state.deleteModal = false;
      state.selectedId = null;
      state.selectedBrand = null;
    },
  );

  builder.addMatcher(
    brandApi.endpoints?.restoreBrand.matchRejected,
    (state: BrandModel) => {
      state.status = 'error';
      state.restoreModal = false;
      state.selectedId = null;
      state.selectedBrand = null;
    },
  );
};
