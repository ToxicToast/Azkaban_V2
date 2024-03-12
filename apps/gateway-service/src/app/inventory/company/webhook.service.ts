import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { CompanyDao } from '@azkaban/inventory-infrastructure';
import { WebhookInventoryTopics } from '@azkaban/shared';

@Injectable()
export class CompanyWebhookService {
  constructor(@Inject('WEBHOOK_SERVICE') private readonly webhook: ClientRMQ) {}

  onCompanyCreated(data: CompanyDao): void {
    this.webhook.emit(WebhookInventoryTopics.COMPANYCREATED, data).toPromise();
  }
}
