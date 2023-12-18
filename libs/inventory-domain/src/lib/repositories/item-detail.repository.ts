import { Chainable, Repository } from '@azkaban/shared';
import { ItemDetailAnemic } from '../anemics';

interface ItemDetailAdditions {
  findByItemId(item_id: string): Promise<Array<ItemDetailAnemic>>;
}

export type ItemDetailRepository = Chainable<
  Repository<ItemDetailAnemic>,
  ItemDetailAdditions
>;
