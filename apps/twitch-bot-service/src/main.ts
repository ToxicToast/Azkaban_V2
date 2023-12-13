import {
  INestApplication,
  INestMicroservice,
  Logger,
  RequestMethod,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import compression from 'compression';
import helmet from 'helmet';
import { consumerProvider } from '@azkaban/shared';

async function createApp(): Promise<INestApplication> {
  return await NestFactory.create(AppModule);
}

async function createMicroService(): Promise<INestMicroservice> {
  return await NestFactory.createMicroservice(AppModule, {
    ...consumerProvider('twitch-bot'),
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
  app.use(compression({}));
  app.use(helmet());
}

async function startApp(app: INestApplication): Promise<void> {
  const port = process.env.PORT || 3001;
  //
  await app.startAllMicroservices();
  await app.listen(port);
  //
  Logger.log(`🚀 Listening on Port: ${port}`);
}

async function bootstrap() {
  const app = await createApp();
  await createMicroService();
  configureApp(app);
  await startApp(app);
  Logger.log(`🚀 Twitch-Bot is running`);
}
bootstrap().catch((err) => Logger.error(err));
