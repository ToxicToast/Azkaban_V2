import { Authentication, Option, Plugin } from '@azkaban/shared';
import { Auth } from './auth';
import { Chat } from './chat';
import { Logger } from '@nestjs/common';
import { PluginLoader } from '@azkaban/toasty-events';
import { Api } from './api';

export class Bot {
  private readonly channels: Array<string>;
  private readonly authentication: Authentication;
  private readonly authProvider: Auth;
  private readonly chatProvider: Chat;
  private readonly apiProvider: Api;
  private plugins: Array<Plugin<unknown>>;

  constructor(private readonly options: Option) {
    this.authentication = this.options.authentication;
    this.channels = this.options.channels;
    this.plugins = [];
    this.authProvider = this.initAuth();
    this.chatProvider = this.initChat();
    this.apiProvider = this.initApi();
  }

  private initAuth(): Auth {
    return new Auth(this.authentication);
  }

  private initChat(): Chat {
    return new Chat(this.authProvider, this.channels);
  }

  private initApi(): Api {
    return new Api(this.authProvider);
  }

  private initPlugins(): void {
    this.plugins.forEach((plugin: Plugin<unknown>, index: number) => {
      Logger.debug(
        `Loading plugin: ${plugin.name} - ${index + 1} / ${this.plugins.length}`,
      );
      this.loadPlugin(plugin);
    });
  }

  private loadPlugin(plugin: Plugin<unknown>): void {
    PluginLoader(this.chatProvider.instance, plugin);
  }

  public addPlugin<Type>(plugin: Plugin<Type>): void {
    this.plugins.push(plugin);
  }

  public initBot(): void {
    this.initPlugins();
    this.chatProvider.init();
  }

  public stopBot(): void {
    this.chatProvider.instance.quit();
  }

  get api(): Api {
    return this.apiProvider;
  }

  get auth(): Auth {
    return this.authProvider;
  }
}
