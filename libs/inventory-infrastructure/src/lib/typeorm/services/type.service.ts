import { TypeService } from '@azkaban/inventory-domain';
import { TypeTypeORMRepository } from '../repositories';
import { CreateTypeDto } from '../../dtos';
import { TypeDao } from '../../daos';
import { Nullable } from '@azkaban/shared';

export class TypeTypeOrmService {
  private readonly domainService: TypeService;

  constructor(private readonly repository: TypeTypeORMRepository) {
    this.domainService = new TypeService(repository);
  }

  async createType(data: CreateTypeDto): Promise<TypeDao> {
    return await this.domainService.createType(data);
  }

  async getTypeList(): Promise<Array<TypeDao>> {
    return await this.domainService.getTypes();
  }

  async getTypeById(id: string): Promise<Nullable<TypeDao>> {
    return await this.domainService.getTypeById(id);
  }

  async getTypeByTitle(title: string): Promise<Nullable<TypeDao>> {
    return await this.domainService.getTypeByTitle(title);
  }

  async updateTypeTitle(id: string, title: string): Promise<void> {
    await this.domainService.updateTitle(id, title);
  }

  async updateTypeSlug(id: string, slug: string): Promise<void> {
    await this.domainService.updateSlug(id, slug);
  }

  async activateType(id: string): Promise<void> {
    await this.domainService.activateType(id);
  }

  async deactivateType(id: string): Promise<void> {
    await this.domainService.deactivateType(id);
  }

  async deleteType(id: string): Promise<void> {
    await this.domainService.deleteType(id);
  }

  async restoreType(id: string): Promise<void> {
    await this.domainService.restoreType(id);
  }
}
