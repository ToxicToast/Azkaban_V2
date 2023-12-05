import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import compression from 'compression';
import helmet from 'helmet';

async function createApp(): Promise<INestApplication> {
  return await NestFactory.create(AppModule);
}

function configureApp(app: INestApplication): void {
  app.use(compression({}));
  app.use(helmet());
}

async function startApp(app: INestApplication): Promise<void> {
  const port = process.env.PORT || 3001;
  //
  await app.listen(port);
  //
  Logger.log(`🚀 Listening on Port: ${port}`);
}

async function configureCors(app: INestApplication): Promise<void> {
  app.enableCors({
    origin: '*',
  });
}

async function bootstrap() {
  const app = await createApp();
  configureApp(app);
  configureCors(app);
  await startApp(app);
  Logger.log(`🚀 Twitch-Bot is running`);
}

bootstrap().catch((err) => Logger.error(err));
