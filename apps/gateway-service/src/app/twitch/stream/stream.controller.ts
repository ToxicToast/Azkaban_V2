import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StreamService } from './stream.service';

@ApiTags('twitch')
@Controller()
export class StreamController {
  constructor(private readonly service: StreamService) {}
}
