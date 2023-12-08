import { ChatClient, ChatSubInfo, UserNotice } from '@twurple/chat';

export type ResubData = {
  channel: string;
  username: string;
  subInfo: ChatSubInfo;
  msg: UserNotice;
};

export function ResubEvent(
  client: ChatClient,
  callback: (data: ResubData) => void
): void {
  client.onResub(
    (
      channel: string,
      username: string,
      subInfo: ChatSubInfo,
      msg: UserNotice
    ) => callback({ channel, username, subInfo, msg })
  );
}
