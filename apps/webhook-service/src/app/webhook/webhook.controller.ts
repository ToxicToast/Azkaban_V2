import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WebhookInventoryTopics } from '@azkaban/shared';
import { CategoryDao } from '@azkaban/inventory-infrastructure';
import { WebhookMakeService } from './webhook.make.service';
import { WebhookApiAlertsService } from './webhook.apialerts.service';

@Controller()
export class WebhookController {
  constructor(
    private readonly webhookMake: WebhookMakeService,
    private readonly webhookApiAlerts: WebhookApiAlertsService,
  ) {}

  @MessagePattern(WebhookInventoryTopics.CATEGORYCREATED)
  async handleInventoryCategoryCreated(@Payload() data: CategoryDao) {
    await this.webhookMake.sendMakeHook<CategoryDao>(
      'inventory-category',
      data,
    );
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new Inventory-Category: ${data.title}`,
      ['azkaban', 'inventory', 'category'],
      'https://api.toxictoast.de',
    );
  }
}
