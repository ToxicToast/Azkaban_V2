import { LocationHeaderView } from './header/view';
import { LocationTableView } from './table/view';
import { LocationModalView } from './modal/view';

export function LocationsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <LocationHeaderView key="LocationHeader" />
      <LocationTableView key="LocationTable" />
      <LocationModalView key="LocationModal" />
    </div>
  );
}
