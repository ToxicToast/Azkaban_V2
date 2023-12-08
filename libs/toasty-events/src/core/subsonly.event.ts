import { ChatClient } from '@twurple/chat';

export type SubsOnlyData = {
  channel: string;
  enabled: boolean;
};

export function SubsOnlyEvent(
  client: ChatClient,
  callback: (data: SubsOnlyData) => void
): void {
  client.onSubsOnly((channel: string, enabled: boolean) =>
    callback({ channel, enabled })
  );
}
