import { Show } from '@azkaban/ui-components';
import { CategoryModalChangeStatus } from './change-status';
import { useCategoryModalViewModel } from './view-model';
import { useMemo } from 'react';

export function CategoryModalView() {
  const {
    selectedCategory,
    statusModal,
    closeStatusModal,
    apiStatus,
    onSubmitStatus,
    isCategoryActive,
    isAdmin,
  } = useCategoryModalViewModel();

  return (
    <Show show={statusModal && apiStatus === 'loaded'}>
      <CategoryModalChangeStatus
        key={selectedCategory?.id}
        active={isCategoryActive}
        closeModal={() => closeStatusModal()}
        changeStatus={(status) =>
          onSubmitStatus(selectedCategory?.id ?? '', status)
        }
        isAdmin={isAdmin}
      />
    </Show>
  );
}
