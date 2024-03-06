import { HeaderOverview } from '@azkaban/ui-components';
import { useBrandHeaderViewModel } from './view-model';

export function BrandHeaderView() {
  const { openAddModal, isAdmin } = useBrandHeaderViewModel();

  return (
    <HeaderOverview
      key="BrandHeaderOverview"
      title="Brands"
      buttonTitle="Add Brand"
      openModal={openAddModal}
      isAdmin={isAdmin}
    />
  );
}
