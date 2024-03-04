import { DeleteModal } from '@azkaban/ui-components';
import { Nullable } from '@azkaban/shared';
import { Category } from '@azkaban/inventory-redux';

interface Props {
  category: Nullable<Category>;
  closeModal: () => void;
  isAdmin: boolean;
  deleteCategory: (id: string) => void;
}

export function CategoryModalDeleteCategoryPartial(props: Props) {
  return (
    <DeleteModal
      title={props.category?.title ?? ''}
      isAdmin={props.isAdmin}
      closeModal={() => props.closeModal()}
      submitModal={() => {
        props.deleteCategory(props.category?.id ?? '');
      }}
    />
  );
}
