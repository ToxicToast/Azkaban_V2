import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MetricsModule } from './metrics/metrics.module';
import { HealthModule } from './health/health.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    HealthModule,
    MetricsModule,
    ItemModule,
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
        module: ItemModule,
      },
    ]),
  ],
})
export class AppModule {}
