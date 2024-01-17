import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@azkaban/inventory-infrastructure';
import { AuthGuard } from '../../../guard/auth.guard';
import { Groups } from '../../../decorator/groups.decorator';
import { GroupsGuard } from '../../../guard/groups.guard';

@UseGuards(AuthGuard, GroupsGuard)
@ApiTags('inventory-category')
@Controller()
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Groups('inventory')
  @Get()
  async getCategories() {
    return await this.service.getCategories();
  }

  @Groups('inventory')
  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    const data = await this.service.getCategoryById(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups('inventory')
  @Get('parent/:id')
  async getCategoryByParentId(@Param('id') id: string) {
    return await this.service.getCategoriesByParentId(id);
  }

  @Groups('inventory-admin')
  @Post()
  async createCategory(@Body() data: CreateCategoryDto) {
    return await this.service.createCategory(data);
  }

  @Groups('inventory-admin')
  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() data: UpdateCategoryDto
  ) {
    return await this.service.updateCategory(id, data);
  }

  @Groups('inventory-admin')
  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    return await this.service.deleteCategory(id);
  }

  @Groups('inventory-admin')
  @Put(':id/restore')
  async restoreCategory(@Param('id') id: string) {
    return await this.service.restoreCategory(id);
  }

  @Groups('inventory-admin')
  @Put(':id/activate')
  async activateCategory(@Param('id') id: string) {
    return await this.service.activateCategory(id);
  }

  @Groups('inventory-admin')
  @Put(':id/deactivate')
  async deactivateCategory(@Param('id') id: string) {
    return await this.service.deactivateCategory(id);
  }
}
