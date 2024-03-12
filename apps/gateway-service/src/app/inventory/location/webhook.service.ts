import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { LocationDao } from '@azkaban/inventory-infrastructure';
import { WebhookInventoryTopics } from '@azkaban/shared';

@Injectable()
export class LocationWebhookService {
  constructor(@Inject('WEBHOOK_SERVICE') private readonly webhook: ClientRMQ) {}

  onLocationCreated(data: LocationDao): void {
    this.webhook.emit(WebhookInventoryTopics.LOCATIONCREATED, data).toPromise();
  }
}
