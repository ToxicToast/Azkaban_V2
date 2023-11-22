import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { HealthModule } from './health/health.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { SseModule } from './sse/sse.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: true,
      port: 3001,
    }),
    //
    HealthModule,
    SseModule,
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
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
