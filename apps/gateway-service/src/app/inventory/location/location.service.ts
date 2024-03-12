import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import {
  CreateLocationDto,
  LocationDao,
  UpdateLocationDto,
} from '@azkaban/inventory-infrastructure';
import { InventoryLocationTopics, Nullable } from '@azkaban/shared';
import { LocationWebhookService } from './webhook.service';

@Injectable()
export class LocationService {
  constructor(
    @Inject('LOCATION_SERVICE') private readonly client: ClientRMQ,
    private readonly webhookService: LocationWebhookService,
  ) {}

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

  async createLocation(data: CreateLocationDto): Promise<LocationDao> {
    return await this.client
      .send<LocationDao, CreateLocationDto>(
        InventoryLocationTopics.CREATE,
        data,
      )
      .toPromise()
      .then((data: LocationDao) => {
        this.webhookService.onLocationCreated(data);
        return data;
      });
  }

  async updateLocation(id: string, data: UpdateLocationDto): Promise<void> {
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

  async restoreLocation(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryLocationTopics.RESTORE, id)
      .toPromise();
  }

  async activateLocation(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryLocationTopics.ACTIVATE, id)
      .toPromise();
  }

  async deactivateLocation(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryLocationTopics.DEACTIVATE, id)
      .toPromise();
  }
}
