import { ChatClient, ClearChat } from '@twurple/chat';

export type TimeoutData = {
  channel: string;
  username: string;
  duration: number;
  msg: ClearChat;
};

export function TimeoutEvent(
  client: ChatClient,
  callback: (data: TimeoutData) => void
): void {
  client.onTimeout(
    (channel: string, username: string, duration: number, msg: ClearChat) =>
      callback({ channel, username, duration, msg })
  );
}
