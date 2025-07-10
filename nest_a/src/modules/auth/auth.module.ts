import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { BullModule } from '@nestjs/bullmq';
import { UserProcess } from './user.process';

@Module({
  imports: [
    BullModule.registerQueue(
      {
        name: 'auth',
      },
      {
        name: 'another-queue',
      },
    ),
  ],
  providers: [AuthService, UserProcess],
  controllers: [AuthController],
})
export class AuthModule {}
