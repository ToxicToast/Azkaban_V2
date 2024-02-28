import { Nullable } from '@azkaban/shared';
import { Brand } from '@azkaban/inventory-redux';
import { RestoreModal } from '@azkaban/ui-components';

interface Props {
  brand: Nullable<Brand>;
  closeModal: () => void;
  isAdmin: boolean;
  restoreBrand: (id: string) => void;
}

export function BrandModalRestoreBrandPartial(props: Props) {
  return (
    <RestoreModal
      id={props.brand?.id ?? ''}
      title={props.brand?.title ?? ''}
      isAdmin={props.isAdmin}
      closeModal={props.closeModal}
      submitModal={props.restoreBrand}
    />
  );
}
