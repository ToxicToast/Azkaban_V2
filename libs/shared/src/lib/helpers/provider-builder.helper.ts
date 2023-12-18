import { DataSource, EntitySchema, MixedList } from 'typeorm';

export function buildDataSource(
  isTest: boolean,
  entities: MixedList<string | EntitySchema>
): Promise<DataSource> {
  const database = isTest
    ? buildTestProvider(entities)
    : buildProdProvider(entities);
  return database.initialize();
}

function buildTestProvider(
  entities: MixedList<string | EntitySchema>
): DataSource {
  return new DataSource({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities,
  });
}

function buildProdProvider(
  entities: MixedList<string | EntitySchema>
): DataSource {
  return new DataSource({
    type: 'mariadb',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_TABLE,
    synchronize: true,
    logging: false,
    entities,
  });
}
