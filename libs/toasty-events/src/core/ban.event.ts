import { ChatClient } from '@twurple/chat';

export type BanData = {
  channel: string;
  username: string;
};

export function BanEvent(
  client: ChatClient,
  callback: (data: BanData) => void
): void {
  client.onBan((channel: string, username: string) =>
    callback({ channel, username })
  );
}
