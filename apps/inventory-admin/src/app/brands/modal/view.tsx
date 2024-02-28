import { useBrandModalViewModel } from './view-model';
import { Show } from '@azkaban/ui-components';
import { BrandModalChangeStatusPartial } from './partials/change-status.partial';
import { BrandModalEditBrandPartial } from './partials/edit-brand.partial';
import { BrandModalDeleteBrandPartial } from './partials/delete-brand.partial';
import { BrandModalRestoreBrandPartial } from './partials/restore-brand.partial';

export function BrandModalView() {
  const {
    statusModal,
    closeStatusModal,
    apiStatus,
    onSubmitStatus,
    isBrandActive,
    isAdmin,
    brandData,
    selectedId,
    addModal,
    closeAddModal,
    onSubmitAddBrand,
    editModal,
    closeEditModal,
    deleteModal,
    restoreModal,
    selectedBrand,
    onSubmitEditBrand,
    closeDeleteModal,
    onSubmitDeleteBrand,
    onSubmitRestoreBrand,
    closeRestoreModal,
  } = useBrandModalViewModel();

  return (
    <>
      <Show show={statusModal && apiStatus === 'loaded'}>
        <BrandModalChangeStatusPartial
          key={selectedId}
          active={isBrandActive}
          closeModal={() => closeStatusModal()}
          changeStatus={(status) => onSubmitStatus(selectedId ?? '', status)}
          isAdmin={isAdmin}
        />
      </Show>
      <Show show={addModal}>BrandModalAddCategoryPartial</Show>
      <pre>
        <Show show={editModal && selectedBrand !== null}>
          <BrandModalEditBrandPartial
            closeModal={() => {
              closeEditModal();
            }}
            isAdmin={isAdmin}
            availableBrands={
              brandData.filter((brand) => brand.id !== selectedId) ?? []
            }
            brand={selectedBrand ?? null}
            editBrand={(id, title, slug) => onSubmitEditBrand(id, title, slug)}
          />
        </Show>
        <Show show={deleteModal}>
          <BrandModalDeleteBrandPartial
            closeModal={() => {
              closeDeleteModal();
            }}
            isAdmin={isAdmin}
            brand={selectedBrand ?? null}
            deleteBrand={(id) => {
              onSubmitDeleteBrand(id);
            }}
          />
        </Show>
        <Show show={restoreModal}>
          <BrandModalRestoreBrandPartial
            closeModal={() => {
              closeRestoreModal();
            }}
            isAdmin={isAdmin}
            brand={selectedBrand ?? null}
            restoreBrand={(id) => {
              onSubmitRestoreBrand(id);
            }}
          />
        </Show>
      </pre>
      <div />
    </>
  );
}
