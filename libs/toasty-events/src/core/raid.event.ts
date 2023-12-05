import { ChatClient, ChatRaidInfo, UserNotice } from '@twurple/chat';

export type RaidData = {
  channel: string;
  username: string;
  raidInfo: ChatRaidInfo;
  msg: UserNotice;
};

export function RaidEvent(
  client: ChatClient,
  callback: (data: RaidData) => void
): void {
  client.onRaid(
    (
      channel: string,
      username: string,
      raidInfo: ChatRaidInfo,
      msg: UserNotice
    ) => callback({ channel, username, raidInfo, msg })
  );
}
