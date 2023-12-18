import { Factory, FactoryConstituteHelper, UuidHelper } from '@azkaban/shared';
import {
  ItemDetailAggregate,
  ItemDetailAnemic,
  ItemDetailData,
} from '@azkaban/inventory-domain';

export class ItemDetailFactory
  extends FactoryConstituteHelper<ItemDetailAnemic>
  implements Factory<ItemDetailAnemic, ItemDetailAggregate, ItemDetailData>
{
  reconstitute(anemic: ItemDetailAnemic): ItemDetailAggregate {
    return new ItemDetailAggregate(
      anemic.id,
      anemic.item_id,
      anemic.purchase_date,
      anemic.expiration_date,
      anemic.opening_date,
      anemic.isReturnable,
      anemic.isActive,
      anemic.created_at,
      anemic.updated_at,
      anemic.deleted_at
    );
  }

  createFactory(data: ItemDetailData): ItemDetailAggregate {
    const id = UuidHelper.create().value;
    return new ItemDetailAggregate(
      id,
      data.item_id,
      data.purchase_date,
      data.expiration_date ?? null,
      data.opening_date ?? null,
      data.returnable ?? false,
      data.active ?? false,
      new Date(),
      null,
      null
    );
  }
}
