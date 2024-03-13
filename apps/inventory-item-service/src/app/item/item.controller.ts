import { Controller } from '@nestjs/common';
import { ItemService } from './item.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Chainable, InventoryItemTopics, Nullable } from '@azkaban/shared';
import {
  CreateItemDto,
  ItemDao,
  UpdateItemDto,
} from '@azkaban/inventory-infrastructure';

@Controller()
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @MessagePattern(InventoryItemTopics.LIST)
  async getItems(): Promise<Array<ItemDao>> {
    return await this.service.getList();
  }

  @MessagePattern(InventoryItemTopics.ID)
  async getItemById(@Payload() id: Nullable<string>): Promise<ItemDao> {
    return await this.service.getById(id);
  }

  @MessagePattern(InventoryItemTopics.CATEGORY)
  async getItemByCategoryId(
    @Payload() id: Nullable<string>,
  ): Promise<Array<ItemDao>> {
    return await this.service.getItemByCategoryId(id);
  }

  @MessagePattern(InventoryItemTopics.COMPANY)
  async getItemByCompanyId(
    @Payload() id: Nullable<string>,
  ): Promise<Array<ItemDao>> {
    return await this.service.getItemByCompanyId(id);
  }

  @MessagePattern(InventoryItemTopics.LOCATION)
  async getItemByLocationId(
    @Payload() id: Nullable<string>,
  ): Promise<Array<ItemDao>> {
    return await this.service.getItemByLocationId(id);
  }

  @MessagePattern(InventoryItemTopics.SIZE)
  async getItemBySizeId(
    @Payload() id: Nullable<string>,
  ): Promise<Array<ItemDao>> {
    return await this.service.getItemBySizeId(id);
  }

  @MessagePattern(InventoryItemTopics.TYPE)
  async getItemByTypeId(
    @Payload() id: Nullable<string>,
  ): Promise<Array<ItemDao>> {
    return await this.service.getItemByTypeId(id);
  }

  @MessagePattern(InventoryItemTopics.CREATE)
  async createItem(@Payload() data: CreateItemDto) {
    return await this.service.createItem(data);
  }

  @MessagePattern(InventoryItemTopics.UPDATE)
  async updateItem(
    @Payload() data: Chainable<{ id: string }, { data: UpdateItemDto }>,
  ): Promise<void> {
    return await this.service.updateItem(data.id, data.data);
  }

  @MessagePattern(InventoryItemTopics.ACTIVATE)
  async activateItem(@Payload() id: string): Promise<void> {
    return await this.service.activateItem(id);
  }

  @MessagePattern(InventoryItemTopics.DEACTIVATE)
  async deactivateItem(@Payload() id: string): Promise<void> {
    return await this.service.deactivateItem(id);
  }

  @MessagePattern(InventoryItemTopics.RESTORE)
  async restoreItem(@Payload() id: string): Promise<void> {
    return await this.service.restoreItem(id);
  }

  @MessagePattern(InventoryItemTopics.DELETE)
  async deleteItem(@Payload() id: string): Promise<void> {
    return await this.service.deleteItem(id);
  }
}
