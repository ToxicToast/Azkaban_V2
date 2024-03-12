import { CompanyRepository } from '@azkaban/inventory-domain';
import { CompanyTypeORMMapper } from '../mappers';
import { Repository } from 'typeorm';
import { CompanyTypeORMEntity } from '../entities';
import { CompanyDao } from '../../daos';

export class CompanyTypeORMRepository implements CompanyRepository {
  private readonly mapper: CompanyTypeORMMapper = new CompanyTypeORMMapper();

  constructor(private readonly repository: Repository<CompanyTypeORMEntity>) {}

  async save(data: CompanyDao): Promise<CompanyDao> {
    const entity = this.mapper.domainToEntity(data);
    const saved = await this.repository.save(entity);
    return this.mapper.entityToDomain(saved);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

  async findList(): Promise<Array<CompanyDao>> {
    const entity = await this.repository.find({
      withDeleted: true,
    });
    if (entity) {
      return entity.map((entity: CompanyTypeORMEntity) =>
        this.mapper.entityToDomain(entity),
      );
    }
    return [];
  }

  async findById(id: string): Promise<CompanyDao> {
    const entity = await this.repository.findOne({
      withDeleted: true,
      where: { id },
    });
    if (entity) {
      return this.mapper.entityToDomain(entity);
    }
    return null;
  }

  async findByTitle(title: string): Promise<CompanyDao> {
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
