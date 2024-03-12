import { Brand } from './brand.interface';
import { Nullable } from '@azkaban/shared';
import { Status } from '../status.enum';

export interface BrandModel {
  status: Status;
  data: Array<Brand>;
  selectedId: Nullable<string>;
  selectedBrand: Nullable<Brand>;
  statusModal: boolean;
  addModal: boolean;
  editModal: boolean;
  deleteModal: boolean;
  restoreModal: boolean;
}
