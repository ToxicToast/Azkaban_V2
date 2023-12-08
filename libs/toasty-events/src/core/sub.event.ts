import { ChatClient, ChatSubInfo } from '@twurple/chat';

export type SubData = {
  channel: string;
  username: string;
  subInfo: ChatSubInfo;
};

export function SubEvent(
  client: ChatClient,
  callback: (data: SubData) => void
): void {
  client.onSub((channel: string, username: string, subInfo: ChatSubInfo) =>
    callback({ channel, username, subInfo })
  );
}
