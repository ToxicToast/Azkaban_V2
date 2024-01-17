import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  CategoryDao,
  CategoryTypeORMEntity,
  CategoryTypeORMRepository,
  CategoryTypeORMService,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@azkaban/inventory-infrastructure';
import { Nullable } from '@azkaban/shared';

@Injectable()
export class CategoryService {
  private readonly infrastructureRepository: CategoryTypeORMRepository;
  private readonly infrastructureService: CategoryTypeORMService;

  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private readonly categoryRepository: Repository<CategoryTypeORMEntity>
  ) {
    this.infrastructureRepository = new CategoryTypeORMRepository(
      this.categoryRepository
    );
    this.infrastructureService = new CategoryTypeORMService(
      this.infrastructureRepository
    );
  }

  async getList(): Promise<Array<CategoryDao>> {
    return await this.infrastructureService.getCategoryList();
  }

  async getById(id: string): Promise<CategoryDao> {
    return await this.infrastructureService.getCategoryById(id);
  }

  async getByParentId(
    parent_id: Nullable<string>
  ): Promise<Array<CategoryDao>> {
    return await this.infrastructureService.getCategoryByParentId(parent_id);
  }

  async createCategory(data: CreateCategoryDto): Promise<void> {
    await this.infrastructureService.createCategory(data);
  }

  async updateCategory(id: string, data: UpdateCategoryDto): Promise<void> {
    if (data.parent_id !== undefined) {
      await this.infrastructureService.updateCategoryParentId(
        id,
        data.parent_id
      );
    }
    if (data.title !== undefined) {
      await this.infrastructureService.updateCategoryTitle(id, data.title);
    }
    if (data.slug !== undefined) {
      await this.infrastructureService.updateCategorySlug(id, data.slug);
    }
  }

  async activateCategory(id: string): Promise<void> {
    await this.infrastructureService.activateCategory(id);
  }

  async deactivateCategory(id: string): Promise<void> {
    await this.infrastructureService.deactivateCategory(id);
  }

  async deleteCategory(id: string): Promise<void> {
    await this.infrastructureService.deleteCategory(id);
  }

  async restoreCategory(id: string): Promise<void> {
    await this.infrastructureService.restoreCategory(id);
  }
}
