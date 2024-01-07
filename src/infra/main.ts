import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app.module';

import { SwaggerConfig } from './config/swagger.config';
import { ValidationPipeConfig } from './config/validation-pipe.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerConfig.createDocument(app);
  ValidationPipeConfig.configGlobalPipes(app);

  await app.listen(3333);
}
bootstrap();
