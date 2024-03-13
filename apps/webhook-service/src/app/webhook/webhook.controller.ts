import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WebhookInventoryTopics } from '@azkaban/shared';
import {
  CategoryDao,
  CompanyDao,
  ItemDao,
  LocationDao,
  SizeDao,
  TypeDao,
} from '@azkaban/inventory-infrastructure';
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

  @MessagePattern(WebhookInventoryTopics.COMPANYCREATED)
  async handleInventoryCompanyCreated(@Payload() data: CompanyDao) {
    await this.webhookMake.sendMakeHook<CompanyDao>('inventory-company', data);
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new Inventory-Company: ${data.title}`,
      ['azkaban', 'inventory', 'company'],
      'https://api.toxictoast.de',
    );
  }

  @MessagePattern(WebhookInventoryTopics.ITEMCREATED)
  async handleInventoryItemCreated(@Payload() data: ItemDao) {
    await this.webhookMake.sendMakeHook<ItemDao>('inventory-item', data);
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new Inventory-Item: ${data.title}`,
      ['azkaban', 'inventory', 'item'],
      'https://api.toxictoast.de',
    );
  }

  @MessagePattern(WebhookInventoryTopics.LOCATIONCREATED)
  async handleInventoryLocationCreated(@Payload() data: LocationDao) {
    await this.webhookMake.sendMakeHook<LocationDao>(
      'inventory-location',
      data,
    );
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new Inventory-Location: ${data.title}`,
      ['azkaban', 'inventory', 'location'],
      'https://api.toxictoast.de',
    );
  }

  @MessagePattern(WebhookInventoryTopics.SIZECREATED)
  async handleInventorySizeCreated(@Payload() data: SizeDao) {
    await this.webhookMake.sendMakeHook<SizeDao>('inventory-size', data);
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new Inventory-Size: ${data.title}`,
      ['azkaban', 'inventory', 'size'],
      'https://api.toxictoast.de',
    );
  }

  @MessagePattern(WebhookInventoryTopics.TYPECREATED)
  async handleInventoryTypeCreated(@Payload() data: TypeDao) {
    await this.webhookMake.sendMakeHook<TypeDao>('inventory-type', data);
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new Inventory-Type: ${data.title}`,
      ['azkaban', 'inventory', 'type'],
      'https://api.toxictoast.de',
    );
  }
}
