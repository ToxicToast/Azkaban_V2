import { ChatClient } from '@twurple/chat';

export type TokenFetchFailureData = {
  error: Error;
};

export function TokenFetchFailureEvent(
  client: ChatClient,
  callback: (data: TokenFetchFailureData) => void
): void {
  client.onTokenFetchFailure((error: Error) => callback({ error }));
}
