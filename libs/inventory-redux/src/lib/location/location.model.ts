import { Location } from './location.interface';
import { Nullable } from '@azkaban/shared';
import { Status } from '../status.enum';

export interface LocationModel {
  status: Status;
  data: Array<Location>;
  selectedId: Nullable<string>;
  selectedLocation: Nullable<Location>;
  parentModal: boolean;
  statusModal: boolean;
  addModal: boolean;
  editModal: boolean;
  deleteModal: boolean;
  restoreModal: boolean;
}
