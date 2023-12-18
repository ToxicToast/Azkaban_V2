import { Mapper } from '@azkaban/shared';
import { LocationDao } from '../../daos';
import { LocationTypeORMEntity } from '../entities';
import { LocationFactory } from '@azkaban/inventory-domain';

export class LocationTypeORMMapper
  implements Mapper<LocationDao, LocationTypeORMEntity>
{
  private readonly factory: LocationFactory = new LocationFactory();

  domainToEntity(domain: LocationDao): LocationTypeORMEntity {
    const {
      id,
      parent_id,
      title,
      slug,
      freezer,
      active,
      created_at,
      updated_at,
      deleted_at,
    } = domain;
    const entity = new LocationTypeORMEntity();
    entity.id = id;
    entity.parent_id = parent_id;
    entity.title = title;
    entity.slug = slug;
    entity.freezer = freezer;
    entity.active = active;
    entity.created_at = created_at;
    entity.updated_at = updated_at;
    entity.deleted_at = deleted_at;
    return entity;
  }

  entityToDomain(entity: LocationTypeORMEntity): LocationDao {
    const {
      id,
      parent_id,
      title,
      slug,
      freezer,
      active,
      created_at,
      updated_at,
      deleted_at,
    } = entity;
    const aggregate = this.factory.reconstitute({
      id,
      parent_id,
      title,
      slug,
      freezer,
      active,
      created_at,
      updated_at,
      deleted_at,
      isUpdated: !!updated_at,
      isDeleted: !!deleted_at,
      isActive: active,
      isFreezer: freezer,
      isParent: parent_id === null,
      isChild: parent_id !== null,
    });
    return this.factory.constitute(aggregate);
  }
}
