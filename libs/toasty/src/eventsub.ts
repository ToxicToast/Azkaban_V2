import {
  DirectConnectionAdapter,
  EventSubHttpListener,
} from '@twurple/eventsub-http';
import { Api } from './api';

export class EventSub {
  private readonly listener: EventSubHttpListener;
  private readonly subscriptions: Array<any>;

  constructor(
    private readonly apiClient: Api,
    private readonly sslCert: string,
    private readonly sslKey: string,
    private readonly secret: string
  ) {
    this.subscriptions = [];
    this.listener = this.initListener(this.sslCert, this.sslKey, this.secret);
  }

  startListener(): void {
    this.listener.start();
  }

  stopListener(): void {
    this.subscriptions.forEach((subscription) => subscription.stop());
    this.listener.stop();
  }

  onStreamOnline(userId: string): void {
    this.subscriptions.push(
      this.listener.onStreamOnline(userId, (data) => {
        console.error(data);
      })
    );
  }

  onStreamOffline(userId: string): void {
    this.subscriptions.push(
      this.listener.onStreamOffline(userId, (data) => console.error(data))
    );
  }

  get instance(): EventSubHttpListener {
    if (!this.listener) {
      throw new Error('EventSub Provider not initialized');
    }
    return this.listener;
  }

  private initListener(
    sslCert: string,
    sslKey: string,
    secret: string
  ): EventSubHttpListener {
    return new EventSubHttpListener({
      apiClient: this.apiClient.instance,
      adapter: new DirectConnectionAdapter({
        hostName: 'api.toxictoast.de',
        sslCert: {
          cert: '',
          key: '',
        },
      }),
      secret,
    });
  }
}
