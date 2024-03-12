import { Injectable, Logger } from '@nestjs/common';
import alerts from '@apialerts/js';

@Injectable()
export class WebhookApiAlertsService {
  async sendApiAlertsHook<TData>(data: TData): Promise<void> {
    alerts.setApiKey(process.env.MAGPIE_KEY ?? 'api-key');
    //
    try {
      const item = data as { title: string };
      alerts.send({
        message: `Created new Inventory-Category: ${item.title}`,
        tags: ['azkaban'],
        link: 'https://www.toxictoast.de',
      });
    } catch (error) {
      Logger.error(error, WebhookApiAlertsService.name);
    }
  }
}
