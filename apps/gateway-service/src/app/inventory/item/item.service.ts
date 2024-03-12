import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { InventoryItemTopics, Nullable } from '@azkaban/shared';
import {
  ItemDao,
  CreateItemDto,
  UpdateItemDto,
} from '@azkaban/inventory-infrastructure';
import { ItemWebhookService } from './webhook.service';

@Injectable()
export class ItemService {
  constructor(
    @Inject('ITEM_SERVICE') private readonly client: ClientRMQ,
    private readonly webhookService: ItemWebhookService,
  ) {}

  async getItems(): Promise<Array<ItemDao>> {
    return await this.client
      .send<Array<ItemDao>, object>(InventoryItemTopics.LIST, {})
      .toPromise();
  }

  async getItemByCategory(category_id: string): Promise<Array<ItemDao>> {
    return await this.client
      .send<Array<ItemDao>, string>(InventoryItemTopics.CATEGORY, category_id)
      .toPromise();
  }

  async getItemByCompany(company_id: string): Promise<Array<ItemDao>> {
    return await this.client
      .send<Array<ItemDao>, string>(InventoryItemTopics.COMPANY, company_id)
      .toPromise();
  }

  async getItemByLocation(location_id: string): Promise<Array<ItemDao>> {
    return await this.client
      .send<Array<ItemDao>, string>(InventoryItemTopics.LOCATION, location_id)
      .toPromise();
  }

  async getItemBySize(size_id: string): Promise<Array<ItemDao>> {
    return await this.client
      .send<Array<ItemDao>, string>(InventoryItemTopics.SIZE, size_id)
      .toPromise();
  }

  async getItemByType(type_id: string): Promise<Array<ItemDao>> {
    return await this.client
      .send<Array<ItemDao>, string>(InventoryItemTopics.TYPE, type_id)
      .toPromise();
  }

  async getItemById(id: string): Promise<Nullable<ItemDao>> {
    return await this.client
      .send<Nullable<ItemDao>, string>(InventoryItemTopics.ID, id)
      .toPromise();
  }

  async createItem(data: CreateItemDto): Promise<ItemDao> {
    return await this.client
      .send<ItemDao, CreateItemDto>(InventoryItemTopics.CREATE, data)
      .toPromise()
      .then((data: ItemDao) => {
        this.webhookService.onItemCreated(data);
        return data;
      });
  }

  async updateItem(id: string, data: UpdateItemDto): Promise<void> {
    return await this.client
      .send<
        void,
        { id: string; data: UpdateItemDto }
      >(InventoryItemTopics.UPDATE, { id, data })
      .toPromise();
  }

  async deleteItem(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryItemTopics.DELETE, id)
      .toPromise();
  }

  async restoreItem(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryItemTopics.RESTORE, id)
      .toPromise();
  }

  async activateItem(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryItemTopics.ACTIVATE, id)
      .toPromise();
  }

  async deactivateItem(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryItemTopics.DEACTIVATE, id)
      .toPromise();
  }
}
