import { Show } from '@azkaban/ui-components';
import { CategoryModalChangeStatusPartial } from './partials/change-status.partial';
import { useCategoryModalViewModel } from './view-model';
import { CategoryModalChangeParentPartial } from './partials/change-parent.partial';
import { CategoryModalAddCategoryPartial } from './partials/add-category.partial';

export function CategoryModalView() {
  const {
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
    addModal,
    closeAddModal,
    onSubmitAddCategory,
  } = useCategoryModalViewModel();

  return (
    <>
      <Show show={statusModal && apiStatus === 'loaded'}>
        <CategoryModalChangeStatusPartial
          key={selectedId}
          active={isCategoryActive}
          closeModal={() => closeStatusModal()}
          changeStatus={(status) => onSubmitStatus(selectedId ?? '', status)}
          isAdmin={isAdmin}
        />
      </Show>
      <Show show={parentModal && apiStatus === 'loaded'}>
        <CategoryModalChangeParentPartial
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
      <Show show={addModal}>
        <CategoryModalAddCategoryPartial
          closeModal={() => closeAddModal()}
          isAdmin={isAdmin}
          availableCategories={categoryData}
          addCategory={(parent_id, title) =>
            onSubmitAddCategory(parent_id, title)
          }
        />
      </Show>
      <div />
    </>
  );
}
