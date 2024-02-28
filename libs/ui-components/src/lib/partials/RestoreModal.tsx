import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../shadn';

interface Props {
  id: string;
  title: string;
  isAdmin: boolean;
  closeModal: () => void;
  submitModal: (id: string) => void;
}

export function RestoreModal(props: Props) {
  return (
    <Dialog open={true} modal={true} onOpenChange={() => props.closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Restore {props.title}</DialogTitle>
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
              props.submitModal(props.id);
            }}
          >
            Restore
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
