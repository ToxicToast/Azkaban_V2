import { RestoreModal } from '@azkaban/ui-components';
import { Nullable } from '@azkaban/shared';
import { Category } from '@azkaban/inventory-redux';

interface Props {
  category: Nullable<Category>;
  closeModal: () => void;
  isAdmin: boolean;
  restoreCategory: (id: string) => void;
}

export function CategoryModalRestoreCategoryPartial(props: Props) {
  return (
    <RestoreModal
      id={props.category?.id ?? ''}
      title={props.category?.title ?? ''}
      isAdmin={props.isAdmin}
      closeModal={props.closeModal}
      submitModal={props.restoreCategory}
    />
  );
}
