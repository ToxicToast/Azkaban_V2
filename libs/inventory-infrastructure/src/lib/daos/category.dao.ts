import { Nullable } from '@azkaban/shared';

export interface CategoryDao {
  id: string;
  parent_id: Nullable<string>;
  title: string;
  slug: string;
  active: boolean;
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  isParent: boolean;
  isChild: boolean;
  isActive: boolean;
  isUpdated: boolean;
  isDeleted: boolean;
}
