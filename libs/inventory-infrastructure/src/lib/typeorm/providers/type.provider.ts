import { TypeTypeORMEntity } from '../entities';

export const typeProvider = [
  {
    provide: 'TYPE_REPOSITORY',
    useFactory: (dataSource) => {
      return dataSource.getRepository(TypeTypeORMEntity);
    },
    inject: ['DATA_SOURCE'],
  },
];
