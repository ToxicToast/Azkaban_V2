import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WebhookAuthTopics, WebhookInventoryTopics } from '@azkaban/shared';
import {
  CategoryDao,
  CompanyDao,
  ItemDao,
  LocationDao,
  SizeDao,
  TypeDao,
} from '@azkaban/inventory-infrastructure';
import { WebhookApiAlertsService } from './webhook.apialerts.service';
import { WebhookSSEService } from './webhook.sse.service';

@Controller()
export class WebhookController {
  constructor(
    private readonly webhookApiAlerts: WebhookApiAlertsService,
    private readonly webhookSSE: WebhookSSEService,
  ) {}

  @MessagePattern(WebhookInventoryTopics.CATEGORYCREATED)
  async handleInventoryCategoryCreated(@Payload() data: CategoryDao) {
    await this.webhookSSE.sendSSEHook<CategoryDao>('inventory-category', data);
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new Inventory-Category: ${data.title}`,
      ['azkaban', 'inventory', 'category'],
      'https://api.toxictoast.de',
    );
  }

  @MessagePattern(WebhookInventoryTopics.COMPANYCREATED)
  async handleInventoryCompanyCreated(@Payload() data: CompanyDao) {
    await this.webhookSSE.sendSSEHook<CompanyDao>('inventory-company', data);
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new Inventory-Company: ${data.title}`,
      ['azkaban', 'inventory', 'company'],
      'https://api.toxictoast.de',
    );
  }

  @MessagePattern(WebhookInventoryTopics.ITEMCREATED)
  async handleInventoryItemCreated(@Payload() data: ItemDao) {
    await this.webhookSSE.sendSSEHook<ItemDao>('inventory-item', data);
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new Inventory-Item: ${data.title}`,
      ['azkaban', 'inventory', 'item'],
      'https://api.toxictoast.de',
    );
  }

  @MessagePattern(WebhookInventoryTopics.LOCATIONCREATED)
  async handleInventoryLocationCreated(@Payload() data: LocationDao) {
    await this.webhookSSE.sendSSEHook<LocationDao>('inventory-location', data);
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new Inventory-Location: ${data.title}`,
      ['azkaban', 'inventory', 'location'],
      'https://api.toxictoast.de',
    );
  }

  @MessagePattern(WebhookInventoryTopics.SIZECREATED)
  async handleInventorySizeCreated(@Payload() data: SizeDao) {
    await this.webhookSSE.sendSSEHook<SizeDao>('inventory-size', data);
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new Inventory-Size: ${data.title}`,
      ['azkaban', 'inventory', 'size'],
      'https://api.toxictoast.de',
    );
  }

  @MessagePattern(WebhookInventoryTopics.TYPECREATED)
  async handleInventoryTypeCreated(@Payload() data: TypeDao) {
    await this.webhookSSE.sendSSEHook<TypeDao>('inventory-type', data);
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new Inventory-Type: ${data.title}`,
      ['azkaban', 'inventory', 'type'],
      'https://api.toxictoast.de',
    );
  }

  @MessagePattern(WebhookInventoryTopics.OCRCREATED)
  async handleAzkabanOcrCreated(@Payload() data: unknown) {
    await this.webhookSSE.sendSSEHook<unknown>('azkaban-ocr', data);
    await this.webhookApiAlerts.sendApiAlertsHook(
      `📦 Created new OCR Upload`,
      ['azkaban', 'upload', 'ocr'],
      'https://api.toxictoast.de',
    );
  }

  @MessagePattern(WebhookAuthTopics.USERLOGIN)
  async handleAzkabanAuthLogin(@Payload() data: string) {
    await this.webhookSSE.sendSSEHook<unknown>('azkaban-auth', data);
    await this.webhookApiAlerts.sendApiAlertsHook(
      `🪐 New User Login - ${data}`,
      ['azkaban', 'auth', 'login'],
      'https://api.toxictoast.de',
    );
  }
}
