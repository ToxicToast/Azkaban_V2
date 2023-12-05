import { Module } from '@nestjs/common';

import { TwitchModule } from './twitch/twitch.module';
import { MetricsModule } from './metrics/metrics.module';
import { HealthModule } from './health/health.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    TwitchModule,
    MetricsModule,
    HealthModule,
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
        path: 'twitch',
        module: TwitchModule,
      },
    ]),
  ],
})
export class AppModule {}
