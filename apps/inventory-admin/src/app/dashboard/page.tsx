import { DashboardWelcomeView } from './welcome/view';
import { DashboardCardsView } from './cards/view';

export function DashboardPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <DashboardWelcomeView />
      <DashboardCardsView />
    </div>
  );
}
