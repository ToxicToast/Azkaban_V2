import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('twitch')
@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}
}
