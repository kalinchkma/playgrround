import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectQueue('auth')
    private readonly authQueue: Queue,
  ) {}

  async createUser(dto: CreateUserDto): Promise<string> {
    // throw new BadRequestException({
    //   message: {
    //     email: 'Invalid email',
    //     username: 'Invalid username',
    //   },
    //   statusCode: HttpStatus.BAD_REQUEST,
    // });

    await this.authQueue.add(
      'create-user',
      {
        ...dto,
      },
      {
        delay: 5000,
      },
    );
    console.info('create user queue', dto);
    // throw new HttpException(
    //   {
    //     message: {
    //       email: ['email already exist'],
    //     },
    //   },
    //   HttpStatus.CONFLICT,
    // );
    return 'Test create user';
  }
}
