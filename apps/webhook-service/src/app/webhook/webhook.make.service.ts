import { Injectable } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Injectable()
export class WebhookMakeService {
  private readonly makeWebhookUrl =
    'https://hook.eu2.make.com/6fnhte9uwvbat9v33tbfcetmm4bv6m52';

  constructor(private readonly http: WebhookService) {}

  async sendMakeHook<TData>(event: string, data: TData): Promise<void> {
    await this.http.sendHook<{
      event: string;
      data: TData;
    }>(this.makeWebhookUrl, {
      event,
      data,
    });
  }
}
