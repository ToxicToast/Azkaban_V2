import { ChatClient } from '@twurple/chat';

export type AuthenticationFailureData = {
  text: string;
  retryCount: number;
};

export function AuthenticationFailureEvent(
  client: ChatClient,
  callback: (data: AuthenticationFailureData) => void
): void {
  client.onAuthenticationFailure((text: string, retryCount: number) =>
    callback({ text, retryCount })
  );
}
