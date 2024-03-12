import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { WebhookMakeService } from './webhook.make.service';
import { WebhookApiAlertsService } from './webhook.apialerts.service';

@Module({
  imports: [HttpModule],
  controllers: [WebhookController],
  providers: [WebhookService, WebhookMakeService, WebhookApiAlertsService],
})
export class WebhookModule {}
