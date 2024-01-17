import { useAuthState } from '@azkaban/inventory-redux';

export function useDashboardWelcomeViewModel() {
  const { username } = useAuthState();

  return {
    username,
  };
}
