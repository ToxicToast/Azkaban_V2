import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';

@Controller()
@ApiTags('inventory')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  async getCategoriesList(): Promise<Array<any>> {
    return await this.service.findAllCategories();
  }

  @Get(':id')
  async getCategoriesById(@Param('id') id: string): Promise<any> {
    return await this.service.findCategoryById(id);
  }

  @Post()
  async createCategory(@Body() body: any): Promise<void> {
    await this.service.createCategory(body);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() category: any
  ): Promise<void> {
    await this.service.updateCategory(id, category);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string): Promise<void> {
    await this.service.deleteCategory(id);
  }
}
