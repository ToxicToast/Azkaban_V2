import { Mapper } from '@azkaban/shared';
import { CategoryFactory } from '@azkaban/inventory-domain';
import { CategoryTypeORMEntity } from '../entities';
import { CategoryDao } from '../../daos';

export class CategoryTypeORMMapper
  implements Mapper<CategoryDao, CategoryTypeORMEntity>
{
  private readonly factory: CategoryFactory = new CategoryFactory();

  domainToEntity(domain: CategoryDao): CategoryTypeORMEntity {
    const {
      id,
      parent_id,
      title,
      slug,
      active,
      created_at,
      updated_at,
      deleted_at,
    } = domain;
    const entity = new CategoryTypeORMEntity();
    entity.id = id;
    entity.parent_id = parent_id;
    entity.title = title;
    entity.slug = slug;
    entity.active = active;
    entity.created_at = created_at;
    entity.updated_at = updated_at;
    entity.deleted_at = deleted_at;
    return entity;
  }

  entityToDomain(entity: CategoryTypeORMEntity): CategoryDao {
    const {
      id,
      parent_id,
      title,
      slug,
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
      active,
      created_at,
      updated_at,
      deleted_at,
      isUpdated: !!updated_at,
      isDeleted: !!deleted_at,
      isActive: active,
      isParent: parent_id === null,
      isChild: parent_id !== null,
    });
    return this.factory.constitute(aggregate);
  }
}
