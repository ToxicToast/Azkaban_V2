import { CategoryModel } from './category.model';

export const categoryState: CategoryModel = {
  status: 'unknown',
  data: [],
  selectedId: null,
  selectedCategory: null,
  statusModal: false,
  parentModal: false,
  childModal: false,
  addModal: false,
  editModal: false,
  deleteModal: false,
  restoreModal: false,
};
