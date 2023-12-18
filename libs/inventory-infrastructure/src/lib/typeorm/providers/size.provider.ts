import { SizeTypeORMEntity } from '../entities';

export const sizeProvider = [
  {
    provide: 'SIZE_REPOSITORY',
    useFactory: (dataSource) => {
      return dataSource.getRepository(SizeTypeORMEntity);
    },
    inject: ['DATA_SOURCE'],
  },
];
