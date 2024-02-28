import { Nullable } from '@azkaban/shared';
import { Brand } from '@azkaban/inventory-redux';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@azkaban/ui-components';

interface Props {
  brand: Nullable<Brand>;
  closeModal: () => void;
  isAdmin: boolean;
  deleteBrand: (id: string) => void;
}

export function BrandModalDeleteBrandPartial(props: Props) {
  return (
    <Dialog open={true} modal={true} onOpenChange={() => props.closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete {props.brand?.title}</DialogTitle>
          <DialogDescription>Are you sure?</DialogDescription>
        </DialogHeader>

        <DialogFooter>
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
              props.deleteBrand(props.brand?.id ?? '');
            }}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
