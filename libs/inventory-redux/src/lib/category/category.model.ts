import { Nullable } from '@azkaban/shared';
import { Category } from './category.interface';
import { Status } from '../status.enum';

export interface CategoryModel {
  status: Status;
  data: Array<Category>;
  selectedId: Nullable<string>;
  selectedCategory: Nullable<Category>;
  statusModal: boolean;
  parentModal: boolean;
  childModal: boolean;
  addModal: boolean;
  editModal: boolean;
  deleteModal: boolean;
  restoreModal: boolean;
}
