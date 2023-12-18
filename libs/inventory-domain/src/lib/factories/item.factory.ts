import {
  Factory,
  FactoryConstituteHelper,
  SlugHelper,
  UuidHelper,
} from '@azkaban/shared';
import { ItemAnemic } from '../anemics';
import { ItemAggregate } from '../aggregates';
import { ItemData } from '../data';

export class ItemFactory
  extends FactoryConstituteHelper<ItemAnemic>
  implements Factory<ItemAnemic, ItemAggregate, ItemData>
{
  reconstitute(anemic: ItemAnemic): ItemAggregate {
    return new ItemAggregate(
      anemic.id,
      anemic.category_id,
      anemic.location_id,
      anemic.company_id,
      anemic.size_id,
      anemic.type_id,
      anemic.title,
      anemic.slug,
      anemic.current_sku,
      anemic.min_sku,
      anemic.max_sku,
      anemic.ean,
      anemic.price,
      anemic.isActive,
      anemic.created_at,
      anemic.updated_at,
      anemic.deleted_at
    );
  }

  createFactory(data: ItemData): ItemAggregate {
    const id = UuidHelper.create().value;
    const slug = SlugHelper.create(data.title).value;
    return new ItemAggregate(
      id,
      data.category_id ?? null,
      data.location_id ?? null,
      data.company_id ?? null,
      data.size_id ?? null,
      data.type_id ?? null,
      data.title,
      slug,
      data.current_sku ?? 0,
      data.min_sku ?? 0,
      data.max_sku ?? 0,
      data.ean ?? null,
      data.price ?? null,
      data.active ?? false,
      new Date(),
      null,
      null
    );
  }
}
