import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import {
  CreateSizeDto,
  SizeDao,
  UpdateSizeDto,
} from '@azkaban/inventory-infrastructure';
import { InventorySizeTopics, Nullable } from '@azkaban/shared';
import { SizeWebhookService } from './webhook.service';

@Injectable()
export class SizeService {
  constructor(
    @Inject('SIZE_SERVICE') private readonly client: ClientRMQ,
    private readonly webhookService: SizeWebhookService,
  ) {}

  async getSizes(): Promise<Array<SizeDao>> {
    return await this.client
      .send<Array<SizeDao>, object>(InventorySizeTopics.LIST, {})
      .toPromise();
  }

  async getSizeById(id: string): Promise<Nullable<SizeDao>> {
    return await this.client
      .send<Nullable<SizeDao>, string>(InventorySizeTopics.ID, id)
      .toPromise();
  }

  async createSize(data: CreateSizeDto): Promise<SizeDao> {
    return await this.client
      .send<SizeDao, CreateSizeDto>(InventorySizeTopics.CREATE, data)
      .toPromise()
      .then((data: SizeDao) => {
        this.webhookService.onSizeCreated(data);
        return data;
      });
  }

  async updateSize(id: string, data: UpdateSizeDto): Promise<void> {
    return await this.client
      .send<
        void,
        { id: string; data: UpdateSizeDto }
      >(InventorySizeTopics.UPDATE, { id, data })
      .toPromise();
  }

  async deleteSize(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventorySizeTopics.DELETE, id)
      .toPromise();
  }

  async restoreSize(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventorySizeTopics.RESTORE, id)
      .toPromise();
  }

  async activateSize(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventorySizeTopics.ACTIVATE, id)
      .toPromise();
  }

  async deactivateSize(id: string): Promise<void> {
    return await this.client
      .send<void, string>(InventorySizeTopics.DEACTIVATE, id)
      .toPromise();
  }
}
