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
import { SizeService } from './size.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateSizeDto,
  UpdateSizeDto,
} from '@azkaban/inventory-infrastructure';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { Groups } from '../../../decorator/groups.decorator';

@UseGuards(AuthGuard, GroupsGuard)
@ApiTags('inventory-location')
@Controller()
export class SizeController {
  constructor(private readonly service: SizeService) {}

  @Groups('inventory')
  @Get()
  async getSizes() {
    return await this.service.getSizes();
  }

  @Groups('inventory')
  @Get(':id')
  async getSizeById(@Param('id') id: string) {
    const data = await this.service.getSizeById(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups('inventory-admin')
  @Post()
  async createSize(@Body() data: CreateSizeDto) {
    return await this.service.createSize(data);
  }

  @Groups('inventory-admin')
  @Put(':id')
  async updateSize(@Param('id') id: string, @Body() data: UpdateSizeDto) {
    return await this.service.updateSize(id, data);
  }

  @Groups('inventory-admin')
  @Delete(':id')
  async deleteSize(@Param('id') id: string) {
    return await this.service.deleteSize(id);
  }

  @Groups('inventory-admin')
  @Put(':id/restore')
  async restoreSize(@Param('id') id: string) {
    return await this.service.restoreSize(id);
  }

  @Groups('inventory-admin')
  @Put(':id/activate')
  async activateSize(@Param('id') id: string) {
    return await this.service.activateSize(id);
  }

  @Groups('inventory-admin')
  @Put(':id/deactivate')
  async deactivateSize(@Param('id') id: string) {
    return await this.service.deactivateSize(id);
  }
}
