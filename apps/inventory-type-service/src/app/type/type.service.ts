import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  TypeDao,
  TypeTypeORMEntity,
  TypeTypeORMRepository,
  TypeTypeOrmService,
  CreateTypeDto,
  UpdateTypeDto,
} from '@azkaban/inventory-infrastructure';

@Injectable()
export class TypeService {
  private readonly infrastructureRepository: TypeTypeORMRepository;
  private readonly infrastructureService: TypeTypeOrmService;

  constructor(
    @Inject('TYPE_REPOSITORY')
    private readonly typeRepository: Repository<TypeTypeORMEntity>,
  ) {
    this.infrastructureRepository = new TypeTypeORMRepository(
      this.typeRepository,
    );
    this.infrastructureService = new TypeTypeOrmService(
      this.infrastructureRepository,
    );
  }

  async getList(): Promise<Array<TypeDao>> {
    return await this.infrastructureService.getTypeList();
  }

  async getById(id: string): Promise<TypeDao> {
    return await this.infrastructureService.getTypeById(id);
  }

  async createType(data: CreateTypeDto): Promise<TypeDao> {
    return await this.infrastructureService.createType(data);
  }

  async updateType(id: string, data: UpdateTypeDto): Promise<void> {
    if (data.title) {
      await this.infrastructureService.updateTypeTitle(id, data.title);
    } else if (data.slug) {
      await this.infrastructureService.updateTypeSlug(id, data.slug);
    }
  }

  async activateType(id: string): Promise<void> {
    await this.infrastructureService.activateType(id);
  }

  async deactivateType(id: string): Promise<void> {
    await this.infrastructureService.deactivateType(id);
  }

  async deleteType(id: string): Promise<void> {
    await this.infrastructureService.deleteType(id);
  }

  async restoreType(id: string): Promise<void> {
    await this.infrastructureService.restoreType(id);
  }
}
