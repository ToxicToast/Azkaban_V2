import {
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  UpdateModal,
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
    slug: string,
  ) => void;
}

export function CategoryModalEditCategoryPartial(props: Props) {
  const [parentId, setParentId] = useState<Nullable<string>>(
    props.category?.parent_id ?? 'none',
  );
  const [title, setTitle] = useState<Nullable<string>>(
    props.category?.title ?? null,
  );
  const [slug, setSlug] = useState<Nullable<string>>(
    props.category?.slug ?? null,
  );

  return (
    <UpdateModal
      title={title ?? 'Category'}
      isAdmin={props.isAdmin}
      closeModal={() => props.closeModal()}
      submitModal={() => {
        props.editCategory(
          props.category?.id ?? '',
          parentId ?? null,
          title ?? '',
          slug ?? '',
        );
      }}
    >
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
    </UpdateModal>
  );
}
