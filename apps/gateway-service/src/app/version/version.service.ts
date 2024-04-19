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
    @Inject('INV_CATEGORY_SERVICE') private readonly categoryClient: ClientRMQ,
    @Inject('INV_COMPANY_SERVICE') private readonly companyClient: ClientRMQ,
    @Inject('INV_ITEM_SERVICE') private readonly itemClient: ClientRMQ,
    @Inject('INV_LOCATION_SERVICE') private readonly locationClient: ClientRMQ,
    @Inject('INV_SIZE_SERVICE') private readonly sizeClient: ClientRMQ,
    @Inject('INV_TYPE_SERVICE') private readonly typeClient: ClientRMQ,
  ) {}

  gatewayVersion(): string {
    return process.env.APP_VERSION ?? 'local';
  }

  async categoryVersion(): Promise<string> {
    return await this.categoryClient
      .send<string, object>(InventoryCategoryTopics.VERSION, {})
      .toPromise()
      .catch(() => {
        return 'not available';
      });
  }

  async companyVersion(): Promise<string> {
    return await this.companyClient
      .send<string, object>(InventoryCompanyTopics.VERSION, {})
      .toPromise()
      .catch(() => {
        return 'not available';
      });
  }

  async itemVersion(): Promise<string> {
    return await this.itemClient
      .send<string, object>(InventoryItemTopics.VERSION, {})
      .toPromise()
      .catch(() => {
        return 'not available';
      });
  }

  async locationVersion(): Promise<string> {
    return await this.locationClient
      .send<string, object>(InventoryLocationTopics.VERSION, {})
      .toPromise()
      .catch(() => {
        return 'not available';
      });
  }

  async sizeVersion(): Promise<string> {
    return await this.sizeClient
      .send<string, object>(InventorySizeTopics.VERSION, {})
      .toPromise()
      .catch(() => {
        return 'not available';
      });
  }

  async typeVersion(): Promise<string> {
    return await this.typeClient
      .send<string, object>(InventoryTypeTopics.VERSION, {})
      .toPromise()
      .catch(() => {
        return 'not available';
      });
  }
}
