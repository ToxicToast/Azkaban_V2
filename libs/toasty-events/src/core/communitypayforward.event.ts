import {
  ChatClient,
  ChatCommunityPayForwardInfo,
  UserNotice,
} from '@twurple/chat';

export type CommunityPayForwardData = {
  channel: string;
  username: string;
  forwardInfo: ChatCommunityPayForwardInfo;
  msg: UserNotice;
};

export function CommunityPayForwardEvent(
  client: ChatClient,
  callback: (data: CommunityPayForwardData) => void
): void {
  client.onCommunityPayForward(
    (
      channel: string,
      username: string,
      forwardInfo: ChatCommunityPayForwardInfo,
      msg: UserNotice
    ) => callback({ channel, username, forwardInfo, msg })
  );
}
