import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateCompanyDto,
  UpdateCompanyDto,
} from '@azkaban/inventory-infrastructure';

@ApiTags('inventory-company')
@Controller()
export class CompanyController {
  constructor(private readonly service: CompanyService) {}

  @Get()
  async getCompanies() {
    return await this.service.getCategories();
  }

  @Get(':id')
  async getCompanyById(@Param('id') id: string) {
    const data = await this.service.getCompanyById(id);
    if (!data) {
      throw new HttpException('Not Found', 404);
    }
    return data;
  }

  @Post()
  async createCompany(@Body() data: CreateCompanyDto) {
    return await this.service.createCompany(data);
  }

  @Put(':id')
  async updateCompany(@Param('id') id: string, @Body() data: UpdateCompanyDto) {
    return await this.service.updateCompany(id, data);
  }

  @Delete(':id')
  async deleteCompany(@Param('id') id: string) {
    return await this.service.deleteCompany(id);
  }

  @Put(':id/restore')
  async restoreCompany(@Param('id') id: string) {
    return await this.service.restoreCompany(id);
  }

  @Put(':id/activate')
  async activateCompany(@Param('id') id: string) {
    return await this.service.activateCompany(id);
  }

  @Put(':id/deactivate')
  async deactivateCompany(@Param('id') id: string) {
    return await this.service.deactivateCompany(id);
  }
}
