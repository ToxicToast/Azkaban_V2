import { Show } from '@azkaban/ui-components';
import { useLocationModalViewModel } from './view-model';
import { LocationModalAddLocationPartial } from './partials/add-location.partial';
import { Nullable } from '@azkaban/shared';

export function LocationModalView() {
  const {
    statusModal,
    parentModal,
    closeStatusModal,
    apiStatus,
    onSubmitStatus,
    isLocationActive,
    isAdmin,
    selectLocationParentId,
    locationData,
    closeParentModal,
    onSubmitParentId,
    selectedId,
    addModal,
    closeAddModal,
    onSubmitAddLocation,
    editModal,
    closeEditModal,
    deleteModal,
    restoreModal,
    selectedLocation,
    onSubmitEditLocation,
    closeDeleteModal,
    onSubmitDeleteLocation,
    onSubmitRestoreLocation,
    closeRestoreModal,
  } = useLocationModalViewModel();

  return (
    <>
      <Show show={statusModal && apiStatus === 'loaded'}>
        LocationModalChangeStatusPartial key={selectedId}
        active={isLocationActive}
        closeModal={() => closeStatusModal()}
        changeStatus=(status) = onSubmitStatus(selectedId ?? '', status)
        isAdmin={isAdmin}
      </Show>
      <Show show={parentModal && apiStatus === 'loaded'}>
        LocationModalChangeParentPartial key={selectedId}
        parent_id={selectLocationParentId}
        closeModal={() => closeParentModal()}
        changeParent=(parent_id) = onSubmitParentId(selectedId ?? '', parent_id)
        isAdmin={isAdmin}
        availableLocations=locationData.filter((location) = location.id !==
        selectedId) ?? []
      </Show>
      <Show show={addModal}>
        <LocationModalAddLocationPartial
          closeModal={() => closeAddModal()}
          isAdmin={isAdmin}
          availableLocations={locationData}
          addLocation={(
            parentId: Nullable<string>,
            title: string,
            freezer: boolean,
          ) => console.error(parentId, title, freezer)}
        />
        LocationModalAddLocationPartial closeModal=() = closeAddModal()
        isAdmin=isAdmin availableLocations=locationData
      </Show>
      <Show show={editModal}>
        LocationModalEditLocationPartial key=selectedId
        location=selectedLocation closeModal=() = closeEditModal()
        isAdmin=isAdmin onSubmitEditLocation=(location) =
        onSubmitEditLocation(selectedId ?? '', location)
      </Show>
      <Show show={deleteModal}>
        LocationModalDeleteLocationPartial key=selectedId
        location=selectedLocation closeModal=() = closeDeleteModal()
        isAdmin=isAdmin onSubmitDeleteLocation=(location) =
        onSubmitDeleteLocation(selectedId ?? '', location)
      </Show>
      <Show show={restoreModal}>
        LocationModalRestoreLocationPartial key=selectedId
        location=selectedLocation closeModal=() = closeRestoreModal()
        isAdmin=isAdmin onSubmitRestoreLocation=(location) =
        onSubmitRestoreLocation(selectedId ?? '', location)
      </Show>
    </>
  );
}
