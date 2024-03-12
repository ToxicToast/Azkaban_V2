import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { ItemDao } from '@azkaban/inventory-infrastructure';
import { WebhookInventoryTopics } from '@azkaban/shared';

@Injectable()
export class ItemWebhookService {
  constructor(@Inject('WEBHOOK_SERVICE') private readonly webhook: ClientRMQ) {}

  onItemCreated(data: ItemDao): void {
    this.webhook.emit(WebhookInventoryTopics.ITEMCREATED, data).toPromise();
  }
}
