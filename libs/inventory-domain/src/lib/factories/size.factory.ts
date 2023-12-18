import {
  Factory,
  FactoryConstituteHelper,
  SlugHelper,
  UuidHelper,
} from '@azkaban/shared';
import { SizeAnemic } from '../anemics';
import { SizeAggregate } from '../aggregates';
import { SizeData } from '../data';

export class SizeFactory
  extends FactoryConstituteHelper<SizeAnemic>
  implements Factory<SizeAnemic, SizeAggregate, SizeData>
{
  reconstitute(anemic: SizeAnemic): SizeAggregate {
    const { id, title, slug, isActive, created_at, updated_at, deleted_at } =
      anemic;
    return new SizeAggregate(
      id,
      title,
      slug,
      isActive,
      created_at,
      updated_at,
      deleted_at
    );
  }

  createFactory(data: SizeData): SizeAggregate {
    const id = UuidHelper.create().value;
    const slug = SlugHelper.create(data.title).value;
    return new SizeAggregate(
      id,
      data.title,
      slug,
      data.active ?? false,
      new Date(),
      null,
      null
    );
  }
}
