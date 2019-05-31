import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan = require('morgan');
import * as express from 'express';

const port = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  app.use(express.static('client/dist/client'));
  await app.listen(port);
}
bootstrap();
