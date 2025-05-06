import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  createUser(): string {
    // throw new BadRequestException({
    //   message: {
    //     email: 'Invalid email',
    //     username: 'Invalid username',
    //   },
    //   statusCode: HttpStatus.BAD_REQUEST,
    // });
    throw new HttpException(
      {
        message: {
          email: ['email already exist'],
        },
      },
      HttpStatus.CONFLICT,
    );
    return 'Test create user';
  }
}
