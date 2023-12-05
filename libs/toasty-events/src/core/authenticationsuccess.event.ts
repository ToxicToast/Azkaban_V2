import { ChatClient } from '@twurple/chat';

export type AuthenticationSuccessData = object;

export function AuthenticationSuccessEvent(
  client: ChatClient,
  callback: (data: AuthenticationSuccessData) => void
): void {
  client.onAuthenticationSuccess(() => callback({}));
}
