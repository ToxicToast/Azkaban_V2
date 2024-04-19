import { Injectable } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Injectable()
export class WebhookSSEService {
  private readonly sseWebhookUrl =
    'https://events.toxictoast.de/api/sse/notification/event';

  constructor(private readonly http: WebhookService) {}

  async sendSSEHook<TData>(event: string, data: TData): Promise<void> {
    await this.http.sendHook<{
      event: string;
      data: TData;
    }>(this.sseWebhookUrl, {
      event,
      data,
    });
  }
}
