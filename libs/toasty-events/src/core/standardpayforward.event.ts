import {
  ChatClient,
  ChatStandardPayForwardInfo,
  UserNotice,
} from '@twurple/chat';

export type StandardPayForwardData = {
  channel: string;
  username: string;
  forwardInfo: ChatStandardPayForwardInfo;
  msg: UserNotice;
};

export function StandardPayForwardEvent(
  client: ChatClient,
  callback: (data: StandardPayForwardData) => void
): void {
  client.onStandardPayForward(
    (
      channel: string,
      username: string,
      forwardInfo: ChatStandardPayForwardInfo,
      msg: UserNotice
    ) => callback({ channel, username, forwardInfo, msg })
  );
}
