import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { SizeDao } from '@azkaban/inventory-infrastructure';
import { WebhookInventoryTopics } from '@azkaban/shared';

@Injectable()
export class SizeWebhookService {
  constructor(@Inject('WEBHOOK_SERVICE') private readonly webhook: ClientRMQ) {}

  onSizeCreated(data: SizeDao): void {
    this.webhook.emit(WebhookInventoryTopics.SIZECREATED, data).toPromise();
  }
}
