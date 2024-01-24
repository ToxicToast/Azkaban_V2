import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@azkaban/ui-components';
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
    <Dialog open={true} modal={true} onOpenChange={() => props.closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Restore {props.category?.title}</DialogTitle>
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
              props.restoreCategory(props.category?.id ?? '');
            }}
          >
            Restore
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
