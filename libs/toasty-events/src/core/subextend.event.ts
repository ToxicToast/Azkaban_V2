import { ChatClient, ChatSubExtendInfo, UserNotice } from '@twurple/chat';

export type SubExtendData = {
  channel: string;
  username: string;
  subInfo: ChatSubExtendInfo;
  msg: UserNotice;
};

export function SubExtendEvent(
  client: ChatClient,
  callback: (data: SubExtendData) => void
): void {
  client.onSubExtend(
    (
      channel: string,
      username: string,
      subInfo: ChatSubExtendInfo,
      msg: UserNotice
    ) => callback({ channel, username, subInfo, msg })
  );
}
