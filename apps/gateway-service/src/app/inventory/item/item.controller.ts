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
import { ApiTags } from '@nestjs/swagger';
import {
  CreateItemDto,
  UpdateItemDto,
} from '@azkaban/inventory-infrastructure';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { Groups } from '../../../decorator/groups.decorator';
import { ItemService } from './item.service';

@UseGuards(AuthGuard, GroupsGuard)
@ApiTags('inventory-item')
@Controller()
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @Groups('inventory')
  @Get()
  async getItems() {
    return await this.service.getItems();
  }

  @Groups('inventory')
  @Get(':id')
  async getItemById(@Param('id') id: string) {
    const data = await this.service.getItemById(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups('inventory')
  @Get('category/:id')
  async getItemByCategory(@Param('id') id: string) {
    const data = await this.service.getItemByCategory(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups('inventory')
  @Get('company/:id')
  async getItemByCompany(@Param('id') id: string) {
    const data = await this.service.getItemByCompany(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups('inventory')
  @Get('location/:id')
  async getItemByLocation(@Param('id') id: string) {
    const data = await this.service.getItemByLocation(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups('inventory')
  @Get('size/:id')
  async getItemBySize(@Param('id') id: string) {
    const data = await this.service.getItemBySize(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups('inventory')
  @Get('type/:id')
  async getItemByType(@Param('id') id: string) {
    const data = await this.service.getItemByType(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups('inventory-admin')
  @Post()
  async createItem(@Body() data: CreateItemDto) {
    return await this.service.createItem(data);
  }

  @Groups('inventory-admin')
  @Put(':id')
  async updateItem(@Param('id') id: string, @Body() data: UpdateItemDto) {
    return await this.service.updateItem(id, data);
  }

  @Groups('inventory-admin')
  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
    return await this.service.deleteItem(id);
  }

  @Groups('inventory-admin')
  @Put(':id/restore')
  async restoreItem(@Param('id') id: string) {
    return await this.service.restoreItem(id);
  }

  @Groups('inventory-admin')
  @Put(':id/activate')
  async activateItem(@Param('id') id: string) {
    return await this.service.activateItem(id);
  }

  @Groups('inventory-admin')
  @Put(':id/deactivate')
  async deactivateItem(@Param('id') id: string) {
    return await this.service.deactivateItem(id);
  }
}
