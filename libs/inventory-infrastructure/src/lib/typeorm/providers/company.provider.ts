import { CompanyTypeORMEntity } from '../entities';

export const companyProvider = [
  {
    provide: 'COMPANY_REPOSITORY',
    useFactory: (dataSource) => {
      return dataSource.getRepository(CompanyTypeORMEntity);
    },
    inject: ['DATA_SOURCE'],
  },
];
