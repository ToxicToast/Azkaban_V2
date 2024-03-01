import { Button, DialogDescription, DialogTitle } from '../shadn';
import { BaseModal } from './BaseModal';
import { PropsWithChildren } from 'react';

interface Props {
  title: string;
  isAdmin: boolean;
  closeModal: () => void;
  submitModal: () => void;
}

export function UpdateModal(props: PropsWithChildren<Props>) {
  return (
    <BaseModal
      onClose={() => props.closeModal()}
      header={
        <>
          <DialogTitle>Edit {props.title}</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </>
      }
      footer={
        <Button
          type="submit"
          disabled={!props.isAdmin}
          onClick={() => {
            props.submitModal();
          }}
        >
          Save changes
        </Button>
      }
    >
      {props.children}
    </BaseModal>
  );
}
