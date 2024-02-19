import { BrandModel } from './brand.model';

export const brandState: BrandModel = {
  status: 'unknown',
  data: [],
  selectedId: null,
  selectedBrand: null,
  statusModal: false,
  addModal: false,
  editModal: false,
  deleteModal: false,
  restoreModal: false,
};
