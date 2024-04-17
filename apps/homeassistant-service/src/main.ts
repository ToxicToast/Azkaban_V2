import { INestApplication, Logger, RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { consumerProvider, Queues } from '@azkaban/shared';
import { Transport } from '@nestjs/microservices';

async function createApp(): Promise<INestApplication> {
  return await NestFactory.create(AppModule);
}

async function createHomeassistantMicroService(
  app: INestApplication,
): Promise<void> {
  app.connectMicroservice({
    ...consumerProvider(Queues.AZKABAN_HOMEASSISTANT),
  });
  app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      url: `mqtt://${process.env.HA_HOST}:${process.env.HA_PORT}`,
      username: process.env.HA_USERNAME,
      password: process.env.HA_PASSWORD,
    },
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
  await createHomeassistantMicroService(app);
  await startApp(app);
  Logger.log(`🚀 Homeassistant-Service is running`);
}

bootstrap().catch((err) => Logger.error(err));
