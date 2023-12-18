import { DataSource, EntitySchema, MixedList } from 'typeorm';
import { buildDataSource } from '@azkaban/shared';
import {
  CategoryTypeORMEntity,
  CompanyTypeORMEntity,
  ItemDetailTypeORMEntity,
  ItemTypeORMEntity,
  LocationTypeORMEntity,
  SizeTypeORMEntity,
  TypeTypeORMEntity,
} from '../entities';

function environmentSwitcher(): Promise<DataSource> {
  const nodeEnv = process.env.NODE_ENV ?? 'dev';
  return buildDataSource(nodeEnv.includes('test'), [
    CategoryTypeORMEntity,
    CompanyTypeORMEntity,
    LocationTypeORMEntity,
    SizeTypeORMEntity,
    TypeTypeORMEntity,
    ItemTypeORMEntity,
    ItemDetailTypeORMEntity,
  ] as unknown as MixedList<string | EntitySchema>);
}

export const datasourceProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: () => {
      return environmentSwitcher();
    },
  },
];
