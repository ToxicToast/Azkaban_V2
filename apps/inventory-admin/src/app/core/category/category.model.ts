import { Nullable } from '@azkaban/shared';
import { Category } from './category.interface';

export interface CategoryModel {
  status: 'loading' | 'loaded' | 'error' | 'unknown';
  data: Array<Category>;
  selectedId: Nullable<string>;
  selectedCategory: Nullable<Category>;
  statusModal: boolean;
  parentModal: boolean;
  childModal: boolean;
  editModal: boolean;
  deleteModal: boolean;
}
