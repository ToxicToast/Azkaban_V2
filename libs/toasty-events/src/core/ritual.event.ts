import { ChatClient, ChatRitualInfo, UserNotice } from '@twurple/chat';

export type RitualData = {
  channel: string;
  username: string;
  ritualInfo: ChatRitualInfo;
  msg: UserNotice;
};

export function RitualEvent(
  client: ChatClient,
  callback: (data: RitualData) => void
): void {
  client.onRitual(
    (
      channel: string,
      username: string,
      ritualInfo: ChatRitualInfo,
      msg: UserNotice
    ) => callback({ channel, username, ritualInfo, msg })
  );
}
