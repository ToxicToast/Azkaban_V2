import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@azkaban/ui-components';
import { useState } from 'react';
import { Nullable } from '@azkaban/shared';
import { Category } from '@azkaban/inventory-redux';

interface Props {
  availableCategories: Array<Category>;
  closeModal: () => void;
  isAdmin: boolean;
  addCategory: (parentId: Nullable<string>, title: string) => void;
}

export function CategoryModalAddCategoryPartial(props: Props) {
  const [parentId, setParentId] = useState<Nullable<string>>('none');
  const [title, setTitle] = useState<string>('');

  return (
    <Dialog open={true} modal={true} onOpenChange={() => props.closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>

        <div className="w-full">
          <Label className="mb-2">Parent Category</Label>
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

        <div className="w-full">
          <Label className="mb-2" htmlFor="title">
            Title
          </Label>
          <Input
            id="title"
            onChange={(element) => setTitle(element.target.value)}
          />
        </div>

        <DialogFooter>
          <Button
            type="submit"
            disabled={!props.isAdmin}
            onClick={() => {
              props.addCategory(parentId !== 'none' ? parentId : null, title);
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
