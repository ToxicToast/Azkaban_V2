import { Mapper } from '@azkaban/shared';
import { CompanyTypeORMEntity } from '../entities';
import { CompanyDao } from '../../daos';
import { CompanyFactory } from '@azkaban/inventory-domain';

export class CompanyTypeORMMapper
  implements Mapper<CompanyDao, CompanyTypeORMEntity>
{
  private readonly factory: CompanyFactory = new CompanyFactory();

  domainToEntity(domain: CompanyDao): CompanyTypeORMEntity {
    const { id, title, slug, active, created_at, updated_at, deleted_at } =
      domain;
    const entity = new CompanyTypeORMEntity();
    entity.id = id;
    entity.title = title;
    entity.slug = slug;
    entity.active = active;
    entity.created_at = created_at;
    entity.updated_at = updated_at;
    entity.deleted_at = deleted_at;
    return entity;
  }

  entityToDomain(entity: CompanyTypeORMEntity): CompanyDao {
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
