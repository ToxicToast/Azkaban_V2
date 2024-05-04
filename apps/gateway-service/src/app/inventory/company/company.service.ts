import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { InventoryCompanyTopics, Nullable } from '@azkaban/shared';
import {
  CompanyDao,
  CreateCompanyDto,
  UpdateCompanyDto,
} from '@azkaban/inventory-infrastructure';
import { CompanyWebhookService } from './webhook.service';

@Injectable()
export class CompanyService {
  constructor(
    @Inject('COMPANY_SERVICE') private readonly client: ClientRMQ,
    private readonly webhookService: CompanyWebhookService,
  ) {}

  async getCategories(): Promise<Array<CompanyDao>> {
    return await this.client
      .send<Array<CompanyDao>, object>(InventoryCompanyTopics.LIST, {})
      .toPromise()
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async getCompanyById(id: string): Promise<Nullable<CompanyDao>> {
    return await this.client
      .send<Nullable<CompanyDao>, string>(InventoryCompanyTopics.ID, id)
      .toPromise()
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async createCompany(data: CreateCompanyDto): Promise<CompanyDao> {
    return await this.client
      .send<CompanyDao, CreateCompanyDto>(InventoryCompanyTopics.CREATE, data)
      .toPromise()
      .then((data: CompanyDao) => {
        this.webhookService.onCompanyCreated(data);
        return data;
      })
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async updateCompany(id: string, data: UpdateCompanyDto): Promise<void> {
    return await this.client
      .send<void, { id: string; data: UpdateCompanyDto }>(
        InventoryCompanyTopics.UPDATE,
        { id, data },
      )
      .toPromise()
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async deleteCompany(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryCompanyTopics.DELETE, id)
      .toPromise()
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async restoreCompany(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryCompanyTopics.RESTORE, id)
      .toPromise()
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async activateCompany(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryCompanyTopics.ACTIVATE, id)
      .toPromise()
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }

  async deactivateCompany(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventoryCompanyTopics.DEACTIVATE, id)
      .toPromise()
      .catch((error) => {
        Logger.error(error);
        return null;
      });
  }
}
