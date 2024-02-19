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

@UseGuards(AuthGuard, GroupsGuard)
@ApiTags('inventory-type')
@Controller()
export class TypeController {
  constructor(private readonly service: TypeService) {}

  @Groups('inventory')
  @Get()
  async getTypes() {
    return await this.service.getTypes();
  }

  @Groups('inventory')
  @Get(':id')
  async getTypeById(@Param('id') id: string) {
    const data = await this.service.getTypeById(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups('inventory-admin')
  @Post()
  async createType(@Body() data: CreateTypeDto) {
    return await this.service.createType(data);
  }

  @Groups('inventory-admin')
  @Put(':id')
  async updateType(@Param('id') id: string, @Body() data: UpdateTypeDto) {
    return await this.service.updateType(id, data);
  }

  @Groups('inventory-admin')
  @Delete(':id')
  async deleteType(@Param('id') id: string) {
    return await this.service.deleteType(id);
  }

  @Groups('inventory-admin')
  @Put(':id/restore')
  async restoreType(@Param('id') id: string) {
    return await this.service.restoreType(id);
  }

  @Groups('inventory-admin')
  @Put(':id/activate')
  async activateType(@Param('id') id: string) {
    return await this.service.activateType(id);
  }

  @Groups('inventory-admin')
  @Put(':id/deactivate')
  async deactivateType(@Param('id') id: string) {
    return await this.service.deactivateType(id);
  }
}
