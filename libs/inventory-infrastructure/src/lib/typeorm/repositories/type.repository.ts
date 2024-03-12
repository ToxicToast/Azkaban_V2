import { TypeRepository } from '@azkaban/inventory-domain';
import { TypeTypeORMMapper } from '../mappers';
import { Repository } from 'typeorm';
import { TypeTypeORMEntity } from '../entities';
import { TypeDao } from '../../daos';
import { Nullable } from '@azkaban/shared';

export class TypeTypeORMRepository implements TypeRepository {
  private readonly mapper: TypeTypeORMMapper = new TypeTypeORMMapper();

  constructor(private readonly repository: Repository<TypeTypeORMEntity>) {}

  async save(data: TypeDao): Promise<TypeDao> {
    const entity = this.mapper.domainToEntity(data);
    const saved = await this.repository.save(entity);
    return this.mapper.entityToDomain(saved);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

  async findList(): Promise<Array<TypeDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
    });
    if (entity) {
      return entity.map((entity: TypeTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }

  async findById(id: string): Promise<Nullable<TypeDao>> {
    const entity = await this.repository.findOne({
      withDeleted: true,
      where: { id },
    });
    if (entity) {
      return this.mapper.entityToDomain(entity);
    }
    return null;
  }

  async findByTitle(title: string): Promise<Nullable<TypeDao>> {
    const entity = await this.repository.findOne({
      withDeleted: true,
      where: { title },
    });
    if (entity) {
      return this.mapper.entityToDomain(entity);
    }
    return null;
  }
}
