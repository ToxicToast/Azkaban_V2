import { Show } from '@azkaban/ui-components';
import { CategoryModalChangeStatusPartial } from './partials/change-status.partial';
import { useCategoryModalViewModel } from './view-model';
import { CategoryModalChangeParentPartial } from './partials/change-parent.partial';
import { CategoryModalAddCategoryPartial } from './partials/add-category.partial';
import { CategoryModalEditCategoryPartial } from './partials/edit-category.partial';
import { CategoryModalDeleteCategoryPartial } from './partials/delete-category.partial';
import { CategoryModalRestoreCategoryPartial } from './partials/restore-category.partial';

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
    closeDeleteModal,
    onSubmitDeleteCategory,
    onSubmitRestoreCategory,
    closeRestoreModal,
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
          <CategoryModalDeleteCategoryPartial
            closeModal={() => {
              closeDeleteModal();
            }}
            isAdmin={isAdmin}
            category={selectedCategory ?? null}
            deleteCategory={(id) => {
              onSubmitDeleteCategory(id);
            }}
          />
        </Show>
        <Show show={restoreModal}>
          <CategoryModalRestoreCategoryPartial
            closeModal={() => {
              closeRestoreModal();
            }}
            isAdmin={isAdmin}
            category={selectedCategory ?? null}
            restoreCategory={(id) => {
              onSubmitRestoreCategory(id);
            }}
          />
        </Show>
      </pre>
      <div />
    </>
  );
}
