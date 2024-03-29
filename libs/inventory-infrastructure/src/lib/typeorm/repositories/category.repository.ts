import { CategoryRepository } from '@azkaban/inventory-domain';
import { CategoryTypeORMMapper } from '../mappers';
import { CategoryTypeORMEntity } from '../entities';
import { Nullable } from '@azkaban/shared';
import { CategoryDao } from '../../daos';
import { IsNull, Repository } from 'typeorm';

export class CategoryTypeORMRepository implements CategoryRepository {
  private readonly mapper: CategoryTypeORMMapper = new CategoryTypeORMMapper();

  constructor(private readonly repository: Repository<CategoryTypeORMEntity>) {}

  async save(data: CategoryDao): Promise<CategoryDao> {
    const entity = this.mapper.domainToEntity(data);
    const saved = await this.repository.save(entity);
    return this.mapper.entityToDomain(saved);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

  async findList(): Promise<Array<CategoryDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
    });
    if (entity) {
      return entity.map((entity: CategoryTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }

  async findById(id: string): Promise<Nullable<CategoryDao>> {
    const entity = await this.repository.findOne({
      withDeleted: true,
      where: { id },
    });
    if (entity) {
      return this.mapper.entityToDomain(entity);
    }
    return null;
  }

  async findByParentId(
    parent_id: Nullable<string>,
  ): Promise<Array<CategoryDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
      where: { parent_id: parent_id ?? IsNull() },
    });
    if (entity) {
      return entity.map((entity: CategoryTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }

  async findByTitle(title: string): Promise<CategoryDao> {
    const entity = await this.repository.findOne({
      withDeleted: true,
      where: { title: title },
    });
    if (entity) {
      return this.mapper.entityToDomain(entity);
    }
    return null;
  }
}
