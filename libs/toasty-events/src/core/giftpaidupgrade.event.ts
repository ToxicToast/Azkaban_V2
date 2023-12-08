import { ChatClient, ChatSubGiftUpgradeInfo, UserNotice } from '@twurple/chat';

export type GiftPaidUpgradeData = {
  channel: string;
  username: string;
  subInfo: ChatSubGiftUpgradeInfo;
  msg: UserNotice;
};

export function GiftPaidUpgradeEvent(
  client: ChatClient,
  callback: (data: GiftPaidUpgradeData) => void
): void {
  client.onGiftPaidUpgrade(
    (
      channel: string,
      username: string,
      subInfo: ChatSubGiftUpgradeInfo,
      msg: UserNotice
    ) => callback({ channel, username, subInfo, msg })
  );
}
