import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { LangchainModule } from './modules/langchain/langchain.module';
import { BullModule } from '@nestjs/bullmq';
import { AmaghorController } from './amaghor.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AMAGHOR_SERVICE_NAME } from './types/proto/amaghor';

@Module({
  imports: [
    AuthModule,
    LangchainModule,
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    ClientsModule.register([
      {
        name: AMAGHOR_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          package: 'amaghor',
          protoPath: 'proto/amaghor.proto',
          url: '0.0.0.0:50051',
        },
      },
    ]),
  ],
  controllers: [AppController, AmaghorController],
  providers: [AppService],
})
export class AppModule {}
