import { Authentication, Nullable } from '@azkaban/shared';
import {
  AccessToken,
  AppTokenAuthProvider,
  RefreshingAuthProvider,
} from '@twurple/auth';
import { Logger } from '@nestjs/common';

export class Auth {
  private readonly userId: Nullable<string>;
  private authBotProvider: Nullable<RefreshingAuthProvider>;
  private authAppProvider: Nullable<AppTokenAuthProvider>;
  private accessToken: Nullable<string>;
  private refreshToken: Nullable<string>;
  private readonly clientId: Nullable<string>;
  private readonly clientSecret: Nullable<string>;

  constructor(options: Authentication) {
    this.authBotProvider = null;
    this.authAppProvider = null;
    this.accessToken = options.accessToken ?? null;
    this.refreshToken = options.refreshToken ?? null;
    this.clientId = options.clientId ?? null;
    this.clientSecret = options.clientSecret ?? null;
    this.userId = options.userId ?? null;
    //
    this.init();
  }

  private init(): void {
    if (!this.clientId || !this.clientSecret) {
      throw new Error('Missing Client Id and/or Client Secret');
    }
    //
    this.authBotProvider = new RefreshingAuthProvider({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
    });
    if (!this.userId) {
      throw new Error('Missing User Id');
    }
    this.authBotProvider.addUser(
      this.userId,
      {
        accessToken: this.accessToken,
        refreshToken: this.refreshToken,
        expiresIn: null,
        obtainmentTimestamp: Math.ceil(new Date().getTime() / 1000),
      },
      ['chat']
    );
    Logger.debug('Successfully authenticated');
    this.authBotProvider.onRefresh((_, tokenData: AccessToken) => {
      this.accessToken = tokenData.accessToken;
      this.refreshToken = tokenData.refreshToken;
      Logger.debug('Refreshing access token for user', this.userId, tokenData);
    });
    //
    this.authAppProvider = new AppTokenAuthProvider(
      this.clientId,
      this.clientSecret
    );
  }

  get instanceBot(): RefreshingAuthProvider {
    if (!this.authBotProvider) {
      throw new Error('Auth Bot Provider not initialized');
    }
    return this.authBotProvider;
  }

  get instanceApp(): AppTokenAuthProvider {
    if (!this.authAppProvider) {
      throw new Error('Auth App Provider not initialized');
    }
    return this.authAppProvider;
  }
}
