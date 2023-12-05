import { Authentication, Option, Plugin } from '@azkaban/shared';
import { Auth } from './auth';
import { Chat } from './chat';

export class Bot {
  private readonly channels: Array<string>;
  private readonly authentication: Authentication;
  private readonly authProvider: Auth;
  private readonly chatProvider: Chat;
  private plugins: Array<Plugin<unknown>>;

  constructor(private options: Option) {
    this.authentication = options.authentication;
    this.channels = options.channels;
    this.plugins = [];
    this.authProvider = this.initAuth();
    this.chatProvider = this.initChat();
  }

  private initAuth(): Auth {
    return new Auth(this.authentication);
  }

  private initChat(): Chat {
    return new Chat(this.authProvider, this.channels);
  }

  private initPlugins(): void {
    this.plugins.forEach((plugin: Plugin<unknown>, index: number) => {
      // Load Plugin
      console.error(plugin, index);
    });
  }

  public initBot(): void {
    this.initPlugins();
    this.chatProvider.init();
  }
}
