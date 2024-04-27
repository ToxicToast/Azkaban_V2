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
import { LocationService } from './location.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateLocationDto,
  UpdateLocationDto,
} from '@azkaban/inventory-infrastructure';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { Groups } from '../../../decorator/groups.decorator';
import { AzkabanGroups } from '@azkaban/shared';

@UseGuards(AuthGuard, GroupsGuard)
@ApiTags('inventory-location')
@Controller()
export class LocationController {
  constructor(private readonly service: LocationService) {}

  @Groups(AzkabanGroups.INVENTORY)
  @Get()
  async getLocations() {
    return await this.service.getLocations();
  }

  @Groups(AzkabanGroups.INVENTORY)
  @Get(':id')
  async getLocationById(@Param('id') id: string) {
    const data = await this.service.getLocationById(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Post()
  async createLocation(@Body() data: CreateLocationDto) {
    return await this.service.createLocation(data);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id')
  async updateLocation(
    @Param('id') id: string,
    @Body() data: UpdateLocationDto,
  ) {
    return await this.service.updateLocation(id, data);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Delete(':id')
  async deleteLocation(@Param('id') id: string) {
    return await this.service.deleteLocation(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/restore')
  async restoreLocation(@Param('id') id: string) {
    return await this.service.restoreLocation(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/activate')
  async activateLocation(@Param('id') id: string) {
    return await this.service.activateLocation(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/deactivate')
  async deactivateLocation(@Param('id') id: string) {
    return await this.service.deactivateLocation(id);
  }
}
