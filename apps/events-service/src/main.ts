import { INestApplication, Logger, RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import compression from 'compression';
import helmet from 'helmet';

async function createApp(): Promise<INestApplication> {
  return await NestFactory.create(AppModule, {
    cors: true,
  });
}

function configureApp(app: INestApplication): void {
  const globalPrefix = 'api';
  const exclude = [
    { path: 'health', method: RequestMethod.ALL },
    { path: '/', method: RequestMethod.ALL },
  ];
  //
  app.setGlobalPrefix(globalPrefix, {
    exclude,
  });
  app.enableShutdownHooks();
  app.use(compression({}));
  app.use(helmet());
  //
}

async function startApp(app: INestApplication): Promise<void> {
  const port = process.env.PORT || 3000;
  //
  await app.listen(port);
  //
  Logger.log(`🚀 Listening on Port: ${port}`);
}

async function configureCors(app: INestApplication): Promise<void> {
  app.enableCors({
    origin: '*',
    maxAge: 3600,
    optionsSuccessStatus: 200,
  });
}

async function bootstrap() {
  const app = await createApp();
  configureApp(app);
  configureCors(app);
  await startApp(app);
  Logger.log(`🚀 Azkaban-Events is running`);
  Logger.log(`🚀 Version: ${process.env.APP_VERSION}`);
}

bootstrap().catch((err) => Logger.error(err));
