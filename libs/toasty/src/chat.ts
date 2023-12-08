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
      requestMembershipEvents: true,
    });
  }

  public init(): void {
    this.chatProvider.connect();
  }

  get instance(): ChatClient {
    if (!this.chatProvider) {
      throw new Error('Chat Provider not initialized');
    }
    return this.chatProvider;
  }
}
