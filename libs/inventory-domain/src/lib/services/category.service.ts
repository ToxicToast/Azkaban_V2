import { CategoryAnemic } from '../anemics';
import { CategoryData } from '../data';
import { CategoryFactory } from '../factories';
import { CategoryRepository } from '../repositories';
import { Nullable } from '@azkaban/shared';

export class CategoryService {
  constructor(private readonly repository: CategoryRepository) {}

  async save(anemic: CategoryAnemic): Promise<CategoryAnemic> {
    return await this.repository.save(anemic);
  }

  async createCategory(data: CategoryData): Promise<CategoryAnemic> {
    const factory = new CategoryFactory();
    const aggregate = factory.createFactory(data);
    return await this.save(aggregate.toAnemic());
  }

  async getCategories(): Promise<Array<CategoryAnemic>> {
    return await this.repository.findList();
  }

  async getCategoryById(id: string): Promise<Nullable<CategoryAnemic>> {
    return await this.repository.findById(id);
  }

  async getCategoryByTitle(title: string): Promise<Nullable<CategoryAnemic>> {
    return await this.repository.findByTitle(title);
  }

  async getCategoryByParentId(
    parent_id: Nullable<string>,
  ): Promise<Array<CategoryAnemic>> {
    return await this.repository.findByParentId(parent_id);
  }

  //

  async updateParentId(id: string, parent_id: Nullable<string>): Promise<void> {
    const category = await this.getCategoryById(id);
    if (category !== null) {
      const aggregate = new CategoryFactory().reconstitute(category);
      aggregate.updateParentId(parent_id);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateTitle(id: string, title: string): Promise<void> {
    const category = await this.getCategoryById(id);
    if (category !== null) {
      const aggregate = new CategoryFactory().reconstitute(category);
      aggregate.updateTitle(title);
      await this.save(aggregate.toAnemic());
    }
  }

  async updateSlug(id: string, slug: string): Promise<void> {
    const category = await this.getCategoryById(id);
    if (category !== null) {
      const aggregate = new CategoryFactory().reconstitute(category);
      aggregate.updateSlug(slug);
      await this.save(aggregate.toAnemic());
    }
  }

  async activateCategory(id: string): Promise<void> {
    const category = await this.getCategoryById(id);
    if (category !== null) {
      const aggregate = new CategoryFactory().reconstitute(category);
      aggregate.activate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deactivateCategory(id: string): Promise<void> {
    const category = await this.getCategoryById(id);
    if (category !== null) {
      const aggregate = new CategoryFactory().reconstitute(category);
      aggregate.deactivate();
      await this.save(aggregate.toAnemic());
    }
  }

  async deleteCategory(id: string): Promise<void> {
    const category = await this.getCategoryById(id);
    if (category !== null) {
      const aggregate = new CategoryFactory().reconstitute(category);
      aggregate.delete();
      await this.save(aggregate.toAnemic());
    }
  }

  async restoreCategory(id: string): Promise<void> {
    const category = await this.getCategoryById(id);
    if (category !== null) {
      const aggregate = new CategoryFactory().reconstitute(category);
      aggregate.restore();
      await this.save(aggregate.toAnemic());
    }
  }
}
