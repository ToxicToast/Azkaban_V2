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
  UseInterceptors,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateCompanyDto,
  UpdateCompanyDto,
} from '@azkaban/inventory-infrastructure';
import { AuthGuard } from '../../../guard/auth.guard';
import { GroupsGuard } from '../../../guard/groups.guard';
import { Groups } from '../../../decorator/groups.decorator';
import { AzkabanGroups } from '@azkaban/shared';

@UseGuards(AuthGuard, GroupsGuard)
@ApiTags('inventory-company')
@Controller()
export class CompanyController {
  constructor(private readonly service: CompanyService) {}

  @Groups(AzkabanGroups.INVENTORY)
  @Get()
  async getCompanies() {
    return await this.service.getCategories();
  }

  @Groups(AzkabanGroups.INVENTORY)
  @Get(':id')
  async getCompanyById(@Param('id') id: string) {
    const data = await this.service.getCompanyById(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Post()
  async createCompany(@Body() data: CreateCompanyDto) {
    return await this.service.createCompany(data);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id')
  async updateCompany(@Param('id') id: string, @Body() data: UpdateCompanyDto) {
    return await this.service.updateCompany(id, data);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Delete(':id')
  async deleteCompany(@Param('id') id: string) {
    return await this.service.deleteCompany(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/restore')
  async restoreCompany(@Param('id') id: string) {
    return await this.service.restoreCompany(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/activate')
  async activateCompany(@Param('id') id: string) {
    return await this.service.activateCompany(id);
  }

  @Groups(AzkabanGroups.INVENTORY_ADMIN)
  @Put(':id/deactivate')
  async deactivateCompany(@Param('id') id: string) {
    return await this.service.deactivateCompany(id);
  }
}
