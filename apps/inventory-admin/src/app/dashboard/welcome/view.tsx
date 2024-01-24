import { useDashboardWelcomeViewModel } from './view-model';
import { WelcomeBanner } from '@azkaban/ui-components';

export function DashboardWelcomeView() {
  const { username } = useDashboardWelcomeViewModel();

  return <WelcomeBanner username={username} />;
}
