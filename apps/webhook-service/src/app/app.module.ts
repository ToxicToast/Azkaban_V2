import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MetricsModule } from './metrics/metrics.module';
import { HealthModule } from './health/health.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [
    HealthModule,
    MetricsModule,
    WebhookModule,
    //
    RouterModule.register([
      {
        path: 'health',
        module: HealthModule,
      },
      {
        path: 'metrics',
        module: MetricsModule,
      },
      {
        path: '',
        module: WebhookModule,
      },
    ]),
  ],
})
export class AppModule {}
