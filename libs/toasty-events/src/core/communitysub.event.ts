import { ChatClient, ChatCommunitySubInfo, UserNotice } from '@twurple/chat';

export type CommunitySubData = {
  channel: string;
  username: string;
  subInfo: ChatCommunitySubInfo;
  msg: UserNotice;
};

export function CommunitySubEvent(
  client: ChatClient,
  callback: (data: CommunitySubData) => void
): void {
  client.onCommunitySub(
    (
      channel: string,
      username: string,
      subInfo: ChatCommunitySubInfo,
      msg: UserNotice
    ) => callback({ channel, username, subInfo, msg })
  );
}
