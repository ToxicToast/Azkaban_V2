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
    selectedId,
  } = useCategoryModalViewModel();

  return (
    <>
      <Show show={statusModal && apiStatus === 'loaded'}>
        <CategoryModalChangeStatus
          key={selectedId}
          active={isCategoryActive}
          closeModal={() => closeStatusModal()}
          changeStatus={(status) => onSubmitStatus(selectedId ?? '', status)}
          isAdmin={isAdmin}
        />
      </Show>
      <Show show={parentModal && apiStatus === 'loaded'}>
        <CategoryModalChangeParent
          key={selectedId}
          parent_id={selectCategoryParentId}
          closeModal={() => closeParentModal()}
          changeParent={(parent_id) =>
            onSubmitParentId(selectedId ?? '', parent_id)
          }
          isAdmin={isAdmin}
          availableCategories={
            categoryData.filter((category) => category.id !== selectedId) ?? []
          }
        />
      </Show>
      <div />
    </>
  );
}
