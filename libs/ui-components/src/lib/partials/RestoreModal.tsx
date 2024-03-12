import { Button, DialogDescription, DialogTitle } from '../shadn';
import { BaseModal } from './BaseModal';

interface Props {
  title: string;
  isAdmin: boolean;
  closeModal: () => void;
  submitModal: () => void;
}

export function RestoreModal(props: Props) {
  return (
    <BaseModal
      onClose={() => props.closeModal()}
      header={
        <>
          <DialogTitle>Restore {props.title}</DialogTitle>
          <DialogDescription>Are you sure?</DialogDescription>
        </>
      }
      footer={
        <>
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              props.closeModal();
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={!props.isAdmin}
            onClick={() => {
              props.submitModal();
            }}
          >
            Restore
          </Button>
        </>
      }
    />
  );
}
