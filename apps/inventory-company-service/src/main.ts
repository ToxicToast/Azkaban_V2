import { INestApplication, Logger, RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { consumerProvider, Queues } from '@azkaban/shared';

async function createApp(): Promise<INestApplication> {
  return await NestFactory.create(AppModule);
}

async function createInventoryMicroService(
  app: INestApplication,
): Promise<void> {
  app.connectMicroservice({
    ...consumerProvider(Queues.INVENTORY_COMPANIES),
  });
}

function configureApp(app: INestApplication): void {
  const globalPrefix = 'api';
  const exclude = [
    { path: 'health', method: RequestMethod.ALL },
    { path: 'metrics', method: RequestMethod.ALL },
  ];
  //
  app.setGlobalPrefix(globalPrefix, {
    exclude,
  });
  app.enableShutdownHooks();
}

async function startApp(app: INestApplication): Promise<void> {
  const port = process.env.PORT || 3000;
  //
  await app.startAllMicroservices();
  await app.listen(port);
  //
  Logger.log(`🚀 Listening on Port: ${port}`);
}

async function bootstrap() {
  const app = await createApp();
  configureApp(app);
  await createInventoryMicroService(app);
  await startApp(app);
  Logger.log(`🚀 Inventory-Company-Service is running`);
}

bootstrap().catch((err) => Logger.error(err));
