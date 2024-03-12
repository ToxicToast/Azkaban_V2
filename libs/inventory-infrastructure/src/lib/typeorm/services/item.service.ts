import { ItemService } from '@azkaban/inventory-domain';
import { ItemTypeORMRepository } from '../repositories';
import { CreateItemDto } from '../../dtos';
import { ItemDao } from '../../daos';
import { Nullable } from '@azkaban/shared';

export class ItemTypeORMService {
  private readonly domainService: ItemService;

  constructor(private readonly repository: ItemTypeORMRepository) {
    this.domainService = new ItemService(repository);
  }

  async createItem(data: CreateItemDto): Promise<ItemDao> {
    return await this.domainService.createItem(data);
  }

  async getItemList(): Promise<Array<ItemDao>> {
    return await this.domainService.getItems();
  }

  async getItemById(id: string): Promise<Nullable<ItemDao>> {
    return await this.domainService.getItemById(id);
  }

  async getItemByTitle(title: string): Promise<Nullable<ItemDao>> {
    return await this.domainService.getItemByTitle(title);
  }

  async getItemByCategoryId(
    category_id: Nullable<string>,
  ): Promise<Array<ItemDao>> {
    return await this.domainService.getItemByCategoryId(category_id);
  }

  async getItemByCompanyId(
    company_id: Nullable<string>,
  ): Promise<Array<ItemDao>> {
    return await this.domainService.getItemByCompanyId(company_id);
  }

  async getItemByLocationId(
    location_id: Nullable<string>,
  ): Promise<Array<ItemDao>> {
    return await this.domainService.getItemByLocationId(location_id);
  }

  async getItemBySizeId(size_id: Nullable<string>): Promise<Array<ItemDao>> {
    return await this.domainService.getItemBySizeId(size_id);
  }

  async getItemByTypeId(type_id: Nullable<string>): Promise<Array<ItemDao>> {
    return await this.domainService.getItemByTypeId(type_id);
  }

  async updateCategoryId(
    id: string,
    category_id: Nullable<string>,
  ): Promise<void> {
    await this.domainService.updateCategoryId(id, category_id);
  }

  async updateCompanyId(
    id: string,
    company_id: Nullable<string>,
  ): Promise<void> {
    await this.domainService.updateCompanyId(id, company_id);
  }

  async updateLocationId(
    id: string,
    location_id: Nullable<string>,
  ): Promise<void> {
    await this.domainService.updateLocationId(id, location_id);
  }

  async updateSizeId(id: string, size_id: Nullable<string>): Promise<void> {
    await this.domainService.updateSizeId(id, size_id);
  }

  async updateTypeId(id: string, type_id: Nullable<string>): Promise<void> {
    await this.domainService.updateTypeId(id, type_id);
  }

  async updateTitle(id: string, title: string): Promise<void> {
    await this.domainService.updateTitle(id, title);
  }

  async updateSlug(id: string, slug: string): Promise<void> {
    await this.domainService.updateSlug(id, slug);
  }

  async activateItem(id: string): Promise<void> {
    await this.domainService.activateItem(id);
  }

  async deactivateItem(id: string): Promise<void> {
    await this.domainService.deactivateItem(id);
  }

  async deleteItem(id: string): Promise<void> {
    await this.domainService.deleteItem(id);
  }

  async restoreItem(id: string): Promise<void> {
    await this.domainService.restoreItem(id);
  }
}
