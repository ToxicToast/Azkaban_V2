import { LocationModel } from './location.model';
import { Status } from '../status.enum';

export const locationState: LocationModel = {
  status: Status.UNKNOWN,
  data: [],
  selectedId: null,
  selectedLocation: null,
  parentModal: false,
  statusModal: false,
  addModal: false,
  editModal: false,
  deleteModal: false,
  restoreModal: false,
};
