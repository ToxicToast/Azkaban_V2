import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  Button,
  SelectTrigger,
  Select,
  SelectValue,
  SelectItem,
  SelectContent,
} from '@azkaban/ui-components';
import { useCallback, useState } from 'react';
import { Nullable } from '@azkaban/shared';
import { Category } from '@azkaban/inventory-redux';

interface Props {
  availableCategories: Array<Category>;
  parent_id: Nullable<string>;
  changeParent: (value: Nullable<string>) => void;
  closeModal: () => void;
  isAdmin: boolean;
}

export function CategoryModalChangeParentPartial(props: Props) {
  const [parentId, setParentId] = useState<Nullable<string>>(
    props.parent_id ?? 'none'
  );

  const onSubmit = useCallback(() => {
    props.changeParent(parentId !== 'none' ? parentId : null);
    props.closeModal();
  }, [props, parentId]);

  return (
    <Dialog open={true} modal={true} onOpenChange={() => props.closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>

        <div className="w-full">
          <Select
            defaultValue={parentId ?? undefined}
            onValueChange={(value: string) => setParentId(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              {props.availableCategories.map((category, index) => (
                <SelectItem key={index} value={category.id}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
