import { Chainable, Nullable, Repository } from '@azkaban/shared';
import { ItemAnemic } from '../anemics';

interface ItemAdditions {
  findByTitle(title: string): Promise<Nullable<ItemAnemic>>;
  findByCategoryId(category_id: Nullable<string>): Promise<Array<ItemAnemic>>;
  findByCompanyId(company_id: Nullable<string>): Promise<Array<ItemAnemic>>;
  findByLocationId(location_id: Nullable<string>): Promise<Array<ItemAnemic>>;
  findBySizeId(size_id: Nullable<string>): Promise<Array<ItemAnemic>>;
  findByTypeId(type_id: Nullable<string>): Promise<Array<ItemAnemic>>;
}

export type ItemRepository = Chainable<Repository<ItemAnemic>, ItemAdditions>;
