import { AddModal, Input, Label } from '@azkaban/ui-components';
import { useState } from 'react';

interface Props {
  closeModal: () => void;
  isAdmin: boolean;
  addBrand: (title: string) => void;
}

export function BrandModalAddBrandPartial(props: Props) {
  const [title, setTitle] = useState<string>('');

  return (
    <AddModal
      title="Brand"
      isAdmin={props.isAdmin}
      closeModal={() => props.closeModal()}
      submitModal={() => {
        props.addBrand(title);
      }}
    >
      <div className="w-full">
        <Label className="mb-2" htmlFor="title">
          Title
        </Label>
        <Input
          id="title"
          onChange={(element) => setTitle(element.target.value)}
        />
      </div>
    </AddModal>
  );
}
