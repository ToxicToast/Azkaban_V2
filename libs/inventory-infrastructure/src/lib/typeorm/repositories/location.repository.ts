import { LocationRepository } from '@azkaban/inventory-domain';
import { LocationTypeORMMapper } from '../mappers';
import { Repository } from 'typeorm';
import { LocationTypeORMEntity } from '../entities';
import { LocationDao } from '../../daos';
import { Nullable } from '@azkaban/shared';

export class LocationTypeORMRepository implements LocationRepository {
  private readonly mapper: LocationTypeORMMapper = new LocationTypeORMMapper();

  constructor(private readonly repository: Repository<LocationTypeORMEntity>) {}

  async save(data: LocationDao): Promise<string> {
    const entity = this.mapper.domainToEntity(data);
    await this.repository.save(entity);
    return entity.id;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

  async findList(): Promise<Array<LocationDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
    });
    if (entity) {
      return entity.map((entity: LocationTypeORMEntity) =>
        this.mapper.entityToDomain(entity)
      );
    }
    return [];
  }

  async findById(id: string): Promise<Nullable<LocationDao>> {
    const entity = await this.repository.findOne({
      withDeleted: true,
      where: { id },
    });
    if (entity) {
      return this.mapper.entityToDomain(entity);
    }
    return null;
  }

  async findByTitle(title: string): Promise<Nullable<LocationDao>> {
    const entity = await this.repository.findOne({
      withDeleted: true,
      where: { title },
    });
    if (entity) {
      return this.mapper.entityToDomain(entity);
    }
    return null;
  }

  async findByParentId(parent_id: string): Promise<Array<LocationDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
      where: { parent_id },
    });
    if (entity) {
      return entity.map((entity: LocationTypeORMEntity) =>
        this.mapper.entityToDomain(entity)
      );
    }
    return [];
  }

  async findByFreezer(isFreezer: boolean): Promise<Array<LocationDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
      where: { freezer: isFreezer },
    });
    if (entity) {
      return entity.map((entity: LocationTypeORMEntity) =>
        this.mapper.entityToDomain(entity)
      );
    }
    return [];
  }
}
