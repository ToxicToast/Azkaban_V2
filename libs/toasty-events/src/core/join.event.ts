import { ChatClient } from '@twurple/chat';

export type JoinData = { channel: string; username: string };

export function JoinEvent(
  client: ChatClient,
  callback: (data: JoinData) => void
): void {
  client.onJoin((channel: string, username: string) =>
    callback({ channel, username })
  );
}
