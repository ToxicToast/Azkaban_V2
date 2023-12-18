import { Nullable, Optional } from '@azkaban/shared';

export interface ItemData {
  readonly category_id?: Optional<Nullable<string>>;
  readonly location_id?: Optional<Nullable<string>>;
  readonly company_id?: Optional<Nullable<string>>;
  readonly size_id?: Optional<Nullable<string>>;
  readonly type_id?: Optional<Nullable<string>>;
  readonly title: string;
  readonly current_sku?: Optional<Nullable<number>>;
  readonly min_sku?: Optional<Nullable<number>>;
  readonly max_sku?: Optional<Nullable<number>>;
  readonly ean?: Optional<Nullable<string>>;
  readonly price?: Optional<Nullable<number>>;
  readonly active?: Optional<boolean>;
}
