import { Nullable, Optional } from '@azkaban/shared';

export interface ItemDetailData {
  readonly item_id: string;
  readonly purchase_date: Date;
  readonly expiration_date?: Optional<Nullable<Date>>;
  readonly opening_date?: Optional<Nullable<Date>>;
  readonly returnable?: Optional<boolean>;
  readonly active?: Optional<boolean>;
}
