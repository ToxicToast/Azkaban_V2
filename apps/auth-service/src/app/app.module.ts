import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { MetricsModule } from './metrics/metrics.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    HealthModule,
    MetricsModule,
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
    ]),
  ],
})
export class AppModule {}
