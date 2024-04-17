import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
  imports: [
    EventEmitterModule,
    ClientsModule.register([
      {
        name: 'TWITCH_USER_SERVICE',
        ...clientProvider(Queues.AZKABAN_TWITCH),
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
