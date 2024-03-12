import { Switch, UpdateModal } from '@azkaban/ui-components';
import { useCallback, useState } from 'react';

interface Props {
  active: boolean;
  changeStatus: (value: boolean) => void;
  closeModal: () => void;
  isAdmin: boolean;
}

export function BrandModalChangeStatusPartial(props: Props) {
  const [status, setStatus] = useState<boolean>(props.active);

  const onSubmit = useCallback(() => {
    props.changeStatus(status);
    props.closeModal();
  }, [props, status]);

  return (
    <UpdateModal
      title="Brand"
      isAdmin={props.isAdmin}
      closeModal={() => props.closeModal()}
      submitModal={() => onSubmit()}
    >
      <div>
        <h3 className="mb-4 text-lg font-medium">Status</h3>
        <div className="flex items-center justify-center">
          <div className="space-y-0.5 font-light text-sm pr-4">
            Make changes to the Visibility of your Brand.
          </div>
          <Switch
            defaultChecked={status}
            onCheckedChange={(checked) => setStatus(checked)}
            disabled={!props.isAdmin}
          />
        </div>
      </div>
    </UpdateModal>
  );
}
