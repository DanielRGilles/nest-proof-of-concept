import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(port, host);
}
bootstrap();
