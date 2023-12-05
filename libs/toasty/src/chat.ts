import { Auth } from './auth';
import { ChatClient } from '@twurple/chat';

export class Chat {
  private readonly chatProvider: ChatClient;
  constructor(
    private readonly authProvider: Auth,
    private readonly channels: Array<string>
  ) {
    this.chatProvider = this.initChat();
  }

  private initChat(): ChatClient {
    return new ChatClient({
      authProvider: this.authProvider.instance,
      channels: this.channels,
    });
  }

  public init(): void {
    this.chatProvider.connect();
    this.chatProvider.onConnect(() => {
      console.debug(
        '[Chat]',
        'Joining Channels:',
        this.chatProvider.join(', ')
      );
      console.debug('[Chat]', 'Successfully connected to Twitch Chat.');
    });
    this.chatProvider.onAuthenticationFailure(
      (text: string, retryCount: number) => {
        console.error(
          '[Chat]',
          'Authentication Failure:',
          text,
          `(Retries: ${retryCount})`
        );
      }
    );
  }

  get instance(): ChatClient {
    if (!this.chatProvider) {
      throw new Error('Chat Provider not initialized');
    }
    return this.chatProvider;
  }
}
