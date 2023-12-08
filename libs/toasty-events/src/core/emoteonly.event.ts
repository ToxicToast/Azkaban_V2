import { ChatClient } from '@twurple/chat';

export type EmoteOnlyData = {
  channel: string;
  enabled: boolean;
};

export function EmoteOnlyEvent(
  client: ChatClient,
  callback: (data: EmoteOnlyData) => void
): void {
  client.onEmoteOnly((channel: string, enabled: boolean) =>
    callback({ channel, enabled })
  );
}
