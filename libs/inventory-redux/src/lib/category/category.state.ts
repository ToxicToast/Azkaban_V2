import { CategoryModel } from './category.model';
import { Status } from '../status.enum';

export const categoryState: CategoryModel = {
  status: Status.UNKNOWN,
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
