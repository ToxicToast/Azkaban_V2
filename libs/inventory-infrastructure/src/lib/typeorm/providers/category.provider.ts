import { CategoryTypeORMEntity } from '../entities';

export const categoryProvider = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useFactory: (dataSource) => {
      return dataSource.getRepository(CategoryTypeORMEntity);
    },
    inject: ['DATA_SOURCE'],
  },
];
