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
  UseInterceptors,
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
import { AzkabanGroups } from '@azkaban/shared';

@UseGuards(AuthGuard, GroupsGuard)
@ApiTags('inventory-item')
@Controller()
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @Groups(AzkabanGroups.INVENTORY)
  @Get()
  async getItems() {
    return await this.service.getItems();
  }

  @Groups(AzkabanGroups.INVENTORY)
  @Get(':id')
  async getItemById(@Param('id') id: string) {
    const data = await this.service.getItemById(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups(AzkabanGroups.INVENTORY)
  @Get('category/:id')
  async getItemByCategory(@Param('id') id: string) {
    const data = await this.service.getItemByCategory(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups(AzkabanGroups.INVENTORY)
  @Get('company/:id')
  async getItemByCompany(@Param('id') id: string) {
    const data = await this.service.getItemByCompany(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups(AzkabanGroups.INVENTORY)
  @Get('location/:id')
  async getItemByLocation(@Param('id') id: string) {
    const data = await this.service.getItemByLocation(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups(AzkabanGroups.INVENTORY)
  @Get('size/:id')
  async getItemBySize(@Param('id') id: string) {
    const data = await this.service.getItemBySize(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups(AzkabanGroups.INVENTORY)
  @Get('type/:id')
  async getItemByType(@Param('id') id: string) {
    const data = await this.service.getItemByType(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups(AzkabanGroups.INVENTORY)
  @Get('warehouse/:id')
  async getItemByWarehouse(@Param('id') id: string) {
    const data = await this.service.getItemByWarehouse(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Post()
  async createItem(@Body() data: CreateItemDto) {
    return await this.service.createItem(data);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id')
  async updateItem(@Param('id') id: string, @Body() data: UpdateItemDto) {
    return await this.service.updateItem(id, data);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
    return await this.service.deleteItem(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/restore')
  async restoreItem(@Param('id') id: string) {
    return await this.service.restoreItem(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/activate')
  async activateItem(@Param('id') id: string) {
    return await this.service.activateItem(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/deactivate')
  async deactivateItem(@Param('id') id: string) {
    return await this.service.deactivateItem(id);
  }
}
