import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { HealthModule } from './health/health.module';
import { SseModule } from './sse/sse.module';
import { MetricsModule } from './metrics/metrics.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    HealthModule,
    SseModule,
    MetricsModule,
    InventoryModule,
    //
    RouterModule.register([
      {
        path: 'health',
        module: HealthModule,
      },
      {
        path: 'sse',
        module: SseModule,
      },
      {
        path: 'metrics',
        module: MetricsModule,
      },
      {
        path: 'inventory',
        module: InventoryModule,
      },
    ]),
  ],
})
export class AppModule {}
