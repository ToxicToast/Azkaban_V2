import { Nullable } from '@azkaban/shared';

export interface ItemDao {
  id: string;
  category_id: Nullable<string>;
  company_id: Nullable<string>;
  location_id: Nullable<string>;
  size_id: Nullable<string>;
  type_id: Nullable<string>;
  warehouse_id: Nullable<string>;
  title: string;
  slug: string;
  current_sku: number;
  min_sku: number;
  max_sku: number;
  ean: Nullable<string>;
  price: Nullable<number>;
  active: boolean;
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  isActive: boolean;
  isUpdated: boolean;
  isDeleted: boolean;
  isStockAlert: boolean;
  isOverStocked: boolean;
}
