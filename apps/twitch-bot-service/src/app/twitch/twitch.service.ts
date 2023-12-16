import { Inject, Injectable, Logger } from '@nestjs/common';
import { Bot } from '@azkaban/toasty';
import { ClientRMQ } from '@nestjs/microservices';

@Injectable()
export class TwitchService {
  private readonly bot: Bot;

  constructor(
    @Inject('TWITCH_CLIENT_ID') private readonly clientId: string,
    @Inject('TWITCH_SECRET_ID') private readonly clientSecret: string,
    @Inject('TWITCH_USER_ID') private readonly userId: string,
    @Inject('TWITCH_ACCESS_TOKEN') private readonly accessToken: string,
    @Inject('TWITCH_REFRESH_TOKEN') private readonly refreshToken: string,
    @Inject('TWITCH_CHANNELS') private readonly channels: string,
    @Inject('TWITCH_SERVICE') private readonly client: ClientRMQ
  ) {
    this.bot = new Bot({
      authentication: {
        userId: this.userId,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
        accessToken: this.accessToken,
        refreshToken: this.refreshToken,
      },
      channels: this.channels.split(','),
    });
  }

  get toasty(): Bot {
    return this.bot;
  }

  async emitEvent<Data>(event: string, data: Data): Promise<void> {
    await this.client
      .send<void, Data>(event, data)
      .toPromise()
      .catch((err) => Logger.error(err, event))
      .then(() => Logger.debug(data, event));
  }
}
