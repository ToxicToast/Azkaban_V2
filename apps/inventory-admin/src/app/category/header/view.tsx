import { HeaderOverview } from '@azkaban/ui-components';
import { useCategoryHeaderViewModel } from './view-model';

export function CategoryHeaderView() {
  const { openAddModal, isAdmin } = useCategoryHeaderViewModel();
  return (
    <HeaderOverview
      title="Categories"
      buttonTitle="Add Category"
      openModal={() => openAddModal()}
      isAdmin={isAdmin}
    />
  );
}
