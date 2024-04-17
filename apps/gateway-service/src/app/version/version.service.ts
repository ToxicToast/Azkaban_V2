import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
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
      .toPromise()
      .catch(() => {
        return 'not available';
      });
  }

  async companyVersion(): Promise<string> {
    return await this.client
      .send<string, object>(InventoryCompanyTopics.VERSION, {})
      .toPromise()
      .catch(() => {
        return 'not available';
      });
  }

  async itemVersion(): Promise<string> {
    return await this.client
      .send<string, object>(InventoryItemTopics.VERSION, {})
      .toPromise()
      .catch(() => {
        return 'not available';
      });
  }

  async locationVersion(): Promise<string> {
    return await this.client
      .send<string, object>(InventoryLocationTopics.VERSION, {})
      .toPromise()
      .catch(() => {
        return 'not available';
      });
  }

  async sizeVersion(): Promise<string> {
    return await this.client
      .send<string, object>(InventorySizeTopics.VERSION, {})
      .toPromise()
      .catch(() => {
        return 'not available';
      });
  }

  async typeVersion(): Promise<string> {
    return await this.client
      .send<string, object>(InventoryTypeTopics.VERSION, {})
      .toPromise()
      .catch(() => {
        return 'not available';
      });
  }
}
