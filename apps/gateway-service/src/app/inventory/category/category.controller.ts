import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@azkaban/inventory-infrastructure';

@ApiTags('inventory-category')
@Controller()
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  async getCategories() {
    return await this.service.getCategories();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    const data = await this.service.getCategoryById(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Get('parent/:id')
  async getCategoryByParentId(@Param('id') id: string) {
    return await this.service.getCategoriesByParentId(id);
  }

  @Post()
  async createCategory(@Body() data: CreateCategoryDto) {
    return await this.service.createCategory(data);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() data: UpdateCategoryDto
  ) {
    return await this.service.updateCategory(id, data);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    return await this.service.deleteCategory(id);
  }

  @Put(':id/restore')
  async restoreCategory(@Param('id') id: string) {
    return await this.service.restoreCategory(id);
  }

  @Put(':id/activate')
  async activateCategory(@Param('id') id: string) {
    return await this.service.activateCategory(id);
  }

  @Put(':id/deactivate')
  async deactivateCategory(@Param('id') id: string) {
    return await this.service.deactivateCategory(id);
  }
}
