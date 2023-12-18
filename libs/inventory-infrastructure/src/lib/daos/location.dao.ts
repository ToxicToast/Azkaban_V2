import { Nullable } from '@azkaban/shared';

export interface LocationDao {
  id: string;
  parent_id: Nullable<string>;
  title: string;
  slug: string;
  freezer: boolean;
  active: boolean;
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  isParent: boolean;
  isChild: boolean;
  isActive: boolean;
  isUpdated: boolean;
  isDeleted: boolean;
  isFreezer: boolean;
}
