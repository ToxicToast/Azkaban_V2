import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MetricsModule } from './metrics/metrics.module';
import { HealthModule } from './health/health.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    HealthModule,
    MetricsModule,
    LocationModule,
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
        module: LocationModule,
      },
    ]),
  ],
})
export class AppModule {}
