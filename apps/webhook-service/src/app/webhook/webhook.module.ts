import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { WebhookApiAlertsService } from './webhook.apialerts.service';
import { WebhookSSEService } from './webhook.sse.service';

@Module({
  imports: [HttpModule],
  controllers: [WebhookController],
  providers: [WebhookService, WebhookApiAlertsService, WebhookSSEService],
})
export class WebhookModule {}
