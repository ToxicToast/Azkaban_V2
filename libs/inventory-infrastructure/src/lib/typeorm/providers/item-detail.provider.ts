import { ItemDetailTypeORMEntity } from '../entities';

export const itemDetailProvider = [
  {
    provide: 'ITEMDETAIL_REPOSITORY',
    useFactory: (dataSource) => {
      return dataSource.getRepository(ItemDetailTypeORMEntity);
    },
    inject: ['DATA_SOURCE'],
  },
];
