import { ChatClient } from '@twurple/chat';

export type NoPermissionData = {
  channel: string;
  text: string;
};

export function NoPermissionEvent(
  client: ChatClient,
  callback: (data: NoPermissionData) => void
): void {
  client.onNoPermission((channel: string, text: string) =>
    callback({ channel, text })
  );
}
