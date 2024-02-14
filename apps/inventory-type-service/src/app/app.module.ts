import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MetricsModule } from './metrics/metrics.module';
import { HealthModule } from './health/health.module';
import { TypeModule } from './type/type.module';

@Module({
  imports: [
    HealthModule,
    MetricsModule,
    TypeModule,
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
        module: TypeModule,
      },
    ]),
  ],
})
export class AppModule {}
