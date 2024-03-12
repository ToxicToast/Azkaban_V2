import { ItemDetailRepository } from '@azkaban/inventory-domain';
import { ItemDetailTypeORMMapper } from '../mappers';
import { Repository } from 'typeorm';
import { ItemDetailTypeORMEntity } from '../entities';
import { ItemDetailDao } from '../../daos';
import { Nullable } from '@azkaban/shared';

export class ItemDetailTypeORMRepository implements ItemDetailRepository {
  private readonly mapper: ItemDetailTypeORMMapper =
    new ItemDetailTypeORMMapper();

  constructor(
    private readonly repository: Repository<ItemDetailTypeORMEntity>,
  ) {}

  async save(data: ItemDetailDao): Promise<ItemDetailDao> {
    const entity = this.mapper.domainToEntity(data);
    const saved = await this.repository.save(entity);
    return this.mapper.entityToDomain(saved);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

  async findList(): Promise<Array<ItemDetailDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
    });
    if (entity) {
      return entity.map((entity: ItemDetailTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }

  async findById(id: string): Promise<Nullable<ItemDetailDao>> {
    const entity = await this.repository.findOne({
      withDeleted: true,
      where: { id },
    });
    if (entity) {
      return this.mapper.entityToDomain(entity);
    }
    return null;
  }

  async findByItemId(item_id: string): Promise<Array<ItemDetailDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
      where: { item_id },
    });
    if (entity) {
      return entity.map((entity: ItemDetailTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return null;
  }
}
