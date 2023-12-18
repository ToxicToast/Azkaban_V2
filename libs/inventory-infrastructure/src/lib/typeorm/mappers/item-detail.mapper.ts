import { Mapper } from '@azkaban/shared';
import { ItemDetailFactory } from '@azkaban/inventory-domain';
import { ItemDetailDao } from '../../daos';
import { ItemDetailTypeORMEntity } from '../entities';

export class ItemDetailTypeORMMapper
  implements Mapper<ItemDetailDao, ItemDetailTypeORMEntity>
{
  private readonly factory: ItemDetailFactory = new ItemDetailFactory();

  domainToEntity(domain: ItemDetailDao): ItemDetailTypeORMEntity {
    const {
      id,
      item_id,
      purchase_date,
      expiration_date,
      opening_date,
      returnable,
      active,
      created_at,
      updated_at,
      deleted_at,
    } = domain;
    const entity = new ItemDetailTypeORMEntity();
    entity.id = id;
    entity.item_id = item_id;
    entity.purchase_date = purchase_date;
    entity.expiration_date = expiration_date;
    entity.opening_date = opening_date;
    entity.returnable = returnable;
    entity.active = active;
    entity.created_at = created_at;
    entity.updated_at = updated_at;
    entity.deleted_at = deleted_at;
    return entity;
  }

  entityToDomain(entity: ItemDetailTypeORMEntity): ItemDetailDao {
    const {
      id,
      item_id,
      purchase_date,
      expiration_date,
      opening_date,
      returnable,
      active,
      created_at,
      updated_at,
      deleted_at,
    } = entity;
    const aggregate = this.factory.reconstitute({
      id,
      item_id,
      purchase_date,
      expiration_date,
      opening_date,
      returnable,
      active,
      created_at,
      updated_at,
      deleted_at,
      isUpdated: !!updated_at,
      isDeleted: !!deleted_at,
      isActive: active,
      isReturnable: returnable,
      isExpired: !!expiration_date && expiration_date < new Date(),
      isOpen: !!opening_date,
    });
    return this.factory.constitute(aggregate);
  }
}
