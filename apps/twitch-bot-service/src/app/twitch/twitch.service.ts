import { Inject, Injectable, Logger } from '@nestjs/common';
import { Bot } from '@azkaban/toasty';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TwitchService {
  private bot: Bot;

  constructor(
    @Inject('TWITCH_CLIENT_ID') private readonly clientId: string,
    @Inject('TWITCH_SECRET_ID') private readonly clientSecret: string,
    @Inject('TWITCH_USER_ID') private readonly userId: string,
    @Inject('TWITCH_ACCESS_TOKEN') private readonly accessToken: string,
    @Inject('TWITCH_REFRESH_TOKEN') private readonly refreshToken: string,
    @Inject('TWITCH_CHANNELS') private readonly channels: string,
    @Inject('GATEWAY_URL') private readonly gatewayUrl: string,
    private readonly http: HttpService
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

  postEvent<Data>(endpoint: string, data: Data): void {
    this.http
      .post<void>(`${this.gatewayUrl}/api/twitch/bot/${endpoint}`, data)
      .toPromise()
      .catch((err) => Logger.error(err));
  }
}
