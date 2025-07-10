import { Controller } from '@nestjs/common';
import {
  AmaghorRequest,
  AmaghorResponse,
  AmaghorServiceController,
} from './types/proto/amaghor';
import { Observable } from 'rxjs';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('amaghor')
export class AmaghorController implements AmaghorServiceController {
  @GrpcMethod('AmaghorService', 'getAmaghorData')
  getAmaghorData(
    request: AmaghorRequest,
  ): Promise<AmaghorResponse> | Observable<AmaghorResponse> | AmaghorResponse {
    console.log('Received gRPC request:', request);
    return {
      result: `Processed query: ${request.query}`,
      errors: ['none'],
    };
    throw new Error('Method not implemented.');
  }
}
