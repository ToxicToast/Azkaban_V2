import { ChatClient } from '@twurple/chat';

export type MessageFailedData = {
  channel: string;
  reason: string;
};

export function MessageFailedEvent(
  client: ChatClient,
  callback: (data: MessageFailedData) => void
): void {
  client.onMessageFailed((channel: string, reason: string) =>
    callback({ channel, reason })
  );
}
