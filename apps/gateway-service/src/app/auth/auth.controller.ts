import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('register')
  async registerUser(
    @Body()
    body: {
      email: string;
      password: string;
      username: string;
      group: string;
    },
  ) {
    const data = await this.service.registerUser(
      body.email,
      body.password,
      body.username,
      body.group,
    );
    if (data === null) {
      throw new HttpException('User not found', 404);
    }
    return data;
  }

  @Post('login')
  async loginUser(@Body() body: { email: string; password: string }) {
    const data = await this.service.loginUser(body.email, body.password);
    if (data === null) {
      throw new HttpException('User not found', 404);
    }
    return data;
  }
}
