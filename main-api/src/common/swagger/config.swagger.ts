import { DocumentBuilder } from '@nestjs/swagger';

export const ApiSwaggerOptions = new DocumentBuilder()
  .setTitle('Microservice API')
  .setDescription('Microservice API documentation')
  .setVersion('1.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    },
    'token',
  )
  .build();
