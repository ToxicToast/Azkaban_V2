import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Chainable, InventoryCompanyTopics, Nullable } from '@azkaban/shared';
import {
  CompanyDao,
  CreateCompanyDto,
  UpdateCompanyDto,
} from '@azkaban/inventory-infrastructure';
import { CompanyService } from './company.service';

@Controller()
export class CompanyController {
  constructor(private readonly service: CompanyService) {}

  @MessagePattern(InventoryCompanyTopics.LIST)
  async getCompanies(): Promise<Array<CompanyDao>> {
    return await this.service.getList();
  }

  @MessagePattern(InventoryCompanyTopics.ID)
  async getCompanyById(@Payload() id: string): Promise<Nullable<CompanyDao>> {
    return await this.service.getById(id);
  }

  @MessagePattern(InventoryCompanyTopics.CREATE)
  async createCompany(@Payload() data: CreateCompanyDto): Promise<CompanyDao> {
    return await this.service.createCompany(data);
  }

  @MessagePattern(InventoryCompanyTopics.UPDATE)
  async updateCompany(
    @Payload() data: Chainable<{ id: string }, UpdateCompanyDto>,
  ): Promise<void> {
    const { id, ...body } = data;
    return await this.service.updateCompany(id, body);
  }

  @MessagePattern(InventoryCompanyTopics.ACTIVATE)
  async activateCompany(@Payload() id: string): Promise<void> {
    return await this.service.activateCompany(id);
  }

  @MessagePattern(InventoryCompanyTopics.DEACTIVATE)
  async deactivateCompany(@Payload() id: string): Promise<void> {
    return await this.service.deactivateCompany(id);
  }

  @MessagePattern(InventoryCompanyTopics.RESTORE)
  async restoreCompany(@Payload() id: string): Promise<void> {
    return await this.service.restoreCompany(id);
  }

  @MessagePattern(InventoryCompanyTopics.DELETE)
  async deleteCompany(@Payload() id: string): Promise<void> {
    return await this.service.deleteCompany(id);
  }
}
