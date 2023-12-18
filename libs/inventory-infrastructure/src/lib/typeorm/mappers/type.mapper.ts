import { Mapper } from '@azkaban/shared';
import { TypeDao } from '../../daos';
import { TypeTypeORMEntity } from '../entities';
import { TypeFactory } from '@azkaban/inventory-domain';

export class TypeTypeORMMapper implements Mapper<TypeDao, TypeTypeORMEntity> {
  private readonly factory: TypeFactory = new TypeFactory();
  domainToEntity(domain: TypeDao): TypeTypeORMEntity {
    const { id, title, slug, active, created_at, updated_at, deleted_at } =
      domain;
    const entity = new TypeTypeORMEntity();
    entity.id = id;
    entity.title = title;
    entity.slug = slug;
    entity.active = active;
    entity.created_at = created_at;
    entity.updated_at = updated_at;
    entity.deleted_at = deleted_at;
    return entity;
  }
  entityToDomain(entity: TypeTypeORMEntity): TypeDao {
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
