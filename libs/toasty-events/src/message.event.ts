import { ChatClient, ChatMessage } from '@twurple/chat';

type Data = {
  channel: string;
  username: string;
  message: string;
  args: ChatMessage;
};

export function Message(
  client: ChatClient,
  callback: (data: Data) => void
): void {
  client.onMessage(
    (channel: string, user: string, message: string, msg: ChatMessage) => {
      callback({ channel, username: user, message, args: msg });
    }
  );
}
