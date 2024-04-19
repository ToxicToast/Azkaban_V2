import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Chainable, InventoryLocationTopics, Nullable } from '@azkaban/shared';
import {
  LocationDao,
  CreateLocationDto,
  UpdateLocationDto,
} from '@azkaban/inventory-infrastructure';
import { LocationService } from './location.service';

@Controller()
export class LocationController {
  constructor(private readonly service: LocationService) {}

  @MessagePattern(InventoryLocationTopics.LIST)
  async getLocations(): Promise<Array<LocationDao>> {
    return await this.service.getList();
  }

  @MessagePattern(InventoryLocationTopics.ID)
  async getLocationById(@Payload() id: string): Promise<Nullable<LocationDao>> {
    return await this.service.getById(id);
  }

  @MessagePattern(InventoryLocationTopics.CREATE)
  async createLocation(
    @Payload() data: CreateLocationDto,
  ): Promise<LocationDao> {
    return await this.service.createLocation(data);
  }

  @MessagePattern(InventoryLocationTopics.UPDATE)
  async updateLocation(
    @Payload() data: Chainable<{ id: string }, UpdateLocationDto>,
  ): Promise<void> {
    const { id, ...body } = data;
    return await this.service.updateLocation(id, body);
  }

  @MessagePattern(InventoryLocationTopics.ACTIVATE)
  async activateLocation(@Payload() id: string): Promise<void> {
    return await this.service.activateLocation(id);
  }

  @MessagePattern(InventoryLocationTopics.DEACTIVATE)
  async deactivateLocation(@Payload() id: string): Promise<void> {
    return await this.service.deactivateLocation(id);
  }

  @MessagePattern(InventoryLocationTopics.RESTORE)
  async restoreLocation(@Payload() id: string): Promise<void> {
    return await this.service.restoreLocation(id);
  }

  @MessagePattern(InventoryLocationTopics.DELETE)
  async deleteLocation(@Payload() id: string): Promise<void> {
    return await this.service.deleteLocation(id);
  }

  @MessagePattern(InventoryLocationTopics.VERSION)
  getVersion(): string {
    return this.service.getVersion();
  }
}
