import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Chainable, InventorySizeTopics, Nullable } from '@azkaban/shared';
import {
  SizeDao,
  CreateSizeDto,
  UpdateSizeDto,
} from '@azkaban/inventory-infrastructure';
import { SizeService } from './size.service';

@Controller()
export class SizeController {
  constructor(private readonly service: SizeService) {}

  @MessagePattern(InventorySizeTopics.LIST)
  async getSizes(): Promise<Array<SizeDao>> {
    return await this.service.getList();
  }

  @MessagePattern(InventorySizeTopics.ID)
  async getSizeById(@Payload() id: string): Promise<Nullable<SizeDao>> {
    return await this.service.getById(id);
  }

  @MessagePattern(InventorySizeTopics.CREATE)
  async createSize(@Payload() data: CreateSizeDto): Promise<SizeDao> {
    return await this.service.createSize(data);
  }

  @MessagePattern(InventorySizeTopics.UPDATE)
  async updateSize(
    @Payload() data: Chainable<{ id: string }, UpdateSizeDto>,
  ): Promise<void> {
    const { id, ...body } = data;
    return await this.service.updateSize(id, body);
  }

  @MessagePattern(InventorySizeTopics.ACTIVATE)
  async activateSize(@Payload() id: string): Promise<void> {
    return await this.service.activateSize(id);
  }

  @MessagePattern(InventorySizeTopics.DEACTIVATE)
  async deactivateSize(@Payload() id: string): Promise<void> {
    return await this.service.deactivateSize(id);
  }

  @MessagePattern(InventorySizeTopics.RESTORE)
  async restoreSize(@Payload() id: string): Promise<void> {
    return await this.service.restoreSize(id);
  }

  @MessagePattern(InventorySizeTopics.DELETE)
  async deleteSize(@Payload() id: string): Promise<void> {
    return await this.service.deleteSize(id);
  }
}
