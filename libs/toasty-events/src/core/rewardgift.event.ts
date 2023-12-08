import { ChatClient, ChatRewardGiftInfo, UserNotice } from '@twurple/chat';

export type RewardGiftData = {
  channel: string;
  username: string;
  rewardGiftInfo: ChatRewardGiftInfo;
  msg: UserNotice;
};

export function RewardGiftEvent(
  client: ChatClient,
  callback: (data: RewardGiftData) => void
): void {
  client.onRewardGift(
    (
      channel: string,
      username: string,
      rewardGiftInfo: ChatRewardGiftInfo,
      msg: UserNotice
    ) => callback({ channel, username, rewardGiftInfo, msg })
  );
}
