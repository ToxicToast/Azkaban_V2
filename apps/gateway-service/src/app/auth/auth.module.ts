import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { HttpModule } from '@nestjs/axios';
import { MeController } from './me.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [HttpModule, JwtModule],
  controllers: [AuthController, MeController],
  providers: [],
})
export class AuthModule {}
