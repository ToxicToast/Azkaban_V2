import { HeaderOverview } from '@azkaban/ui-components';
import { useLocationHeaderViewModel } from './view-model';

export function LocationHeaderView() {
  const { openAddModal, isAdmin } = useLocationHeaderViewModel();

  return (
    <HeaderOverview
      title="Locations"
      buttonTitle="Add Location"
      openModal={openAddModal}
      isAdmin={isAdmin}
    />
  );
}
