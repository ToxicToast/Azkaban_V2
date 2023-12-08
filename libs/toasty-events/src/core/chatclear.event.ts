import { ChatClient, ClearChat } from '@twurple/chat';

export type ChatClearData = {
  channel: string;
  msg: ClearChat;
};

export function ChatClearEvent(
  client: ChatClient,
  callback: (data: ChatClearData) => void
): void {
  client.onChatClear((channel: string, msg: ClearChat) =>
    callback({ channel, msg })
  );
}
