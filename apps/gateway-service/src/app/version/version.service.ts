import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ClientRMQ } from '@nestjs/microservices';
import { CategoryDao } from '@azkaban/inventory-infrastructure';
import {
  InventoryCategoryTopics,
  InventoryCompanyTopics,
  InventoryItemTopics,
  InventoryLocationTopics,
  InventorySizeTopics,
  InventoryTypeTopics,
} from '@azkaban/shared';

@Injectable()
export class VersionService {
  constructor(
    @Inject('INVENTORY_SERVICE') private readonly client: ClientRMQ,
  ) {}

  gatewayVersion(): string {
    return process.env.APP_VERSION ?? 'local';
  }

  async categoryVersion(): Promise<string> {
    return await this.client
      .send<string, object>(InventoryCategoryTopics.VERSION, {})
      .toPromise();
  }

  async companyVersion(): Promise<string> {
    return await this.client
      .send<string, object>(InventoryCompanyTopics.VERSION, {})
      .toPromise();
  }

  async itemVersion(): Promise<string> {
    return await this.client
      .send<string, object>(InventoryItemTopics.VERSION, {})
      .toPromise();
  }

  async locationVersion(): Promise<string> {
    return await this.client
      .send<string, object>(InventoryLocationTopics.VERSION, {})
      .toPromise();
  }

  async sizeVersion(): Promise<string> {
    return await this.client
      .send<string, object>(InventorySizeTopics.VERSION, {})
      .toPromise();
  }

  async typeVersion(): Promise<string> {
    return await this.client
      .send<string, object>(InventoryTypeTopics.VERSION, {})
      .toPromise();
  }
}
