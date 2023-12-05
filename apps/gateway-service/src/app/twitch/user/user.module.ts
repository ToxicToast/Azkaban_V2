import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider } from '@azkaban/shared';
@Module({
  imports: [
    EventEmitterModule,
    ClientsModule.register([
      {
        name: 'TWITCH_USER_SERVICE',
        ...clientProvider('twitch_queue'),
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class UserModule {}
