import { ChatClient, ChatMessage } from '@twurple/chat';

export type ActionData = {
  channel: string;
  username: string;
  text: string;
  msg: ChatMessage;
};

export function ActionEvent(
  client: ChatClient,
  callback: (data: ActionData) => void
): void {
  client.onAction(
    (channel: string, username: string, text: string, msg: ChatMessage) =>
      callback({ channel, username, text, msg })
  );
}
