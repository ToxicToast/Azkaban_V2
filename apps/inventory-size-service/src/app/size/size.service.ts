import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  SizeDao,
  SizeTypeORMEntity,
  SizeTypeORMRepository,
  SizeTypeOrmService,
  CreateSizeDto,
  UpdateSizeDto,
} from '@azkaban/inventory-infrastructure';

@Injectable()
export class SizeService {
  private readonly infrastructureRepository: SizeTypeORMRepository;
  private readonly infrastructureService: SizeTypeOrmService;

  constructor(
    @Inject('SIZE_REPOSITORY')
    private readonly sizeRepository: Repository<SizeTypeORMEntity>,
  ) {
    this.infrastructureRepository = new SizeTypeORMRepository(
      this.sizeRepository,
    );
    this.infrastructureService = new SizeTypeOrmService(
      this.infrastructureRepository,
    );
  }

  async getList(): Promise<Array<SizeDao>> {
    return await this.infrastructureService.getSizeList();
  }

  async getById(id: string): Promise<SizeDao> {
    return await this.infrastructureService.getSizeById(id);
  }

  async createSize(data: CreateSizeDto): Promise<SizeDao> {
    return await this.infrastructureService.createSize(data);
  }

  async updateSize(id: string, data: UpdateSizeDto): Promise<void> {
    if (data.title) {
      await this.infrastructureService.updateSizeTitle(id, data.title);
    } else if (data.slug) {
      await this.infrastructureService.updateSizeSlug(id, data.slug);
    }
  }

  async activateSize(id: string): Promise<void> {
    await this.infrastructureService.activateSize(id);
  }

  async deactivateSize(id: string): Promise<void> {
    await this.infrastructureService.deactivateSize(id);
  }

  async deleteSize(id: string): Promise<void> {
    await this.infrastructureService.deleteSize(id);
  }

  async restoreSize(id: string): Promise<void> {
    await this.infrastructureService.restoreSize(id);
  }

  getVersion(): string {
    return process.env.APP_VERSION ?? 'local';
  }
}
