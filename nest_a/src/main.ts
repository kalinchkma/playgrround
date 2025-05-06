/* eslint-disable @typescript-eslint/no-floating-promises */
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { GlobalExceptionsFilter } from './filters/global-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const formattedErrors = errors.reduce(
          (acc, err) => {
            acc[err.property] = err.constraints
              ? Object.values(err.constraints)
              : [];
            return acc;
          },
          {} as Record<string, string[]>,
        );
        return new BadRequestException({
          message: formattedErrors,
          error: 'Bad Request',
          statusCode: 400,
        });
      },
    }),
  );

  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new GlobalExceptionsFilter(httpAdapter));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
