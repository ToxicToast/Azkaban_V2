import { ChatAnnouncementInfo, ChatClient, UserNotice } from '@twurple/chat';

export type AnnouncementData = {
  channel: string;
  username: string;
  announcementInfo: ChatAnnouncementInfo;
  msg: UserNotice;
};

export function AnnouncementEvent(
  client: ChatClient,
  callback: (data: AnnouncementData) => void
): void {
  client.onAnnouncement(
    (
      channel: string,
      username: string,
      announcementInfo: ChatAnnouncementInfo,
      msg: UserNotice
    ) => callback({ channel, username, announcementInfo, msg })
  );
}
