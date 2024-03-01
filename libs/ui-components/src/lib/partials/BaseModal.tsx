import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../shadn';
import { PropsWithChildren } from 'react';
import { Nullable } from '@azkaban/shared';

interface Props {
  onClose: () => void;
  header: Nullable<JSX.Element>;
  footer: Nullable<JSX.Element>;
}

export function BaseModal(props: PropsWithChildren<Props>) {
  return (
    <Dialog open={true} modal={true} onOpenChange={() => props.onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>{props.header}</DialogHeader>
        {props.children}
        <DialogFooter>{props.footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
