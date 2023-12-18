import {
  Factory,
  FactoryConstituteHelper,
  SlugHelper,
  UuidHelper,
} from '@azkaban/shared';
import { TypeAnemic } from '../anemics';
import { TypeAggregate } from '../aggregates';
import { TypeData } from '../data';

export class TypeFactory
  extends FactoryConstituteHelper<TypeAnemic>
  implements Factory<TypeAnemic, TypeAggregate, TypeData>
{
  reconstitute(anemic: TypeAnemic): TypeAggregate {
    const { id, title, slug, isActive, created_at, updated_at, deleted_at } =
      anemic;
    return new TypeAggregate(
      id,
      title,
      slug,
      isActive,
      created_at,
      updated_at,
      deleted_at
    );
  }

  createFactory(data: TypeData): TypeAggregate {
    const id = UuidHelper.create().value;
    const slug = SlugHelper.create(data.title).value;
    return new TypeAggregate(
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
