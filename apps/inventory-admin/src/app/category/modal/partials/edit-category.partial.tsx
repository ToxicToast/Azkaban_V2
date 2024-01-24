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
  category: Nullable<Category>;
  closeModal: () => void;
  isAdmin: boolean;
  editCategory: (
    id: string,
    parentId: Nullable<string>,
    title: string,
    slug: string
  ) => void;
}

export function CategoryModalEditCategoryPartial(props: Props) {
  const [parentId, setParentId] = useState<Nullable<string>>(
    props.category?.parent_id ?? 'none'
  );
  const [title, setTitle] = useState<Nullable<string>>(
    props.category?.title ?? null
  );
  const [slug, setSlug] = useState<Nullable<string>>(
    props.category?.slug ?? null
  );

  return (
    <Dialog open={true} modal={true} onOpenChange={() => props.closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit {title}</DialogTitle>
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
            defaultValue={title ?? undefined}
            onChange={(element) => setTitle(element.target.value)}
          />
        </div>

        <div className="w-full">
          <Label className="mb-2" htmlFor="slug">
            Slug
          </Label>
          <Input
            id="slug"
            defaultValue={slug ?? undefined}
            onChange={(element) => setSlug(element.target.value)}
          />
        </div>

        <DialogFooter>
          <Button
            type="submit"
            disabled={!props.isAdmin}
            onClick={() => {
              props.editCategory(
                props.category?.id ?? '',
                parentId ?? null,
                title ?? '',
                slug ?? ''
              );
            }}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
