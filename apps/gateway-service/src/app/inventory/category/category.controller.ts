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
import { AzkabanGroups } from '@azkaban/shared';

@UseGuards(AuthGuard, GroupsGuard)
@ApiTags('inventory-category')
@Controller()
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Groups(AzkabanGroups.INVENTORY)
  @Get()
  async getCategories() {
    return await this.service.getCategories();
  }

  @Groups(AzkabanGroups.INVENTORY)
  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    const data = await this.service.getCategoryById(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups(AzkabanGroups.INVENTORY)
  @Get('parent/:id')
  async getCategoryByParentId(@Param('id') id: string) {
    return await this.service.getCategoriesByParentId(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Post()
  async createCategory(@Body() data: CreateCategoryDto) {
    return await this.service.createCategory(data);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() data: UpdateCategoryDto,
  ) {
    return await this.service.updateCategory(id, data);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    return await this.service.deleteCategory(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/restore')
  async restoreCategory(@Param('id') id: string) {
    return await this.service.restoreCategory(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/activate')
  async activateCategory(@Param('id') id: string) {
    return await this.service.activateCategory(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/deactivate')
  async deactivateCategory(@Param('id') id: string) {
    return await this.service.deactivateCategory(id);
  }
}
