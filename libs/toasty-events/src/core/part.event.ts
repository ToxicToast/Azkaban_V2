import { ChatClient } from '@twurple/chat';

export type PartData = { channel: string; username: string };

export function PartEvent(
  client: ChatClient,
  callback: (data: PartData) => void
): void {
  client.onPart((channel: string, username: string) =>
    callback({ channel, username })
  );
}
