import { Brand } from './brand.interface';
import { Nullable } from '@azkaban/shared';

export interface BrandModel {
  status: 'loading' | 'loaded' | 'error' | 'unknown';
  data: Array<Brand>;
  selectedId: Nullable<string>;
  selectedBrand: Nullable<Brand>;
  statusModal: boolean;
  addModal: boolean;
  editModal: boolean;
  deleteModal: boolean;
  restoreModal: boolean;
}
