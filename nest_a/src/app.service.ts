import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AMAGHOR_SERVICE_NAME,
  AmaghorServiceClient,
} from './types/proto/amaghor';

@Injectable()
export class AppService {
  private amaghorService: AmaghorServiceClient;

  constructor(
    @Inject(AMAGHOR_SERVICE_NAME) private readonly amaghorClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.amaghorService =
      this.amaghorClient.getService<AmaghorServiceClient>(AMAGHOR_SERVICE_NAME);
  }

  getHello(): string {
    return 'Hello World!';
  }

  getGrpcService() {
    return this.amaghorService.getAmaghorData({
      query: 'Hello from gRPC!',
    });
  }
}
