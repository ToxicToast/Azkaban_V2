import {
  Factory,
  FactoryConstituteHelper,
  SlugHelper,
  UuidHelper,
} from '@azkaban/shared';
import { LocationAnemic } from '../anemics';
import { LocationAggregate } from '../aggregates';
import { LocationData } from '../data';

export class LocationFactory
  extends FactoryConstituteHelper<LocationAnemic>
  implements Factory<LocationAnemic, LocationAggregate, LocationData>
{
  reconstitute(anemic: LocationAnemic): LocationAggregate {
    const {
      id,
      parent_id,
      title,
      slug,
      isFreezer,
      isActive,
      created_at,
      updated_at,
      deleted_at,
    } = anemic;
    return new LocationAggregate(
      id,
      parent_id,
      title,
      slug,
      isFreezer,
      isActive,
      created_at,
      updated_at,
      deleted_at
    );
  }

  createFactory(data: LocationData): LocationAggregate {
    const id = UuidHelper.create().value;
    const slug = SlugHelper.create(data.title).value;
    return new LocationAggregate(
      id,
      data.parent_id ?? null,
      data.title,
      slug,
      data.freezer,
      data.active ?? false,
      new Date(),
      null,
      null
    );
  }
}
