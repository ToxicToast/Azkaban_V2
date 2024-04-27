import { INestApplication, Logger, RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import compression from 'compression';
import helmet from 'helmet';

async function createApp(): Promise<INestApplication> {
  return await NestFactory.create(AppModule, {
    cors: true,
    snapshot: true,
    rawBody: true,
  });
}

function configureApp(app: INestApplication): void {
  const globalPrefix = 'api';
  const exclude = [
    { path: 'health', method: RequestMethod.ALL },
    { path: 'sse/inventory', method: RequestMethod.ALL },
    { path: 'sse/notification', method: RequestMethod.ALL },
    { path: 'sse/twitch', method: RequestMethod.ALL },
    { path: 'swagger', method: RequestMethod.ALL },
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
  configureSwagger(app);
  configureCors(app);
  await startApp(app);
  Logger.log(`🚀 Azkaban-Gateway is running`);
  Logger.log(`🚀 Version: ${process.env.APP_VERSION}`);
}

bootstrap().catch((err) => Logger.error(err));
