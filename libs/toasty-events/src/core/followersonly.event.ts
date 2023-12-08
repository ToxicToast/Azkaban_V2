import { ChatClient } from '@twurple/chat';
import { Optional } from '@azkaban/shared';

export type FollowersOnlyData = {
  channel: string;
  enabled: boolean;
  delay: Optional<number>;
};

export function FollowersOnlyEvent(
  client: ChatClient,
  callback: (data: FollowersOnlyData) => void
): void {
  client.onFollowersOnly(
    (channel: string, enabled: boolean, delay: Optional<number>) =>
      callback({ channel, enabled, delay })
  );
}
