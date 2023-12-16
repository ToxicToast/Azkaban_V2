import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { ChannelModule } from './channel/channel.module';
import { StreamModule } from './stream/stream.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    UserModule,
    ChannelModule,
    StreamModule,
    MessageModule,
    //
    RouterModule.register([
      {
        path: 'twitch',
        children: [
          {
            path: 'user',
            module: UserModule,
          },
          {
            path: 'channel',
            module: ChannelModule,
          },
          {
            path: 'stream',
            module: StreamModule,
          },
          {
            path: 'message',
            module: MessageModule,
          },
        ],
      },
    ]),
  ],
})
export class TwitchModule {}
