import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MetricsModule } from './metrics/metrics.module';
import { HealthModule } from './health/health.module';
import { HomeassistantModule } from './homeassistant/homeassistant.module';

@Module({
  imports: [
    HealthModule,
    MetricsModule,
    HomeassistantModule,
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
        module: HomeassistantModule,
      },
    ]),
  ],
})
export class AppModule {}
