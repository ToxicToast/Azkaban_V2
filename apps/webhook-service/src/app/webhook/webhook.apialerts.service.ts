import { Injectable, Logger } from '@nestjs/common';
import alerts from '@apialerts/js';

@Injectable()
export class WebhookApiAlertsService {
  async sendApiAlertsHook(
    message: string,
    tags: Array<string>,
    link: string,
  ): Promise<void> {
    alerts.setApiKey(process.env.MAGPIE_KEY ?? 'api-key');
    //
    try {
      alerts.send({
        message,
        tags,
        link,
      });
    } catch (error) {
      Logger.error(error, WebhookApiAlertsService.name);
    }
  }
}
