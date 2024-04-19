import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule } from '@nestjs/microservices';
import { clientProvider, Queues } from '@azkaban/shared';
import { PassportModule } from '@nestjs/passport';
import { SupabaseStrategy } from '../../strategy/supabase.strategy';
import { AuthService } from './auth.service';
import { AuthWebhookService } from './webhook.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.SUPABASE_JWT_SECRET,
      signOptions: { expiresIn: '60min' },
    }),
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        ...clientProvider(Queues.AZKABAN_AUTH),
      },
      {
        name: 'WEBHOOK_SERVICE',
        ...clientProvider(Queues.AZKABAN_WEBHOOK),
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthWebhookService],
})
export class AuthModule {}
