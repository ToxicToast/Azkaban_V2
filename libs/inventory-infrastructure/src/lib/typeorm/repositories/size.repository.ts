import { SizeRepository } from '@azkaban/inventory-domain';
import { SizeTypeORMMapper } from '../mappers';
import { Repository } from 'typeorm';
import { SizeTypeORMEntity } from '../entities';
import { SizeDao } from '../../daos';
import { Nullable } from '@azkaban/shared';

export class SizeTypeORMRepository implements SizeRepository {
  private readonly mapper: SizeTypeORMMapper = new SizeTypeORMMapper();

  constructor(private readonly repository: Repository<SizeTypeORMEntity>) {}

  async save(data: SizeDao): Promise<SizeDao> {
    const entity = this.mapper.domainToEntity(data);
    const saved = await this.repository.save(entity);
    return this.mapper.entityToDomain(saved);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

  async findList(): Promise<Array<SizeDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
    });
    if (entity) {
      return entity.map((entity: SizeTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }

  async findById(id: string): Promise<Nullable<SizeDao>> {
    const entity = await this.repository.findOne({
      withDeleted: true,
      where: { id },
    });
    if (entity) {
      return this.mapper.entityToDomain(entity);
    }
    return null;
  }

  async findByTitle(title: string): Promise<Nullable<SizeDao>> {
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
