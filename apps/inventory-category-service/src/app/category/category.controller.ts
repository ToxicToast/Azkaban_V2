import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Chainable, InventoryCategoryTopics, Nullable } from '@azkaban/shared';
import {
  CategoryDao,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@azkaban/inventory-infrastructure';
import { CategoryService } from './category.service';

@Controller()
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @MessagePattern(InventoryCategoryTopics.LIST)
  async getCategories(): Promise<Array<CategoryDao>> {
    return await this.service.getList();
  }

  @MessagePattern(InventoryCategoryTopics.ID)
  async getCategoryById(@Payload() id: string): Promise<Nullable<CategoryDao>> {
    return await this.service.getById(id);
  }

  @MessagePattern(InventoryCategoryTopics.PARENT)
  async getCategoryByParentId(
    @Payload() id: Nullable<string>
  ): Promise<Array<CategoryDao>> {
    return await this.service.getByParentId(id);
  }

  @MessagePattern(InventoryCategoryTopics.CREATE)
  async createCategory(@Payload() data: CreateCategoryDto): Promise<void> {
    return await this.service.createCategory(data);
  }

  @MessagePattern(InventoryCategoryTopics.UPDATE)
  async updateCategory(
    @Payload() data: Chainable<{ id: string }, { data: UpdateCategoryDto }>
  ): Promise<void> {
    return await this.service.updateCategory(data.id, data.data);
  }

  @MessagePattern(InventoryCategoryTopics.ACTIVATE)
  async activateCategory(@Payload() id: string): Promise<void> {
    return await this.service.activateCategory(id);
  }

  @MessagePattern(InventoryCategoryTopics.DEACTIVATE)
  async deactivateCategory(@Payload() id: string): Promise<void> {
    return await this.service.deactivateCategory(id);
  }

  @MessagePattern(InventoryCategoryTopics.RESTORE)
  async restoreCategory(@Payload() id: string): Promise<void> {
    return await this.service.restoreCategory(id);
  }

  @MessagePattern(InventoryCategoryTopics.DELETE)
  async deleteCategory(@Payload() id: string): Promise<void> {
    return await this.service.deleteCategory(id);
  }
}
