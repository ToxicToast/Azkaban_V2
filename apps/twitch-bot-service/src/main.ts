import { INestApplication, Logger, RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import compression from 'compression';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function createApp(): Promise<INestApplication> {
  return await NestFactory.create(AppModule);
}

function configureSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Azkaban')
    .setDescription('Home Microservices')
    .setVersion('0.0.1')
    .addBearerAuth()
    .addOAuth2()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  //
  SwaggerModule.setup('swagger', app, document);
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
  configureSwagger(app);
  await startApp(app);
  Logger.log(`🚀 Twitch-Bot is running`);
}

bootstrap().catch((err) => Logger.error(err));
