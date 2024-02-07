import { Inject, Injectable } from '@nestjs/common';
import {
  CreateItemDto,
  ItemDao,
  ItemTypeORMEntity,
  ItemTypeORMRepository,
  ItemTypeORMService,
  UpdateItemDto,
} from '@azkaban/inventory-infrastructure';
import { Repository } from 'typeorm';
import { Nullable } from '@azkaban/shared';

@Injectable()
export class ItemService {
  private readonly infrastructureRepository: ItemTypeORMRepository;
  private readonly infrastructureService: ItemTypeORMService;

  constructor(
    @Inject('ITEM_REPOSITORY')
    private readonly itemRepository: Repository<ItemTypeORMEntity>,
  ) {
    this.infrastructureRepository = new ItemTypeORMRepository(
      this.itemRepository,
    );
    this.infrastructureService = new ItemTypeORMService(
      this.infrastructureRepository,
    );
  }

  async getList(): Promise<Array<ItemDao>> {
    return await this.infrastructureService.getItemList();
  }

  async getById(id: string): Promise<Nullable<ItemDao>> {
    return await this.infrastructureService.getItemById(id);
  }

  async getItemByCategoryId(category_id: string): Promise<Array<ItemDao>> {
    return await this.infrastructureService.getItemByCategoryId(category_id);
  }

  async getItemByCompanyId(company_id: string): Promise<Array<ItemDao>> {
    return await this.infrastructureService.getItemByCompanyId(company_id);
  }

  async getItemByLocationId(location_id: string): Promise<Array<ItemDao>> {
    return await this.infrastructureService.getItemByLocationId(location_id);
  }

  async getItemBySizeId(size_id: string): Promise<Array<ItemDao>> {
    return await this.infrastructureService.getItemBySizeId(size_id);
  }

  async getItemByTypeId(type_id: string): Promise<Array<ItemDao>> {
    return await this.infrastructureService.getItemByTypeId(type_id);
  }

  async createItem(data: CreateItemDto): Promise<void> {
    await this.infrastructureService.createItem(data);
  }

  async updateItem(id: string, data: UpdateItemDto): Promise<void> {
    if (data.category_id !== undefined) {
      await this.infrastructureService.updateCategoryId(id, data.category_id);
    }
    if (data.company_id !== undefined) {
      await this.infrastructureService.updateCompanyId(id, data.company_id);
    }
    if (data.location_id !== undefined) {
      await this.infrastructureService.updateLocationId(id, data.location_id);
    }
    if (data.size_id !== undefined) {
      await this.infrastructureService.updateSizeId(id, data.size_id);
    }
    if (data.type_id !== undefined) {
      await this.infrastructureService.updateTypeId(id, data.type_id);
    }
    if (data.title !== undefined) {
      await this.infrastructureService.updateTitle(id, data.title);
    }
    if (data.slug !== undefined) {
      await this.infrastructureService.updateSlug(id, data.slug);
    }
  }

  async activateItem(id: string): Promise<void> {
    await this.infrastructureService.activateItem(id);
  }

  async deactivateItem(id: string): Promise<void> {
    await this.infrastructureService.deactivateItem(id);
  }

  async deleteItem(id: string): Promise<void> {
    await this.infrastructureService.deleteItem(id);
  }

  async restoreItem(id: string): Promise<void> {
    await this.infrastructureService.restoreItem(id);
  }
}
