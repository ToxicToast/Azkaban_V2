import { INestApplication, Logger, RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app/app.module';
import compression from 'compression';
import helmet from 'helmet';

async function createApp(): Promise<INestApplication> {
  return await NestFactory.create(AppModule, {
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
    { path: 'metrics', method: RequestMethod.ALL },
  ];
  //
  app.setGlobalPrefix(globalPrefix, {
    exclude,
  });
  app.useWebSocketAdapter(new WsAdapter());
  app.use(compression({}));
  app.use(helmet());
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

async function bootstrap() {
  const app = await createApp();
  configureApp(app);
  configureSwagger(app);
  await startApp(app);
  Logger.log(`🚀 Azkaban-Gateway is running`);
}

bootstrap().catch((err) => Logger.error(err));
