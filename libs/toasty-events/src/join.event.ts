import { ChatClient } from '@twurple/chat';

type Data = {
  channel: string;
  username: string;
};

export function Join(client: ChatClient, callback: (data: Data) => void): void {
  client.onJoin((channel: string, username: string) => {
    callback({ channel, username });
  });
}
