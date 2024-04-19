import { Module } from '@nestjs/common';
import { SpotifyController } from './spotify.controller';

@Module({
  controllers: [SpotifyController],
})
export class SpotifyModule {}
