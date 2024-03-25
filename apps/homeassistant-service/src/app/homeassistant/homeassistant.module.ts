import { Module } from '@nestjs/common';
import { VacuumModule } from './vacuum/vacuum.module';
import { HomeassistantController } from './homeassistant.controller';
import { SpotifyModule } from './spotify/spotify.module';
import { BatteryModule } from './battery/battery.module';

@Module({
  imports: [VacuumModule, SpotifyModule, BatteryModule],
  controllers: [HomeassistantController],
  providers: [],
})
export class HomeassistantModule {}
