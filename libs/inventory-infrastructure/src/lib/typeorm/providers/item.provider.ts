import { ItemTypeORMEntity } from '../entities';

export const itemProvider = [
  {
    provide: 'ITEM_REPOSITORY',
    useFactory: (dataSource) => {
      return dataSource.getRepository(ItemTypeORMEntity);
    },
    inject: ['DATA_SOURCE'],
  },
];
