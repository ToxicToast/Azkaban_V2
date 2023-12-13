import { CategoryAggregate } from '../aggregates';
import { CategoryAnemic } from '../anemics';
import {
  Factory,
  FactoryConstituteHelper,
  SlugHelper,
  UuidHelper,
} from '@azkaban/shared';
import { CategoryData } from '../data';

export class CategoryFactory
  extends FactoryConstituteHelper<CategoryAnemic>
  implements Factory<CategoryAnemic, CategoryAggregate, CategoryData>
{
  reconstitute(anemic: CategoryAnemic): CategoryAggregate {
    const {
      id,
      parent_id,
      title,
      slug,
      isActive,
      created_at,
      updated_at,
      deleted_at,
    } = anemic;
    return new CategoryAggregate(
      id,
      parent_id,
      title,
      slug,
      isActive,
      created_at,
      updated_at,
      deleted_at
    );
  }

  createFactory(data: CategoryData): CategoryAggregate {
    const id = UuidHelper.create().value;
    const slug = SlugHelper.create(data.title).value;
    return new CategoryAggregate(
      id,
      data.parent_id ?? null,
      data.title,
      slug,
      data.active ?? false,
      new Date(),
      null,
      null
    );
  }
}
