import { ChatClient } from '@twurple/chat';

export type UniqueChatData = {
  channel: string;
  enabled: boolean;
};

export function UniqueChatEvent(
  client: ChatClient,
  callback: (data: UniqueChatData) => void
): void {
  client.onUniqueChat((channel: string, enabled: boolean) =>
    callback({ channel, enabled })
  );
}
