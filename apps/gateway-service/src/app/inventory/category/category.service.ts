import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import {
  InventoryCategoryTopics,
  Nullable,
  WebhookInventoryTopics,
} from '@azkaban/shared';
import {
  CategoryDao,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@azkaban/inventory-infrastructure';

@Injectable()
export class CategoryService {
  private readonly logger: Logger = new Logger(CategoryService.name);

  constructor(
    @Inject('CATEGORY_SERVICE') private readonly client: ClientRMQ,
    @Inject('WEBHOOK_SERVICE') private readonly webhook: ClientRMQ,
  ) {}

  async getCategories(): Promise<Array<CategoryDao>> {
    return await this.client
      .send<Array<CategoryDao>, object>(InventoryCategoryTopics.LIST, {})
      .toPromise();
  }

  async getCategoryById(id: string): Promise<Nullable<CategoryDao>> {
    return await this.client
      .send<Nullable<CategoryDao>, string>(InventoryCategoryTopics.ID, id)
      .toPromise();
  }

  async getCategoriesByParentId(
    parent_id: Nullable<string>,
  ): Promise<Array<CategoryDao>> {
    return await this.client
      .send<
        Array<CategoryDao>,
        Nullable<string>
      >(InventoryCategoryTopics.PARENT, parent_id)
      .toPromise();
  }

  async createCategory(data: CreateCategoryDto): Promise<CategoryDao> {
    return await this.client
      .send<CategoryDao, CreateCategoryDto>(
        InventoryCategoryTopics.CREATE,
        data,
      )
      .toPromise()
      .then((data: CategoryDao) => {
        this.webhook
          .emit(WebhookInventoryTopics.CATEGORYCREATED, data)
          .toPromise();
        return data;
      });
  }

  async updateCategory(id: string, data: UpdateCategoryDto): Promise<void> {
    return await this.client
      .send<
        void,
        { id: string; data: UpdateCategoryDto }
      >(InventoryCategoryTopics.UPDATE, { id, data })
      .toPromise();
  }

  async deleteCategory(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryCategoryTopics.DELETE, id)
      .toPromise();
  }

  async restoreCategory(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryCategoryTopics.RESTORE, id)
      .toPromise();
  }

  async activateCategory(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryCategoryTopics.ACTIVATE, id)
      .toPromise();
  }

  async deactivateCategory(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryCategoryTopics.DEACTIVATE, id)
      .toPromise();
  }
}
