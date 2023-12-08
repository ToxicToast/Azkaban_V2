import { ChatClient, UserNotice } from '@twurple/chat';

export type RaidCancelData = {
  channel: string;
  msg: UserNotice;
};

export function RaidCancelEvent(
  client: ChatClient,
  callback: (data: RaidCancelData) => void
): void {
  client.onRaidCancel((channel: string, msg: UserNotice) =>
    callback({ channel, msg })
  );
}
