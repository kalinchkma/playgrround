import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<string> {
    console.info(createUserDto);
    return this.authService.createUser(createUserDto);
  }
}
