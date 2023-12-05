import { ChatClient, Whisper } from '@twurple/chat';

export type WhisperData = {
  username: string;
  text: string;
  msg: Whisper;
};

export function WhisperEvent(
  client: ChatClient,
  callback: (data: WhisperData) => void
): void {
  client.onWhisper((username: string, text: string, msg: Whisper) =>
    callback({ username, text, msg })
  );
}
