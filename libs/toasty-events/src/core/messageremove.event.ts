import { ChatClient, ClearMsg } from '@twurple/chat';

export type MessageRemoveData = {
  channel: string;
  messageId: string;
  msg: ClearMsg;
};

export function MessageRemoveEvent(
  client: ChatClient,
  callback: (data: MessageRemoveData) => void
): void {
  client.onMessageRemove((channel: string, messageId: string, msg: ClearMsg) =>
    callback({ channel, messageId, msg })
  );
}
