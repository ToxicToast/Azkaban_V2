import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { InventoryCategoryTopics, Nullable } from '@azkaban/shared';
import {
  CategoryDao,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@azkaban/inventory-infrastructure';
import { CategoryWebhookService } from './webhook.service';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_SERVICE') private readonly client: ClientRMQ,
    private readonly webhookService: CategoryWebhookService,
  ) {}

  async getCategories(): Promise<Array<CategoryDao>> {
    return await this.client
      .send<Array<CategoryDao>, object>(InventoryCategoryTopics.LIST, {})
      .toPromise()
      .then((data: Array<CategoryDao>) => {
        return data;
      })
      .catch((error) => {
        Logger.error(error);
        return [];
      });
  }

  async getCategoryById(id: string): Promise<Nullable<CategoryDao>> {
    return await this.client
      .send<Nullable<CategoryDao>, string>(InventoryCategoryTopics.ID, id)
      .toPromise()
      .then((data: Nullable<CategoryDao>) => {
        return data;
      })
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async getCategoriesByParentId(
    parent_id: Nullable<string>,
  ): Promise<Array<CategoryDao>> {
    return await this.client
      .send<Array<CategoryDao>, Nullable<string>>(
        InventoryCategoryTopics.PARENT,
        parent_id,
      )
      .toPromise()
      .then((data: Array<CategoryDao>) => {
        return data;
      })
      .catch((error) => {
        Logger.error(error);
        return [];
      });
  }

  async createCategory(data: CreateCategoryDto): Promise<CategoryDao> {
    return await this.client
      .send<CategoryDao, CreateCategoryDto>(
        InventoryCategoryTopics.CREATE,
        data,
      )
      .toPromise()
      .then((data: CategoryDao) => {
        this.webhookService.onCategoryCreated(data);
        return data;
      })
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async updateCategory(id: string, data: UpdateCategoryDto): Promise<void> {
    return await this.client
      .send<void, { id: string; data: UpdateCategoryDto }>(
        InventoryCategoryTopics.UPDATE,
        { id, data },
      )
      .toPromise()
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async deleteCategory(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryCategoryTopics.DELETE, id)
      .toPromise()
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async restoreCategory(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryCategoryTopics.RESTORE, id)
      .toPromise()
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async activateCategory(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryCategoryTopics.ACTIVATE, id)
      .toPromise()
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async deactivateCategory(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryCategoryTopics.DEACTIVATE, id)
      .toPromise()
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }
}
