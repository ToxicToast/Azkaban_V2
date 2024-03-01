import { Brand } from '@azkaban/inventory-redux';
import { Nullable } from '@azkaban/shared';
import { useState } from 'react';
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
  UpdateModal,
} from '@azkaban/ui-components';

interface Props {
  availableBrands: Array<Brand>;
  brand: Nullable<Brand>;
  closeModal: () => void;
  isAdmin: boolean;
  editBrand: (id: string, title: string, slug: string) => void;
}

export function BrandModalEditBrandPartial(props: Props) {
  const [title, setTitle] = useState<Nullable<string>>(
    props.brand?.title ?? null,
  );
  const [slug, setSlug] = useState<Nullable<string>>(props.brand?.slug ?? null);

  return (
    <UpdateModal
      title={title ?? 'Brand'}
      isAdmin={props.isAdmin}
      closeModal={() => props.closeModal()}
      submitModal={() => {
        props.editBrand(props.brand?.id ?? '', title ?? '', slug ?? '');
      }}
    >
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
