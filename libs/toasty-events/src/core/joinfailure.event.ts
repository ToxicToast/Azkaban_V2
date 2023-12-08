import { ChatClient } from '@twurple/chat';

export type JoinFailureData = {
  channel: string;
  reason: string;
};

export function JoinFailureEvent(
  client: ChatClient,
  callback: (data: JoinFailureData) => void
): void {
  client.onJoinFailure((channel: string, reason: string) =>
    callback({ channel, reason })
  );
}
