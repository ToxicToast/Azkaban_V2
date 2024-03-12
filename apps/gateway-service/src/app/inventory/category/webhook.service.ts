import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { CategoryDao } from '@azkaban/inventory-infrastructure';
import { WebhookInventoryTopics } from '@azkaban/shared';

@Injectable()
export class CategoryWebhookService {
  constructor(@Inject('WEBHOOK_SERVICE') private readonly webhook: ClientRMQ) {}

  onCategoryCreated(data: CategoryDao): void {
    this.webhook.emit(WebhookInventoryTopics.CATEGORYCREATED, data).toPromise();
  }
}
