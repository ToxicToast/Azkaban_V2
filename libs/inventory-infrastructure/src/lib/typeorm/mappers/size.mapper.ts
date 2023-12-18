import { Mapper } from '@azkaban/shared';
import { SizeDao } from '../../daos';
import { SizeTypeORMEntity } from '../entities';
import { SizeFactory } from '@azkaban/inventory-domain';

export class SizeTypeORMMapper implements Mapper<SizeDao, SizeTypeORMEntity> {
  private readonly factory: SizeFactory = new SizeFactory();
  domainToEntity(domain: SizeDao): SizeTypeORMEntity {
    const { id, title, slug, active, created_at, updated_at, deleted_at } =
      domain;
    const entity = new SizeTypeORMEntity();
    entity.id = id;
    entity.title = title;
    entity.slug = slug;
    entity.active = active;
    entity.created_at = created_at;
    entity.updated_at = updated_at;
    entity.deleted_at = deleted_at;
    return entity;
  }
  entityToDomain(entity: SizeTypeORMEntity): SizeDao {
    const { id, title, slug, active, created_at, updated_at, deleted_at } =
      entity;
    const aggregate = this.factory.reconstitute({
      id,
      title,
      slug,
      active,
      created_at,
      updated_at,
      deleted_at,
      isUpdated: !!updated_at,
      isDeleted: !!deleted_at,
      isActive: active,
    });
    return this.factory.constitute(aggregate);
  }
}
