import { ChatClient } from '@twurple/chat';
import { Optional } from '@azkaban/shared';

export type SlowData = {
  channel: string;
  enabled: boolean;
  delay: Optional<number>;
};

export function SlowEvent(
  client: ChatClient,
  callback: (data: SlowData) => void
): void {
  client.onSlow((channel: string, enabled: boolean, delay: Optional<number>) =>
    callback({ channel, enabled, delay })
  );
}
