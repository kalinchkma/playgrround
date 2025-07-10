/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
    required: true,
    uniqueItems: false,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'John@example.com',
    required: true,
    uniqueItems: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
    required: true,
    uniqueItems: false,
  })
  @IsString()
  password: string;
}
