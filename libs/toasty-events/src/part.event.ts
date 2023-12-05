import { ChatClient } from '@twurple/chat';

type Data = {
  channel: string;
  username: string;
};

export function Part(client: ChatClient, callback: (data: Data) => void): void {
  client.onPart((channel: string, username: string) => {
    callback({ channel, username });
  });
}
