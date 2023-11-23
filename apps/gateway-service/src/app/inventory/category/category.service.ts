import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  constructor() {}

  async findAllCategories(): Promise<Array<any>> {
    return [];
  }

  async findCategoryById(id: string): Promise<any> {
    return {
      id,
    };
  }

  async createCategory(category: any): Promise<void> {
    // DO NOTHING
  }

  async updateCategory(id: string, category: any): Promise<void> {
    // DO NOTHING
  }

  async deleteCategory(id: string): Promise<void> {
    // DO NOTHING
  }
}
