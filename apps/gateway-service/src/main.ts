/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function createApp(): Promise<INestApplication> {
  return await NestFactory.create(AppModule, {
    snapshot: true,
  });
}

function configureApp(app: INestApplication): void {
  const globalPrefix = 'api';
  //
  app.setGlobalPrefix(globalPrefix);
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
}

async function bootstrap() {
  const app = await createApp();
  configureApp(app);
  configureSwagger(app);
  await startApp(app);
  Logger.log(`🚀 Azkaban-Gateway is running`);
}

bootstrap();
