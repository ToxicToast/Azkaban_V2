import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  Button,
  Switch,
} from '@azkaban/ui-components';
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
    <Dialog open={true} modal={true} onOpenChange={() => props.closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Brand</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>

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

        <DialogFooter>
          <Button
            type="submit"
            disabled={!props.isAdmin}
            onClick={() => {
              onSubmit();
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
