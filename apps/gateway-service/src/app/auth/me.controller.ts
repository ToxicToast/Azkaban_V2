import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@ApiTags('auth')
@Controller('me')
export class MeController {
  constructor(private jwtService: JwtService) {}

  @Post()
  async getMe(@Body() body: { token: string }) {
    try {
      const token = body.token;
      const payload = await this.jwtService.decode(token);
      return {
        exp: payload.exp,
        auth_time: payload.auth_time,
        email: payload.email,
        username: payload.preferred_username,
        nickname: payload.nickname,
        groups: payload.groups,
      };
    } catch {
      throw new UnauthorizedException();
    }
  }
}
