import { AggregateHelper, Domain, Nullable } from '@azkaban/shared';
import { ItemDetailAnemic } from '@azkaban/inventory-domain';

interface ItemDetailAggregateHelper {
  created_at: Date;
  updated_at: Nullable<Date>;
  deleted_at: Nullable<Date>;
  active: boolean;
  title: string;
  slug: string;
}

export class ItemDetailAggregate
  extends AggregateHelper<ItemDetailAggregateHelper>
  implements Domain<ItemDetailAnemic>
{
  constructor(
    private readonly id: string,
    private item_id: string,
    private purchase_date: Date,
    private expiration_date: Nullable<Date>,
    private opening_date: Nullable<Date>,
    private returnable: boolean,
    private active: boolean,
    private readonly created_at: Date,
    private updated_at: Nullable<Date>,
    private deleted_at: Nullable<Date>
  ) {
    super({
      created_at,
      updated_at,
      deleted_at,
      active,
      title: '',
      slug: '',
    });
  }

  isExpired(): boolean {
    if (this.expiration_date !== null) {
      const date = new Date().getTime();
      return date > this.expiration_date.getTime();
    }
    return false;
  }

  isOpen(): boolean {
    return !!this.opening_date;
  }

  toAnemic(): ItemDetailAnemic {
    return {
      id: this.id,
      item_id: this.item_id,
      purchase_date: this.purchase_date,
      expiration_date: this.expiration_date,
      opening_date: this.opening_date,
      active: this.getActive(),
      returnable: this.returnable,
      created_at: this.getCreatedAt(),
      updated_at: this.getUpdatedAt(),
      deleted_at: this.getDeletedAt(),
      isUpdated: this.isUpdated(),
      isDeleted: this.isDeleted(),
      isActive: this.isActive(),
      isExpired: this.isExpired(),
      isOpen: this.isOpen(),
      isReturnable: this.returnable,
    };
  }

  updateItemId(item_id: string): void {
    this.item_id = item_id;
    this.updateUpdatedAt();
  }

  updatePurchaseDate(purchase_date: Date): void {
    this.purchase_date = purchase_date;
    this.updateUpdatedAt();
  }

  updateExpirationDate(expiration_date: Nullable<Date>): void {
    this.expiration_date = expiration_date;
    this.updateUpdatedAt();
  }

  updateOpeningDate(opening_date: Nullable<Date>): void {
    this.opening_date = opening_date;
    this.updateUpdatedAt();
  }

  updateReturnable(returnable: boolean): void {
    this.returnable = returnable;
    this.updateUpdatedAt();
  }
}
