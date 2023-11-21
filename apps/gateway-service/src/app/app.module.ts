import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { HealthModule } from './health/health.module';
import { WebsocketsModule } from './websockets/websockets.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    DevtoolsModule.register({
      http: true,
      port: 3001,
    }),
    //
    HealthModule,
    WebsocketsModule,
    //
    RouterModule.register([
      {
        path: 'health',
        module: HealthModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
