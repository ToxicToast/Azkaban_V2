import { Optional } from '@azkaban/shared';
import { Nullable } from 'vitest';

export interface CreateItemDto {
  category_id?: Optional<Nullable<string>>;
  company_id?: Optional<Nullable<string>>;
  location_id?: Optional<Nullable<string>>;
  size_id?: Optional<Nullable<string>>;
  type_id?: Optional<Nullable<string>>;
  title: string;
  current_sku?: Optional<number>;
  min_sku?: Optional<number>;
  max_sku?: Optional<number>;
  ean?: Optional<Nullable<string>>;
  price?: Optional<Nullable<number>>;
  active?: Optional<boolean>;
}

export interface UpdateItemDto {
  category_id?: Optional<Nullable<string>>;
  company_id?: Optional<Nullable<string>>;
  location_id?: Optional<Nullable<string>>;
  size_id?: Optional<Nullable<string>>;
  type_id?: Optional<Nullable<string>>;
  title?: Optional<string>;
  slug?: Optional<string>;
  current_sku?: Optional<number>;
  min_sku?: Optional<number>;
  max_sku?: Optional<number>;
  ean?: Optional<Nullable<string>>;
  price?: Optional<Nullable<number>>;
}
