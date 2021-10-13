import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

const APP_DEAFULT_PORT = 3001;

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   await app.listen(APP_DEAFULT_PORT);
}

bootstrap();
