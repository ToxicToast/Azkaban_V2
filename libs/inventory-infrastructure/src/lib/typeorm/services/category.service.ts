import { CategoryService } from '@azkaban/inventory-domain';
import { CategoryTypeORMRepository } from '../repositories/category.repository';
import { CreateCategoryDto } from '../../dtos/category.dto';
import { CategoryDao } from '../../daos/category.dao';

export class CategoryTypeORMService {
  private readonly domainService: CategoryService;

  constructor(private readonly repository: CategoryTypeORMRepository) {
    this.domainService = new CategoryService(repository);
  }

  async createCategory(data: CreateCategoryDto): Promise<void> {
    await this.domainService.createCategory(data);
  }

  async getCategoryList(): Promise<Array<CategoryDao>> {
    return await this.domainService.getCategories();
  }

  async getCategoryById(id: string): Promise<CategoryDao> {
    return await this.domainService.getCategoryById(id);
  }

  async getCategoryByTitle(title: string): Promise<CategoryDao> {
    return await this.domainService.getCategoryByTitle(title);
  }

  async getCategoryByParentId(parent_id: string): Promise<Array<CategoryDao>> {
    return await this.domainService.getCategoryByParentId(parent_id);
  }

  async updateCategoryParentId(id: string, parent_id: string): Promise<void> {
    await this.domainService.updateParentId(id, parent_id);
  }

  async updateCategoryTitle(id: string, title: string): Promise<void> {
    await this.domainService.updateTitle(id, title);
  }

  async updateCategorySlug(id: string, slug: string): Promise<void> {
    await this.domainService.updateSlug(id, slug);
  }

  async activateCategory(id: string): Promise<void> {
    await this.domainService.activateCategory(id);
  }

  async deactivateCategory(id: string): Promise<void> {
    await this.domainService.deactivateCategory(id);
  }

  async deleteCategory(id: string): Promise<void> {
    await this.domainService.deleteCategory(id);
  }

  async restoreCategory(id: string): Promise<void> {
    await this.domainService.restoreCategory(id);
  }
}
