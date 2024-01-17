import { Nullable } from '@azkaban/shared';

export interface Category {
  id: string;
  parent_id: Nullable<string>;
  title: string;
  slug: string;
  active: boolean;
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  isUpdated: boolean;
  isDeleted: boolean;
  isActive: boolean;
  isParent: boolean;
  isChild: boolean;
}
