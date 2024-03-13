import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Chainable, InventoryTypeTopics, Nullable } from '@azkaban/shared';
import {
  TypeDao,
  CreateTypeDto,
  UpdateTypeDto,
} from '@azkaban/inventory-infrastructure';
import { TypeService } from './type.service';

@Controller()
export class TypeController {
  constructor(private readonly service: TypeService) {}

  @MessagePattern(InventoryTypeTopics.LIST)
  async getTypes(): Promise<Array<TypeDao>> {
    return await this.service.getList();
  }

  @MessagePattern(InventoryTypeTopics.ID)
  async getTypeById(@Payload() id: string): Promise<Nullable<TypeDao>> {
    return await this.service.getById(id);
  }

  @MessagePattern(InventoryTypeTopics.CREATE)
  async createType(@Payload() data: CreateTypeDto): Promise<TypeDao> {
    return await this.service.createType(data);
  }

  @MessagePattern(InventoryTypeTopics.UPDATE)
  async updateType(
    @Payload() data: Chainable<{ id: string }, UpdateTypeDto>,
  ): Promise<void> {
    const { id, ...body } = data;
    return await this.service.updateType(id, body);
  }

  @MessagePattern(InventoryTypeTopics.ACTIVATE)
  async activateType(@Payload() id: string): Promise<void> {
    return await this.service.activateType(id);
  }

  @MessagePattern(InventoryTypeTopics.DEACTIVATE)
  async deactivateType(@Payload() id: string): Promise<void> {
    return await this.service.deactivateType(id);
  }

  @MessagePattern(InventoryTypeTopics.RESTORE)
  async restoreType(@Payload() id: string): Promise<void> {
    return await this.service.restoreType(id);
  }

  @MessagePattern(InventoryTypeTopics.DELETE)
  async deleteType(@Payload() id: string): Promise<void> {
    return await this.service.deleteType(id);
  }
}
