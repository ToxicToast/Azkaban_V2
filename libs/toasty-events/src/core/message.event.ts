import { ChatClient, ChatMessage } from '@twurple/chat';

export type MessageData = {
  channel: string;
  username: string;
  message: string;
  args: ChatMessage;
};

export function MessageEvent(
  client: ChatClient,
  callback: (raw: MessageData) => void
): void {
  client.onMessage(
    (channel: string, username: string, message: string, args: ChatMessage) =>
      callback({ channel, username, message, args })
  );
}
