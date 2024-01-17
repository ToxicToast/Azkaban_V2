import { Show } from '@azkaban/ui-components';
import { CategoryModalChangeStatusPartial } from './partials/change-status.partial';
import { useCategoryModalViewModel } from './view-model';
import { CategoryModalChangeParentPartial } from './partials/change-parent.partial';
import { CategoryModalAddCategoryPartial } from './partials/add-category.partial';
import { CategoryModalEditCategoryPartial } from './partials/edit-category.partial';

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
    editModal,
    closeEditModal,
    deleteModal,
    restoreModal,
    selectedCategory,
    onSubmitEditCategory,
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
      <pre>
        <Show show={editModal && selectedCategory !== null}>
          <CategoryModalEditCategoryPartial
            closeModal={() => {
              closeEditModal();
            }}
            isAdmin={isAdmin}
            availableCategories={
              categoryData.filter((category) => category.id !== selectedId) ??
              []
            }
            category={selectedCategory ?? null}
            editCategory={(id, parentId, title, slug) => {
              const realParent = parentId === 'none' ? null : parentId;
              onSubmitEditCategory(id, realParent, title, slug);
            }}
          />
        </Show>
        <Show show={deleteModal}>
          {JSON.stringify(selectedCategory, null, 4)}
        </Show>
        <Show show={restoreModal}>
          {JSON.stringify(selectedCategory, null, 4)}
        </Show>
      </pre>
      <div />
    </>
  );
}
