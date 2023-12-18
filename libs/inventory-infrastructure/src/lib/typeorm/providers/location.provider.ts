import { LocationTypeORMEntity } from '../entities';

export const locationProvider = [
  {
    provide: 'LOCATION_REPOSITORY',
    useFactory: (dataSource) => {
      return dataSource.getRepository(LocationTypeORMEntity);
    },
    inject: ['DATA_SOURCE'],
  },
];
