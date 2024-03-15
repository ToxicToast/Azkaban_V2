import { Mapper } from '@azkaban/shared';
import { ItemDao } from '../../daos';
import { ItemTypeORMEntity } from '../entities';
import { ItemFactory } from '@azkaban/inventory-domain';

export class ItemTypeORMMapper implements Mapper<ItemDao, ItemTypeORMEntity> {
  private readonly factory = new ItemFactory();
  domainToEntity(domain: ItemDao): ItemTypeORMEntity {
    const {
      id,
      category_id,
      location_id,
      company_id,
      size_id,
      type_id,
      warehouse_id,
      current_sku,
      min_sku,
      max_sku,
      ean,
      price,
      title,
      slug,
      active,
      created_at,
      updated_at,
      deleted_at,
    } = domain;
    const entity = new ItemTypeORMEntity();
    entity.id = id;
    entity.category_id = category_id;
    entity.location_id = location_id;
    entity.company_id = company_id;
    entity.size_id = size_id;
    entity.type_id = type_id;
    entity.warehouse_id = warehouse_id;
    entity.title = title;
    entity.slug = slug;
    entity.current_sku = current_sku;
    entity.min_sku = min_sku;
    entity.max_sku = max_sku;
    entity.ean = ean;
    entity.price = price;
    entity.active = active;
    entity.created_at = created_at;
    entity.updated_at = updated_at;
    entity.deleted_at = deleted_at;
    return entity;
  }
  entityToDomain(entity: ItemTypeORMEntity): ItemDao {
    const {
      id,
      category_id,
      location_id,
      company_id,
      size_id,
      type_id,
      warehouse_id,
      current_sku,
      min_sku,
      max_sku,
      ean,
      price,
      title,
      slug,
      active,
      created_at,
      updated_at,
      deleted_at,
    } = entity;
    const aggregate = this.factory.reconstitute({
      id,
      category_id,
      location_id,
      company_id,
      size_id,
      type_id,
      warehouse_id,
      current_sku,
      min_sku,
      max_sku,
      ean,
      price,
      title,
      slug,
      active,
      created_at,
      updated_at,
      deleted_at,
      isStockAlert: current_sku <= min_sku,
      isOverStocked: current_sku >= max_sku,
      isUpdated: !!updated_at,
      isDeleted: !!deleted_at,
      isActive: active,
    });
    return this.factory.constitute(aggregate);
  }
}
