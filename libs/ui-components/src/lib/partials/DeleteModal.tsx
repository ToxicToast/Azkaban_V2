import { PropsWithChildren } from 'react';
import { Button, DialogDescription, DialogTitle } from '../shadn';
import { BaseModal } from './BaseModal';

interface Props {
  title: string;
  isAdmin: boolean;
  closeModal: () => void;
  submitModal: () => void;
}

export function DeleteModal(props: PropsWithChildren<Props>) {
  return (
    <BaseModal
      onClose={() => props.closeModal()}
      header={
        <>
          <DialogTitle>Delete {props.title}</DialogTitle>
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
            Delete
          </Button>
        </>
      }
    >
      {props.children}
    </BaseModal>
  );
}
