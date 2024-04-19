import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { ChannelModule } from './channel/channel.module';
import { StreamModule } from './stream/stream.module';
import { MessageModule } from './message/message.module';
import { HookModule } from './hook/hook.module';

@Module({
  imports: [
    UserModule,
    ChannelModule,
    StreamModule,
    MessageModule,
    HookModule,
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
          {
            path: 'hook',
            module: HookModule,
          },
        ],
      },
    ]),
  ],
})
export class TwitchModule {}
