import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MetricsModule } from './metrics/metrics.module';
import { HealthModule } from './health/health.module';
import { SizeModule } from './size/size.module';

@Module({
  imports: [
    HealthModule,
    MetricsModule,
    SizeModule,
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
        module: SizeModule,
      },
    ]),
  ],
})
export class AppModule {}
