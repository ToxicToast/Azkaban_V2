import { ItemRepository } from '@azkaban/inventory-domain';
import { ItemTypeORMMapper } from '../mappers';
import { Repository } from 'typeorm';
import { ItemTypeORMEntity } from '../entities';
import { ItemDao } from '../../daos';
import { Nullable } from '@azkaban/shared';

export class ItemTypeORMRepository implements ItemRepository {
  private readonly mapper: ItemTypeORMMapper = new ItemTypeORMMapper();

  constructor(private readonly repository: Repository<ItemTypeORMEntity>) {}

  async save(data: ItemDao): Promise<ItemDao> {
    const entity = this.mapper.domainToEntity(data);
    const saved = await this.repository.save(entity);
    return this.mapper.entityToDomain(saved);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

  async findList(): Promise<Array<ItemDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
    });
    if (entity) {
      return entity.map((entity: ItemTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }

  async findById(id: string): Promise<Nullable<ItemDao>> {
    const entity = await this.repository.findOne({
      withDeleted: true,
      where: { id },
    });
    if (entity) {
      return this.mapper.entityToDomain(entity);
    }
    return null;
  }

  async findByTitle(title: string): Promise<Nullable<ItemDao>> {
    const entity = await this.repository.findOne({
      withDeleted: true,
      where: { title },
    });
    if (entity) {
      return this.mapper.entityToDomain(entity);
    }
    return null;
  }

  async findByCategoryId(
    category_id: Nullable<string>,
  ): Promise<Array<ItemDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
      where: { category_id },
    });
    if (entity) {
      return entity.map((entity: ItemTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }

  async findByCompanyId(company_id: Nullable<string>): Promise<Array<ItemDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
      where: { company_id },
    });
    if (entity) {
      return entity.map((entity: ItemTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }

  async findByLocationId(
    location_id: Nullable<string>,
  ): Promise<Array<ItemDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
      where: { location_id },
    });
    if (entity) {
      return entity.map((entity: ItemTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }

  async findBySizeId(size_id: Nullable<string>): Promise<Array<ItemDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
      where: { size_id },
    });
    if (entity) {
      return entity.map((entity: ItemTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }

  async findByTypeId(type_id: Nullable<string>): Promise<Array<ItemDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
      where: { type_id },
    });
    if (entity) {
      return entity.map((entity: ItemTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }

  async findByWarehouseId(
    warehouse_id: Nullable<string>,
  ): Promise<Array<ItemDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
      where: { warehouse_id },
    });
    if (entity) {
      return entity.map((entity: ItemTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }
}
