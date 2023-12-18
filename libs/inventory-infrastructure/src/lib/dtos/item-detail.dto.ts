import { Optional } from '@azkaban/shared';

export interface CreateItemDetailDto {
  item_id: string;
  purchase_date: Date;
  expiration_date?: Optional<Date>;
  opening_date?: Optional<Date>;
  returnable?: Optional<boolean>;
  active?: Optional<boolean>;
}
