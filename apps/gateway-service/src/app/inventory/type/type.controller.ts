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
import { TypeService } from './type.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateTypeDto,
  UpdateTypeDto,
} from '@azkaban/inventory-infrastructure';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { Groups } from '../../../decorator/groups.decorator';
import { AzkabanGroups } from '@azkaban/shared';

@UseGuards(AuthGuard, GroupsGuard)
@ApiTags('inventory-type')
@Controller()
export class TypeController {
  constructor(private readonly service: TypeService) {}

  @Groups(AzkabanGroups.INVENTORY)
  @Get()
  async getTypes() {
    return await this.service.getTypes();
  }

  @Groups(AzkabanGroups.INVENTORY)
  @Get(':id')
  async getTypeById(@Param('id') id: string) {
    const data = await this.service.getTypeById(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Post()
  async createType(@Body() data: CreateTypeDto) {
    return await this.service.createType(data);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id')
  async updateType(@Param('id') id: string, @Body() data: UpdateTypeDto) {
    return await this.service.updateType(id, data);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Delete(':id')
  async deleteType(@Param('id') id: string) {
    return await this.service.deleteType(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/restore')
  async restoreType(@Param('id') id: string) {
    return await this.service.restoreType(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/activate')
  async activateType(@Param('id') id: string) {
    return await this.service.activateType(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/deactivate')
  async deactivateType(@Param('id') id: string) {
    return await this.service.deactivateType(id);
  }
}
