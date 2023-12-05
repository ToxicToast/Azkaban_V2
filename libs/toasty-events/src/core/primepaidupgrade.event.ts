import { ChatClient, ChatSubUpgradeInfo, UserNotice } from '@twurple/chat';

export type PrimePaidUpgradeData = {
  channel: string;
  username: string;
  subInfo: ChatSubUpgradeInfo;
  msg: UserNotice;
};

export function PrimePaidUpgradeEvent(
  client: ChatClient,
  callback: (data: PrimePaidUpgradeData) => void
): void {
  client.onPrimePaidUpgrade(
    (
      channel: string,
      username: string,
      subInfo: ChatSubUpgradeInfo,
      msg: UserNotice
    ) => callback({ channel, username, subInfo, msg })
  );
}
