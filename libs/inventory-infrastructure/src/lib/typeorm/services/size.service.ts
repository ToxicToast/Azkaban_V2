import { SizeService } from '@azkaban/inventory-domain';
import { SizeTypeORMRepository } from '../repositories';
import { CreateSizeDto } from '../../dtos';
import { SizeDao } from '../../daos';
import { Nullable } from '@azkaban/shared';

export class SizeTypeOrmService {
  private readonly domainService: SizeService;

  constructor(private readonly repository: SizeTypeORMRepository) {
    this.domainService = new SizeService(repository);
  }

  async createSize(data: CreateSizeDto): Promise<SizeDao> {
    return await this.domainService.createSize(data);
  }

  async getSizeList(): Promise<Array<SizeDao>> {
    return await this.domainService.getSizes();
  }

  async getSizeById(id: string): Promise<Nullable<SizeDao>> {
    return await this.domainService.getSizeById(id);
  }

  async getSizeByTitle(title: string): Promise<Nullable<SizeDao>> {
    return await this.domainService.getSizeByTitle(title);
  }

  async updateSizeTitle(id: string, title: string): Promise<void> {
    await this.domainService.updateTitle(id, title);
  }

  async updateSizeSlug(id: string, slug: string): Promise<void> {
    await this.domainService.updateSlug(id, slug);
  }

  async activateSize(id: string): Promise<void> {
    await this.domainService.activateSize(id);
  }

  async deactivateSize(id: string): Promise<void> {
    await this.domainService.deactivateSize(id);
  }

  async deleteSize(id: string): Promise<void> {
    await this.domainService.deleteSize(id);
  }

  async restoreSize(id: string): Promise<void> {
    await this.domainService.restoreSize(id);
  }
}
