import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthTopics, Nullable } from '@azkaban/shared';
import { Session } from '@supabase/supabase-js';
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
  ): Promise<Nullable<Session>> {
    const response = await this.service.registerUser(
      data.email,
      data.password,
      data.username,
      data.group,
    );
    return response?.data?.session ?? null;
  }

  @MessagePattern(AuthTopics.LOGIN)
  async loginUser(@Payload() payload: { email: string; password: string }) {
    const response = await this.service.loginUser(
      payload.email,
      payload.password,
    );
    return response?.data?.session ?? null;
  }
}
