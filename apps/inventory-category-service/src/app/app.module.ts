import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { MetricsModule } from './metrics/metrics.module';
import { RouterModule } from '@nestjs/core';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    HealthModule,
    MetricsModule,
    CategoryModule,
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
        module: CategoryModule,
      },
    ]),
  ],
})
export class AppModule {}
