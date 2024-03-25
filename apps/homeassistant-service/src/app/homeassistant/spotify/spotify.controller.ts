import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('spotify')
export class SpotifyController {
  @MessagePattern('azkaban/homeassistant/spotify/toxictoast')
  async onSpotifyToxicToast(@Payload() data: unknown) {
    console.error('ToxicToast Changed Spotify Song', data);
  }

  @MessagePattern('azkaban/homeassistant/spotify/sleepypeanut')
  async onSpotifySleepyPeanut(@Payload() data: unknown) {
    console.error('SleepyPeanut Changed Spotify Song', data);
  }
}
