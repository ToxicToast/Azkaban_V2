import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { TypeDao } from '@azkaban/inventory-infrastructure';
import { WebhookInventoryTopics } from '@azkaban/shared';

@Injectable()
export class TypeWebhookService {
  constructor(@Inject('WEBHOOK_SERVICE') private readonly webhook: ClientRMQ) {}

  onTypeCreated(data: TypeDao): void {
    this.webhook.emit(WebhookInventoryTopics.TYPECREATED, data).toPromise();
  }
}
