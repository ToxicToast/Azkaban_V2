import { Controller, NotImplementedException } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthTopics } from '@azkaban/shared';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @MessagePattern(AuthTopics.REGISTER)
  async registerUser(
    @Payload()
    data: {
      email: string;
      password: string;
      username: string;
      group: string;
    },
  ): Promise<void> {
    await this.service.registerUser(
      data.email,
      data.password,
      data.username,
      data.group,
    );
    throw new NotImplementedException();
  }

  @MessagePattern(AuthTopics.LOGIN)
  async loginUser(@Payload() payload: { email: string; password: string }) {
    await this.service.loginUser(payload.email, payload.password);
    throw new NotImplementedException();
  }
}
