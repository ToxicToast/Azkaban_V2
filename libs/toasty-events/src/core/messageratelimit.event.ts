import { ChatClient } from '@twurple/chat';

export type MessageRatelimitData = {
  channel: string;
  text: string;
};

export function MessageRatelimitEvent(
  client: ChatClient,
  callback: (data: MessageRatelimitData) => void
): void {
  client.onMessageRatelimit((channel: string, text: string) =>
    callback({ channel, text })
  );
}
