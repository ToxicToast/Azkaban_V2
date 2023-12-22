import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { HealthModule } from './health/health.module';
import { MetricsModule } from './metrics/metrics.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    HealthModule,
    MetricsModule,
    CompanyModule,
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
        module: CompanyModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
