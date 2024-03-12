import { BrandModel } from './brand.model';
import { Status } from '../status.enum';

export const brandState: BrandModel = {
  status: Status.UNKNOWN,
  data: [],
  selectedId: null,
  selectedBrand: null,
  statusModal: false,
  addModal: false,
  editModal: false,
  deleteModal: false,
  restoreModal: false,
};
