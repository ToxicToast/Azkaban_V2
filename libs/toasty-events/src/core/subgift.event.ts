import { ChatClient, ChatSubGiftInfo, UserNotice } from '@twurple/chat';

export type SubGiftData = {
  channel: string;
  username: string;
  subInfo: ChatSubGiftInfo;
  msg: UserNotice;
};

export function SubGiftEvent(
  client: ChatClient,
  callback: (data: SubGiftData) => void
): void {
  client.onSubGift(
    (
      channel: string,
      username: string,
      subInfo: ChatSubGiftInfo,
      msg: UserNotice
    ) => callback({ channel, username, subInfo, msg })
  );
}
