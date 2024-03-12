import { Nullable } from '@azkaban/shared';
import { Location } from '@azkaban/inventory-redux';
import { useState } from 'react';
import {
  AddModal,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from '@azkaban/ui-components';

interface Props {
  availableLocations: Array<Location>;
  closeModal: () => void;
  isAdmin: boolean;
  addLocation: (
    parentId: Nullable<string>,
    title: string,
    freezer: boolean,
  ) => void;
}

export function LocationModalAddLocationPartial(props: Props) {
  const [parentId, setParentId] = useState<Nullable<string>>('none');
  const [title, setTitle] = useState<string>('');
  const [freezer, setFreezer] = useState<boolean>(false);

  return (
    <AddModal
      title="Category"
      isAdmin={props.isAdmin}
      closeModal={() => props.closeModal()}
      submitModal={() => {
        props.addLocation(
          parentId !== 'none' ? parentId : null,
          title,
          freezer,
        );
      }}
    >
      <>
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
              {props.availableLocations.map((location, index) => (
                <SelectItem key={index} value={location.id}>
                  {location.title}
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

        <div className="w-full flex flex-col">
          <Label className="mb-2" htmlFor="freezer">
            Freezer
          </Label>
          <Switch
            id="freezer"
            defaultChecked={freezer}
            onCheckedChange={(checked) => setFreezer(checked)}
            disabled={!props.isAdmin}
          />
        </div>
      </>
    </AddModal>
  );
}
