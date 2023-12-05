import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { HealthModule } from './health/health.module';
import { SseModule } from './sse/sse.module';
import { MetricsModule } from './metrics/metrics.module';
import { InventoryModule } from './inventory/inventory.module';
import { TwitchModule } from './twitch/twitch.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: true,
      delimiter: '.',
      newListener: true,
      removeListener: true,
      verboseMemoryLeak: true,
    }),
    //
    HealthModule,
    SseModule,
    MetricsModule,
    InventoryModule,
    TwitchModule,
    //
    RouterModule.register([
      {
        path: 'health',
        module: HealthModule,
      },
      {
        path: 'sse',
        module: SseModule,
      },
      {
        path: 'metrics',
        module: MetricsModule,
      },
      {
        path: 'inventory',
        module: InventoryModule,
      },
      {
        path: 'twitch',
        module: TwitchModule,
      },
    ]),
  ],
})
export class AppModule {}
