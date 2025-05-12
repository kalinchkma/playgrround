import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { LangchainModule } from './modules/langchain/langchain.module';

@Module({
  imports: [AuthModule, LangchainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
