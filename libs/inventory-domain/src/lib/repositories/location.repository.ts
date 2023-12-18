import { Chainable, Nullable, Repository } from '@azkaban/shared';
import { LocationAnemic } from '../anemics';

interface LocationAdditions {
  findByTitle(title: string): Promise<Nullable<LocationAnemic>>;
  findByParentId(parent_id: Nullable<string>): Promise<Array<LocationAnemic>>;
  findByFreezer(isFreezer: boolean): Promise<Array<LocationAnemic>>;
}

export type LocationRepository = Chainable<
  Repository<LocationAnemic>,
  LocationAdditions
>;
