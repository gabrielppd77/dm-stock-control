import { NestFactory } from '@nestjs/core';

import { AppModule } from './infra/modules/app.module';

import { SwaggerConfig } from './infra/config/swagger.config';
import { ValidationPipeConfig } from './infra/config/validation-pipe.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerConfig.createDocument(app);
  ValidationPipeConfig.configGlobalPipes(app);

  await app.listen(3333);
}
bootstrap();
