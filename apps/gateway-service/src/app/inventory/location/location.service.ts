import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import {
  CreateLocationDto,
  LocationDao,
  UpdateLocationDto,
} from '@azkaban/inventory-infrastructure';
import { InventoryLocationTopics, Nullable } from '@azkaban/shared';

@Injectable()
export class ItemService {
  constructor(@Inject('LOCATION_SERVICE') private readonly client: ClientRMQ) {}

  async getLocations(): Promise<Array<LocationDao>> {
    return await this.client
      .send<Array<LocationDao>, object>(InventoryLocationTopics.LIST, {})
      .toPromise();
  }

  async getLocationById(id: string): Promise<Nullable<LocationDao>> {
    return await this.client
      .send<Nullable<LocationDao>, string>(InventoryLocationTopics.ID, id)
      .toPromise();
  }

  async createLocation(data: CreateLocationDto): Promise<string> {
    return await this.client
      .send<string, CreateLocationDto>(InventoryLocationTopics.CREATE, data)
      .toPromise();
  }

  async updateLocation(id: string, data: CreateLocationDto): Promise<void> {
    return await this.client
      .send<
        void,
        { id: string; data: UpdateLocationDto }
      >(InventoryLocationTopics.UPDATE, { id, data })
      .toPromise();
  }

  async deleteLocation(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryLocationTopics.DELETE, id)
      .toPromise();
  }

  async restoreItem(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryLocationTopics.RESTORE, id)
      .toPromise();
  }

  async activateItem(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryLocationTopics.ACTIVATE, id)
      .toPromise();
  }

  async deactivateItem(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryLocationTopics.DEACTIVATE, id)
      .toPromise();
  }
}
