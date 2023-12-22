import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { HealthModule } from './health/health.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [
    HealthModule,
    MetricsModule,
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
  controllers: [],
  providers: [],
})
export class AppModule {}
