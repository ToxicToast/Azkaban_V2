import { Nullable } from '@azkaban/shared';
import { Brand } from '@azkaban/inventory-redux';
import { DeleteModal } from '@azkaban/ui-components';

interface Props {
  brand: Nullable<Brand>;
  closeModal: () => void;
  isAdmin: boolean;
  deleteBrand: (id: string) => void;
}

export function BrandModalDeleteBrandPartial(props: Props) {
  return (
    <DeleteModal
      title={props.brand?.title ?? 'Brand'}
      isAdmin={props.isAdmin}
      closeModal={() => {
        props.closeModal();
      }}
      submitModal={() => {
        props.deleteBrand(props.brand?.id ?? '');
      }}
    />
  );
}
