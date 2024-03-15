import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { MetricsModule } from './metrics/metrics.module';
import { SseModule } from './sse/sse.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    HealthModule,
    MetricsModule,
    SseModule,
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
        path: 'sse',
        module: SseModule,
      },
    ]),
  ],
})
export class AppModule {}
