import { Anemic, Nullable } from '@azkaban/shared';

export interface ItemDetailAnemic extends Anemic {
  readonly item_id: string;
  readonly purchase_date: Date;
  readonly expiration_date: Nullable<Date>;
  readonly opening_date: Nullable<Date>;
  readonly isReturnable: boolean;
  readonly isExpired: boolean;
  readonly isOpen: boolean;
  readonly active: boolean;
}
