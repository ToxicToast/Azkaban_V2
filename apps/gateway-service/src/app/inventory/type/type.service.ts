import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import {
  CreateTypeDto,
  TypeDao,
  UpdateTypeDto,
} from '@azkaban/inventory-infrastructure';
import { InventoryTypeTopics, Nullable } from '@azkaban/shared';

@Injectable()
export class TypeService {
  constructor(@Inject('TYPE_SERVICE') private readonly client: ClientRMQ) {}

  async getTypes(): Promise<Array<TypeDao>> {
    return await this.client
      .send<Array<TypeDao>, object>(InventoryTypeTopics.LIST, {})
      .toPromise();
  }

  async getTypeById(id: string): Promise<Nullable<TypeDao>> {
    return await this.client
      .send<Nullable<TypeDao>, string>(InventoryTypeTopics.ID, id)
      .toPromise();
  }

  async createType(data: CreateTypeDto): Promise<string> {
    return await this.client
      .send<string, CreateTypeDto>(InventoryTypeTopics.CREATE, data)
      .toPromise();
  }

  async updateType(id: string, data: UpdateTypeDto): Promise<void> {
    return await this.client
      .send<
        void,
        { id: string; data: UpdateTypeDto }
      >(InventoryTypeTopics.UPDATE, { id, data })
      .toPromise();
  }

  async deleteType(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryTypeTopics.DELETE, id)
      .toPromise();
  }

  async restoreType(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryTypeTopics.RESTORE, id)
      .toPromise();
  }

  async activateType(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryTypeTopics.ACTIVATE, id)
      .toPromise();
  }

  async deactivateType(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryTypeTopics.DEACTIVATE, id)
      .toPromise();
  }
}
