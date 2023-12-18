import { Nullable } from '@azkaban/shared';

export interface SizeDao {
  id: string;
  title: string;
  slug: string;
  active: boolean;
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  isActive: boolean;
  isUpdated: boolean;
  isDeleted: boolean;
}
