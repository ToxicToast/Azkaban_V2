import { Nullable } from '@azkaban/shared';

export interface Location {
  id: string;
  parent_id: Nullable<string>;
  title: string;
  slug: string;
  freezer: boolean;
  active: boolean;
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  isUpdated: boolean;
  isDeleted: boolean;
  isActive: boolean;
  isFreezer: boolean;
  isParent: boolean;
  isChild: boolean;
}
