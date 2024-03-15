import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { HealthModule } from './health/health.module';
import { MetricsModule } from './metrics/metrics.module';
import { InventoryModule } from './inventory/inventory.module';
import { TwitchModule } from './twitch/twitch.module';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    HealthModule,
    MetricsModule,
    InventoryModule,
    TwitchModule,
    AuthModule,
    UploadModule,
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
        path: 'inventory',
        module: InventoryModule,
      },
      {
        path: 'twitch',
        module: TwitchModule,
      },
      {
        path: 'auth',
        module: AuthModule,
      },
      {
        path: 'upload',
        module: UploadModule,
      },
    ]),
  ],
})
export class AppModule {}
