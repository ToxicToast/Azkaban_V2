import { Nullable } from '@azkaban/shared';

export interface ItemDetailDao {
  id: string;
  item_id: string;
  purchase_date: Date;
  expiration_date: Nullable<Date>;
  opening_date: Nullable<Date>;
  returnable: boolean;
  active: boolean;
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  isActive: boolean;
  isUpdated: boolean;
  isDeleted: boolean;
  isExpired: boolean;
  isOpen: boolean;
}
