/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

export class GlobalExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionsFilter.name);

  constructor(private httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    let httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | Record<string, string[]> = 'Internal server error';
    let errorTitle = 'Internal Server Error';

    if (exception instanceof HttpException) {
      httpStatus = exception.getStatus();
      const response = exception.getResponse();

      if (typeof response === 'string') {
        message = response;
        errorTitle = HttpStatus[httpStatus] || 'Error';
      } else if (typeof response === 'object') {
        const res: any = response;

        // Handle ValidationPipe formatted errors
        if (
          res.message &&
          typeof res.message === 'object' &&
          !Array.isArray(res.message)
        ) {
          message = res.message;
        } else if (Array.isArray(res.message)) {
          // default class-validator error format → convert to { field: [errors] }
          const fieldErrors: Record<string, string[]> = {};
          for (const err of res.message) {
            if (err.property && err.constraints) {
              fieldErrors[err.property] = Object.values(err.constraints);
            }
          }
          message = Object.keys(fieldErrors).length ? fieldErrors : res.message;
        } else {
          message = res.message || res.error || 'Unexpected error';
        }

        errorTitle = res.error || HttpStatus[httpStatus] || 'Error';
      }
    }

    this.logger.error(
      `Status: ${httpStatus}, Error: ${JSON.stringify(message)}\n ${exception.stack}`,
    );

    const responseBody = {
      statusCode: httpStatus,
      error: errorTitle,
      message,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
