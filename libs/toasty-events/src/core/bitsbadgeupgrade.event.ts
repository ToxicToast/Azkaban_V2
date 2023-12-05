import {
  ChatBitsBadgeUpgradeInfo,
  ChatClient,
  UserNotice,
} from '@twurple/chat';

export type BitsBadgeUpgradeData = {
  channel: string;
  username: string;
  upgradeInfo: ChatBitsBadgeUpgradeInfo;
  msg: UserNotice;
};

export function BitsBadgeUpgradeEvent(
  client: ChatClient,
  callback: (data: BitsBadgeUpgradeData) => void
): void {
  client.onBitsBadgeUpgrade(
    (
      channel: string,
      username: string,
      upgradeInfo: ChatBitsBadgeUpgradeInfo,
      msg: UserNotice
    ) => callback({ channel, username, upgradeInfo, msg })
  );
}
