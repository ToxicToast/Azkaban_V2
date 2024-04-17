import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ClientRMQ } from '@nestjs/microservices';
import { CategoryDao } from '@azkaban/inventory-infrastructure';
import { InventoryCategoryTopics } from '@azkaban/shared';

@Injectable()
export class VersionService {
  constructor(
    @Inject('INVENTORY_SERVICE') private readonly client: ClientRMQ,
  ) {}

  gatewayVersion(): string {
    return process.env.APP_VERSION ?? 'local';
  }

  async categoryVersion(): Promise<unknown> {
    return await this.client
      .send<string, object>(InventoryCategoryTopics.VERSION, {})
      .toPromise();
  }
}
