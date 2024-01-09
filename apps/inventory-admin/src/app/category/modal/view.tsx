import { Show } from '@azkaban/ui-components';
import { CategoryModalChangeStatus } from './change-status';
import { useCategoryModalViewModel } from './view-model';
import { CategoryModalChangeParent } from './change-parent';

export function CategoryModalView() {
  const {
    selectedCategory,
    statusModal,
    parentModal,
    closeStatusModal,
    apiStatus,
    onSubmitStatus,
    isCategoryActive,
    isAdmin,
    selectCategoryParentId,
    categoryData,
    closeParentModal,
    onSubmitParentId,
  } = useCategoryModalViewModel();

  return (
    <>
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
      <Show show={parentModal && apiStatus === 'loaded'}>
        <CategoryModalChangeParent
          key={selectedCategory?.id}
          parent_id={selectCategoryParentId}
          closeModal={() => closeParentModal()}
          changeParent={(parent_id) =>
            onSubmitParentId(selectedCategory?.id ?? '', parent_id)
          }
          isAdmin={isAdmin}
          availableCategories={categoryData ?? []}
        />
      </Show>
      <div />
    </>
  );
}
