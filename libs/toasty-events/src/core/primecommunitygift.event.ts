import {
  ChatClient,
  ChatPrimeCommunityGiftInfo,
  UserNotice,
} from '@twurple/chat';

export type PrimeCommunityGiftData = {
  channel: string;
  username: string;
  subInfo: ChatPrimeCommunityGiftInfo;
  msg: UserNotice;
};

export function PrimeCommunityGiftEvent(
  client: ChatClient,
  callback: (data: PrimeCommunityGiftData) => void
): void {
  client.onPrimeCommunityGift(
    (
      channel: string,
      username: string,
      subInfo: ChatPrimeCommunityGiftInfo,
      msg: UserNotice
    ) => callback({ channel, username, subInfo, msg })
  );
}
